const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (!options.hasOwnProperty('separator')) {options.separator = '+'}
  if (!options.hasOwnProperty('addition')) {options.addition = ''}
  if (!options.hasOwnProperty('additionRepeatTimes')) {options.additionRepeatTimes = 1}
  if (!options.hasOwnProperty('repeatTimes')) {options.repeatTimes = 1}    
  if (!options.hasOwnProperty('additionSeparator')) {options.additionSeparator = '|'}    
  let addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
  if (options.additionSeparator.length) {
      addition = addition.slice(0, -options.additionSeparator.length)
  }
  return ((str + addition) + options.separator).repeat(options.repeatTimes).slice(0, -options.separator.length)
}

module.exports = {
  repeater
};
