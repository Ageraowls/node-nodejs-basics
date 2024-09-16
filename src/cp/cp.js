import { spawn } from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'script.js');
  const child = spawn('node', [filePath, ...args.split(' ')]);
  let initiated = false;

  process.stdin.on('data', (msg) => {
    child.stdin.write(msg);
  });

  child.stdout.on('data', (data) => {
    console.log(data.toString());

    if (!initiated) {
      console.log('Write anything to console...');
      initiated = true;
    }
  });
};

spawnChildProcess('--first --second');
