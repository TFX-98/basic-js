const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let counter = 0;
	matrix.forEach(arr => {
		arr.forEach(item => {
			item == '^^' ? counter++ : counter;
		})
	})
	return counter;
};
