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
        this.difficulty = 4; 
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
    addBlock(data){
        let newBlock = new Block(this.getLatestBlock().index +1 , data, this.getLatestBlock().hash);
        this.mineBlock(this.difficulty, newBlock);        
        this.chain.push(newBlock);                 
    }

    //shows the blockchain elements
    printInfo(){
            console.log("Blockchain length: " + this.chain.length + "\n");
            console.log(this.chain);
    }

    //check if the whole chain is valid
    isChainValid(){
        let currentBlock;
        let previousBlock;

        for (let i = 1; i <= this.length; i++){
            currentBlock = this.chain[i];
            previousBlock = this.chain[i -1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
            
            if(currentBlock.index === previousBlock.index){
                return false;
            }
        }
        return true;
    }

    //mine a new block
    mineBlock(difficulty, block){
        while(block.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            block.nounce++;
            block.hash = block.calculateHash();
        }
        if(block.hash !== undefined){
            console.log("New block succesfully mined.\nhash: " + block.hash + "\n");
        }
    }
}

module.exports = Blockchain;

