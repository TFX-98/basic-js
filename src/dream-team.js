const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secret = "";
  if (Array.isArray(members)) {
    members.forEach((name) => {
      if (typeof name == "string") {
        secret += name.replace(/\s/g, '')[0];
      }
	});
    return secret.toUpperCase().split("").sort().join("");
  } else {
	  return false;
  }
};
