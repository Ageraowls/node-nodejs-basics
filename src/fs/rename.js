import fs from 'fs';
import { getPathFromFiles } from './getPathFromFiles.js';

export const rename = async () => {
  const error = new TypeError('FS operation failed');
  const mainFileName = getPathFromFiles(import.meta.url, 'wrongFilename.txt');

  fs.rename(mainFileName, getPathFromFiles(import.meta.url, 'properFilename.md'), (err) => {
    if (err) throw error;
    console.log('file was renamed');
  });
};

rename();
