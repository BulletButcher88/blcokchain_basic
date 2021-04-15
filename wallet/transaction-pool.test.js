const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./index');

describe('TransactionPool', () => {
  let tp, transaction, wallet;

  beforeEach(() => {
    tp = new TransactionPool();
    wallet = new Wallet();
    transaction = wallet.createTransaction('r4n-4ddr355', 30, tp)
  });

  it('adds a transaction to the pool', () => {
    expect(tp.transactions.find(t => t.id === transaction.id)).toEqual(transaction);
  });

  it('updates a transaction tin the pool', () => {
    let oldTransaction = JSON.stringify(transaction);
    const newTransaction = transaction.update(wallet, 'foo-4dd355', 40);
    tp.updateOrAddTransaction(newTransaction)

    expect(JSON.stringify(tp.transactions.find(t => t.id === newTransaction.id))).not.toEqual(oldTransaction)
  });

  describe('mixing valid and corrupt transaction', () => {
    let validTransactions;

    beforeEach(() => {
      validTransactions = [...tp.transactions];
      for (let i = 0; i < 6; i++) {
        wallet = new Wallet();
        transaction = wallet.createTransaction('r4n-4ddr355', 30, tp);

        if (i % 2 == 0) {
          transaction.input.amount = 9999;
        } else {
          validTransactions.push(transaction);
        }
      }
    });

    it('shows a difference between valid and corrupt transaction', () => {
      expect(JSON.stringify(tp.transactions)).not.toEqual(JSON.stringify(validTransactions))
    });

    it('grabs valid transactions', () => {
      expect(tp.validTransactions()).toEqual(validTransactions)
    });
  });
});
