let { hash } = require('@chainsafe/ssz');
let hash_js = require('js-sha256');
const assert = require('assert')

let hash_chainsafe = hash;

function rng() {
    var temp = '0b';
    for (let i = 0; i < 256; i++) {
      temp += Math.round(Math.random());
    }

    const randomNum = BigInt(temp);
    return randomNum.toString(16).substr(2);
}

async function main() {
    let f = 0;
    for(let i = 0; i < 1000000; i++) {

        let r = rng();
        let h1 = '0x00' + Buffer.from(hash_chainsafe(Buffer.from(r, 'hex'))).slice(1).toString('hex');
        let h2 = '0x00' + hash_js(Buffer.from(r, 'hex')).substr(2);
        
        console.log(i, r, h1, h2);
        assert(h1 === h2);
        
        console.log();
        console.log();
    }

    console.log("found", f);
}

main()
