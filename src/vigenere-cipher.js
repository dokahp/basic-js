const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.mode = direction == undefined ? true : false;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyPos = 0;
    for (let i = 0; i < message.length; i++) {
      this.alphabet.indexOf(message[i]) == -1
        ? (result += message[i])
        : (result +=
            this.alphabet[
              (this.alphabet.indexOf(message[i]) +
                this.alphabet.indexOf(key[keyPos++ % key.length])) %
                this.alphabet.length
            ]);
    }
    return this.mode ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyPos = 0;
    let decryptPos = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) == -1) {
        result += message[i];
        continue;
      }
      decryptPos =
        (this.alphabet.indexOf(message[i]) -
          this.alphabet.indexOf(key[keyPos++ % key.length])) %
        this.alphabet.length;
      result +=
        decryptPos < 0
          ? this.alphabet[this.alphabet.length + decryptPos]
          : this.alphabet[decryptPos];
    }
    return this.mode ? result : result.split("").reverse().join("");
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  VigenereCipheringMachine,
};
