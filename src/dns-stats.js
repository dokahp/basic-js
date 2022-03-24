const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains, result = {}) {
  if (!domains.length) {return {}}
  domains = domains.map(el => el.split('.').reverse())
  domains.map(el => {
      for (let i = 0; i < el.length; i++) {
          let elem = `.${el.slice(0, i + 1).join('.')}`
          if (result.hasOwnProperty(elem)) {
              result[elem] = result[elem] + 1
          } else {
              result[elem] = 1
          }
      }
  })
  return result
}

module.exports = {
  getDNSStats
};
