const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");

const ratioAndFactorial = function (num1, num2, num3) {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num3),
  };
};
console.log(ratioAndFactorial(4, 4, 4));
module.exports = ratioAndFactorial;
