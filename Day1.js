const fs = require("fs");

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf8")
  .trim()
  .split("\n");

let sum = 0;

data.forEach((element) => {
  console.log(element);
  const numbers = element.match(/\d+/g);

  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  const firstDigit = firstNumber[0];
  const lastDigit = lastNumber[lastNumber.length - 1];

  console.log(firstDigit + " " + lastDigit);
  const current = parseInt(firstDigit + lastDigit);
  sum = sum + current;

  console.log("current Digit sum:" + current + "\n");

  console.log("Sum:" + sum + "\n");
});
