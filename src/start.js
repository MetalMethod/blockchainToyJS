//This is a exemple of the Blockchain Toy usage

const Block = require('./block.js');
const Blockchain = require('./blockchain.js');


var data = "Some data in string form"


let block = new Block(1, data, 'hash');

//block.printInfo();

let blockchain = new Blockchain();

blockchain.addBlock(block);
blockchain.printInfo();
console.log(blockchain.isChainValid());

