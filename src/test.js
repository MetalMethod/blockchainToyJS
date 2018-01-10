//This is a simple test of the Blockchain Toy usage

const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

let blockchain = new Blockchain();

//add a block 
var data1 = "Some data in string form"
let block = new Block(1, data1, 'hash1');
blockchain.addBlock(block);

//add another block 
var data2 = "Some more data in string form"
let block2 = new Block(2, data2, 'hash2');
blockchain.addBlock(block2);

//show all the blocks
blockchain.printInfo();

//check if the whole chain is valid
console.log(blockchain.isChainValid());

