import { env } from 'process';

export const parseEnv = () => {
  const keysArr = [];
  env.RSS_name1 = 'value1';
  env.RSS_name2 = 'value2';

  for (const obj in env) {
    if (obj.includes('RSS_')) {
      keysArr.push(`${obj}=${env[obj]}`);
    }
  }

  console.log(keysArr.join('; '));
};

parseEnv();
