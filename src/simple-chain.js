const { AssertionError } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  'chain': [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain = [...this.chain, `( ${value} )`] 
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.chain = [] 
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let result = ''
    //this.chain = this.chain.replace(/^~~|~~$/, '')
    result = this.chain.map((el, i) => i > 0? `~~${el}`: `${el}`).join('')
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
