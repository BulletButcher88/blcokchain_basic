const Block = require('./blockchain/block');

const doBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(doBlock.toString())