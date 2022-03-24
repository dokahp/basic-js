const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = []
  for (let i = 0; i< str.length; i++) {
      if (Array.isArray(result[result.length - 1]) && str[i] == result[result.length - 1][0]) {
          result[result.length - 1] = [...result[result.length - 1], str[i]]
      } else {
          result.push([str[i]])
      }
  }
  result = result.map(el => el.length >= 2? `${el.length}${el[0]}`: `${el}`)
  return result.join('')
}

module.exports = {
  encodeLine
};
