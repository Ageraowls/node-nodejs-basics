import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
  readableStream.pipe(stdout);
};

read();
