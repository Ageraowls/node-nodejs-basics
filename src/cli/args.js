export const parseArgs = () => {
  const args = process.argv.slice(2);
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

  console.log(`${firstValue[0]} is ${firstValue[1]}, ${secondValue[0]} is ${secondValue[1]}`);
};

parseArgs();
