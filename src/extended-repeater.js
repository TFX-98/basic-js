const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = str != null ? str.toString() : str === null ? "null" : "",
    repeatTimes =
      typeof options.repeatTimes == "number" ? options.repeatTimes : 1,
    separator = options.separator ? options.separator : "+",
    addition =
      options.addition != null
        ? options.addition.toString()
        : options.addition === null
        ? "null"
        : "",
    additionRepeatTimes =
      typeof options.additionRepeatTimes == "number"
        ? options.additionRepeatTimes
        : 1,
    additionSeparator = options.additionSeparator,
    result = "";
  for (let i = 0; i < repeatTimes; i++) {
    result += `${string}`;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += `${addition}${
        j == additionRepeatTimes - 1 ? "" : additionSeparator
      }`;
    }
    result += `${i == repeatTimes - 1 ? "" : separator}`;
  }
  return result;
};
  
