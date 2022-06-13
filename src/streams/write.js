import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const writeableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), { flags: 'a' });

  stdout.write('send some text:\n');
  stdin.pipe(writeableStream);

  process.on('exit', () => {
    stdout.write('\nbye-bye\n');
  });
  process.on('SIGINT', () => process.exit());
};

write();
