import fs from 'fs';
import { getPathFromFiles } from './getPathFromFiles.js';

export const remove = async () => {
  const error = new TypeError('FS operation failed');
  const delFile = getPathFromFiles(import.meta.url, 'fileToRemove.txt');

  fs.unlink(delFile, (err) => {
    if (err) throw error;
    console.log('file was removed');
  });
};

remove();
