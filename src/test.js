//This is a simple test of the Blockchain Toy usage

const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

let blockchain = new Blockchain();

//add a block 
var data1 = "Some data in string form"
blockchain.addBlock(data1);

//add another block 
var data2 = "Some more data in string form"
blockchain.addBlock(data2);

//show all the blocks
blockchain.printInfo();

//check if the whole chain is valid
console.log("Is this blockchain valid?  " + blockchain.isChainValid());

