class VigenereCipheringMachine {
  constructor(dir = true) {
    this.dir = dir;
    this.alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    this.isError(message, key);
    let result = this.solution(message.toUpperCase(), key.toUpperCase());
    return result;
  }

  decrypt(message, key) {
    this.isError(message, key);
    let result = this.solution(message.toUpperCase(), key.toUpperCase(), true);
    return result;
  }

  isError(message, key) {
    if (!message || !key) {
      throw Error;
    }
  }

  solution(message, key, decryptVar = false) {
    let { alph, dir } = this;
    let alphLength = alph.length;
    let result = [];

    for (let i = 0; i < message.length; i++) {
      let msg = message.charAt(i);
      let index = alph.indexOf(key.charAt(i % key.length));
      let indexVar = decryptVar
        ? alph.indexOf(msg) - index + alphLength
        : alph.indexOf(msg) + index;

      if (alph.includes(msg)) {
        result.push(alph.charAt(indexVar % alphLength));
      } else {
        result.push(msg);
        message = message.slice(0, i) + message.slice(i + 1);
        i--;
      }
    }

    let final = dir ? result.join("") : result.reverse().join("");

    return final;
  }
}

module.exports = VigenereCipheringMachine;
