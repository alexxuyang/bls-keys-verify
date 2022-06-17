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
    return randomNum.toString(16);
}

async function main() {
    let f = 0;
    for(let i = 0; i < 1000000; i++) {

        let r = rng();
        let h_chainsafe = Buffer.from(hash_chainsafe(Buffer.from(r, 'hex'))).toString('hex');
        let h_js = hash_js(Buffer.from(r));

        assert(h_chainsafe === h_js);
        console.log(i, r, h_chainsafe, h_js);
        
        console.log();
        console.log();
    }

    console.log("found", f);
}

main()
