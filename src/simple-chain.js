const { AssertionError } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  'chain': '',
  getLength() {
    // return this.chain.split("~~").length
  },
  addLink(value) {
    // this.chain += `( ${value} )~~`
    // return this
  },
  removeLink(position) {
    // if (position < 0 || position > this.chain.split("~~").length) {throw Error('You can\'t remove incorrect link!') }
    // this.chain = this.chain.split('~~')
    // this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)].join('~~')
    // return this
  },
  reverseChain() {
    // this.chain = this.chain.split('~~').reverse().join('~~')
    // return this
  },
  finishChain() {
    // this.chain = this.chain.replace(/^~~|~~$/, '')
    // return this.chain
  }
};

module.exports = {
  chainMaker
};
