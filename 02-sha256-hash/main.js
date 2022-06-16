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

function main() {
    for(let i = 0; i < 1000000; i++) {
        console.log(i);

        let r = rng();
        let h_chainsafe = Buffer.from(hash_chainsafe(r)).toString('hex');
        console.log(h_chainsafe);
        
        let h_js = hash_js(r);
        console.log(h_js);

        assert(h_chainsafe, h_js);

        console.log();
        console.log();
    }
}

main()
