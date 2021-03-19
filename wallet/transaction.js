const ChainUntil = require('../chain-until');


class Transaction {
  constructor() {
    this.id = ChainUntil.id();
    this.input = null;
    this.output = [];
  }

  static newTransaction(senderWallet, recipient, amount) {
    const transaction = new this();

    if (amount > senderWallet.balance) {
      console.log(`Amount : ${amount} exceeds the current balance`)
    }
  }

}


module.export = Transaction;