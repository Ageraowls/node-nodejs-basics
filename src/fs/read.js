import fs from 'fs';
import { getPathFromFiles } from './getPathFromFiles.js';

export const read = async () => {
  const error = new TypeError('FS operation failed');
  fs.readFile(getPathFromFiles(import.meta.url, 'fileToRead.txt'), (err, data) => {
    if (err) throw error;
    console.log(data.toString());
  });
};

read();
