// export const performCalculations = async () => {
//     // Write your code here
// };

import os from 'os';
import { Worker } from 'worker_threads';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log('I am index!');

const worker = new Worker(path.join(__dirname, 'worker.js'));
