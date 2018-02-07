//This is a exemple of the Blockchain Toy usage

const Block = require('./block.js');
const Blockchain = require('./blockchain.js');


var data = "Some data in string form"


let blockchain = new Blockchain();

for(let i = 0; i < 10 ; i++){
    blockchain.addBlock(data);
}
    blockchain.printInfo();



