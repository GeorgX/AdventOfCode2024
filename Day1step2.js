const fs = require("fs");

const data = fs
  .readFileSync(__dirname + "/input.txt", "utf8")
  .trim()
  .split("\n");

const wordDigits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

let sum = 0;

data.forEach((element) => {
  console.log(element);
  for (let prop in wordDigits) {
    if (prop === "two") {
      element = element.replaceAll(prop, "t2o");
    }
    if (prop === "one") {
      element = element.replaceAll(prop, "o1e");
    }
    if (prop === "five") {
      element = element.replaceAll(prop, "5e");
    }
    if (prop === "nine") {
      element = element.replaceAll(prop, "9e");
    } else {
      element = element.replaceAll(prop, wordDigits[prop]);
    }
  }
  console.log(element);

  const numbers = element.match(/\d+/g);
  console.log(numbers);

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
