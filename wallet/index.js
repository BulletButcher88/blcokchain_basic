const ChainUntil = require('../chain-until')
const { INITIAL_BALANCE } = require('../config')


class Wallet {
  constructor() {
    this.balance = INITIAL_BALANCE;
    this.keyPair = ChainUntil.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');

  }

  toString() {
    return `Wallet - 
    publicKey : ${this.publicKey.toString()}
    balance   : ${this.balance}`
  }
}

module.exports = Wallet;