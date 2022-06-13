import fs from 'fs';
import { getPathFromFiles } from './getPathFromFiles.js';

export const create = async () => {
  const error = new TypeError('FS operation failed');
  const pathToFilesFolder = getPathFromFiles(import.meta.url, 'fresh.txt');

  fs.stat(pathToFilesFolder, async (err) => {
    if (!err) throw error;
    else if (err.code === 'ENOENT') {
      fs.writeFile(pathToFilesFolder, 'I am fresh and young', () => {
        console.log('file created');
      });
    }
  });
};

create();
