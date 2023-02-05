const convertToCelsius = function (degreeFahrenheit) {
  return Math.round((((degreeFahrenheit - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (degreeCelsius) {
  return Math.round(((degreeCelsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
