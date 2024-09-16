import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const cp = cpus();
  let number = 10;
  // prettier-ignore
  const workerResults = await Promise.allSettled(
    cp.map(() => new Promise((resolve, reject) => {
      const worker = new Worker(`${__dirname}/worker.js`, {
        workerData: number += 1,
      });
      worker.on('message', (msg) => resolve(msg));
      worker.on('error', (msg) => reject(msg));
    })),
  );

  const results = workerResults.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(results);

  return results;
};

performCalculations();
