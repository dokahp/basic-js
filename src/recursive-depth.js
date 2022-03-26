const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {

  calculateDepth(arr) {
    arr = arr.filter(el => Array.isArray(el))
    if (Array.isArray(arr)) {
      return arr.reduce((array, el) => Math.max(array, this.calculateDepth(el)), 0) + 1
    }
  }
}
const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
