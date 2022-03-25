const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let result = []
  for (let i = 0; i < names.length; i++) {
      let someArr = names.slice(0, i + 1)
      let count = someArr.filter(el => el == names[i]).length - 1
      let possibleName = count? names[i] + `(${count})` :names[i]
      if (!result.includes(possibleName)) {
          result = [...result, possibleName]
      } else {
          result = [...result, possibleName + `(1)`]
      }
  }
  return result
}

module.exports = {
  renameFiles
};
