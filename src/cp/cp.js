import { spawn } from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'script.js');
  const child = spawn('node', [filePath, args]);
  child.stdout.pipe(stdout);
  child.stdin.write('example text');
  child.stdin.end();
};

spawnChildProcess(process.argv);
