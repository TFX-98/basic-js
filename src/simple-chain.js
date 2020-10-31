const CustomError = require("../extensions/custom-error");
const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    value == undefined && value != null
      ? this.arr.push("")
      : this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position - 1 < 0 ||
      position > this.arr.length
    ) {
      this.arr = new Array();
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    chain = "";
    this.arr.forEach((elem, index) => {
      chain += index == 0 ? `( ${elem} )` : `~~( ${elem} )`;
    });
    this.arr = new Array();
    return chain;
  },
};

module.exports = chainMaker;
