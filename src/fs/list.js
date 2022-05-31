import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
  const error = new TypeError('FS operation failed');
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.readdir(path.join(__dirname, 'files'), (err, data) => {
    if (err) throw error;
    const nameFilesArr = [];
    data.forEach((item) => {
      nameFilesArr.push(item.split('.').shift());
    });
    console.log(nameFilesArr);
  });
};

list();
