const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = Math.log(15 / HALF_LIFE_PERIOD) / (0.693 / (5730 * sampleActivity));
  return typeof sampleActivity == "number" && result > 0 ? result : false;
};
