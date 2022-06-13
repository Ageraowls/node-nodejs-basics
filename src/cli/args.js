export const parseArgs = () => {
  const userInputArgs = process.argv.slice(2);

  const cliArguments = userInputArgs.reduce((acc, arg, index, arr) => {
    const valueCandidate = arr[index + 1];
    if (valueCandidate && arg.startsWith('--')) {
      const transformedArgs = arg.replace('--', '');
      const cliArgumentsTransformed = `${transformedArgs} is ${valueCandidate}`;
      acc.push(cliArgumentsTransformed);
    }

    return acc;
  }, []);

  console.log(cliArguments.join(', '));
};

parseArgs();

/* const args = process.argv.slice(2);
  const firstValue = [];
  const secondValue = [];
  args.forEach((item) => {
    const str = item.replace(/[-]/g, '');
    if (firstValue.length < 2) {
      firstValue.push(str);
    } else {
      secondValue.push(str);
    }
  });

  console.log(`${firstValue[0]} is ${firstValue[1]}, ${secondValue[0]} is ${secondValue[1]}`); */
