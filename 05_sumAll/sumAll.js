const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  const greater = num1 < num2 ? num2 : num1;
  let sum = num1 + num2;
  for (let i = 1; i <= Math.abs(num1 - num2) - 1; i++) {
    sum += greater - i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
