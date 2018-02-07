/** using a Blockchain:
*   getLatestBlock() - returns the previous added block object
*   addBlock() - add a new block to the chain
*   printInfo() - show all blocks info
*   this.difficulty - number of 'nounces' added to the hash to increase difficulty of proof-of-work
*/

const Block = require('./block.js');

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3; 
    }

    //generate the first block (Genesis) of the chain
    createGenesisBlock(){
        return new Block(0, "Genesis block", "0");
    }

    //returns the latest added block
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    //add a new block to the chain
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        newBlock.index = this.getLatestBlock().index++;
        this.chain.push(newBlock);
    }

    //shows the blockchain elements
    printInfo(){
        this.chain.forEach(element => {
            element.printInfo();
        });
    }

    //check if the whole chain is valid
    isChainValid(){
        for (let i = 1; i < this.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i -1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;

