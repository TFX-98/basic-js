const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, result = []) {
    result.push(count);
    arr.forEach((item) =>
      Array.isArray(item) ? this.calculateDepth(item, count + 1, result) : null
    );

    let max = 0;

    result.forEach((item,index)=>{
      max = max < result[index] ? result[index] : max;
    })

    return max;
  }
};
