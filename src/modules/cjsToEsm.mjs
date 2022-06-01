import path, { dirname, sep } from 'path';
import { release, version } from 'os';
import http, { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import sayHi from './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = path.join(__dirname, 'files,', 'a.json');
} else {
  unknownObject = path.join(__dirname, 'files', 'b.json');
}

console.log(`\nRelease ${release()}\n`);
console.log(`Version ${version()}\n`);
console.log(`Path segment separator is "${sep}"\n`);

console.log(`Path to current file is ${__filename}\n`);
console.log(`Path to current directory is ${__dirname}\n`);
console.log(`UnknownObject - ${unknownObject}\n`);

const createMyServer = http.createServer((req, res) => {
  console.log('Server request');

  res.write('Hello World');
  res.end();
});

createMyServer.listen(3000, 'localhost', (error) => {
  // eslint-disable-next-line no-unused-expressions
  error ? console.log(error) : console.log('listening port 3000');
  process.exit();
});

export default {
  unknownObject,
  createMyServer,
};
