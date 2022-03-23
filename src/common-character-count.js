const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
let characterCount = (str) => {
  let obj = {}
  for (let i = 0; i < str.length; i++) {obj[str[i]] = obj[str[i]] == undefined? 1: obj[str[i]] + 1}
  return obj
}
function getCommonCharacterCount(s1, s2) {
  let count = 0
  let s1Obj = characterCount(s1)
  let s2Obj = characterCount(s2)
  for (let [key, value] of Object.entries(s1Obj)) {
    if (s2Obj.hasOwnProperty(key)) {
      count += Math.min(value, s2Obj[key])
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
