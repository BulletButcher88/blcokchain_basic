const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./index');

describe('TransactionPool', () => {
  let tp, transaction, wallet;

  beforeEach(() => {
    tp = new TransactionPool();
    wallet = new Wallet();
    transaction = Transaction.newTransaction(wallet, 'r4n-4ddr355', 30)
    tp.updateOrAddTransaction(transaction);
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

});
