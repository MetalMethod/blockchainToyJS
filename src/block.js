/** using a Block:
*   index = a unique id (int) for a block instance
*   hash = the SHA256 hash for a block instance
*   previousHash = the SHA hash for the previous block instance in the chain
*   data = the block payload data
*   nounce = the string added in the beguinning of the hash for the proof-of-work security 
*/

//importing a crypto SHA-2 library
//https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.js
const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, data, previousHash) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = new Date().toUTCString();
        this.data = data;
        this.hash = this.calculateHash();
        this.nounce = 0;
    }

    //generates hash from 'this' block instance
    calculateHash() {
        return SHA256(
                    this.index 
                    + this.previousHash 
                    + this.timestamp 
                    + JSON.stringify(this.data)
                    + this.nounce
                    ).toString();
    }

    printInfo(){
        var spacer1 = "\n###########################################\n";
        var spacer2 = "\n------------------------------------------- ";
        console.log( spacer1 + "block index: " + this.index
                    + "\n" + "Added on: " + this.timestamp + spacer2 
                    + "\n" + "hash: " + this.hash + spacer1);
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nounce++;
            this.hash = this.calculateHash();
        }
        console.log("New block succesfully mined.\nhash: " + this.hash + "\n");
    }
}

module.exports = Block;