const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!(date instanceof Date && !isNaN(date.valueOf())) && date != null) {
    throw new Error();
  }
  if (date != null) {
    let seasons = ["winter", "spring", "summer", "autumn"];
    let month = date.getMonth() + 1;
    if (month == 12 || month <= 2) {
      return seasons[0];
    } else if (month <= 5) {
      return seasons[1];
    } else if (month <= 8) {
      return seasons[2];
    } else {
      return seasons[3];
    }
  } else if (date == null) {
    return "Unable to determine the time of year!";
  }
};
