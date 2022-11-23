//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
const args = process.argv.slice(2); // user inpute via command line eg: node timer1.js 3 5 9 10 15

//Taking the inputs, changing them to numbers and multiplying by 1000 to convert to milliseconds. const time will be an array
const timeArray = args.map(x => Number(x) * 1000);



for (const interval of timeArray) {
  // if interval is anything other than a positive number it will skip.
  if (Math.sign(interval) !== 1) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, interval);
}

