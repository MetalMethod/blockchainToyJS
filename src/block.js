/** using a Block:
*   index = a unique id (int) for a block instance
*   hash = the SHA256 hash for a block instance
*   previousHash = the SHA hash for the previous block instance in the chain
*   data = the block payload data
*/

//importing a crypto SHA-2 library
//https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.js
const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = new Date().toUTCString();
        this.data = data;
        this.hash = this.calculateHash();
    }

    //generates hash from 'this' block instance
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

    printInfo(){
        var spacer1 = "\n####################################################################### \n";
        var spacer2 = "\n----------------------------------------------------------------------- ";
        console.log( spacer1 + "block index: " + this.index
                    + "\n" + "Added on: " + this.timestamp + spacer2 
                    + "\n" + "hash: " + this.hash + spacer1);
    }
}

module.exports = Block;