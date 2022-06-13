import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';

export const transform = async () => {
  const transformat = new Transform({
    transform(chunk, enc, cb) {
      const chunkToStr = chunk.toString().trim();
      const reverseChunk = chunkToStr.split('').reverse().join('');

      cb(null, `${reverseChunk}\n`);
    },
  });
  // prettier-ignore
  pipeline(
    stdin,
    transformat,
    stdout,
    (err) => {
      console.log(`Error ${err}`);
    },
  );
};

transform();
