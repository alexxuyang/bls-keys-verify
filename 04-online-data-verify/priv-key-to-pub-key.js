// 0x70f623e0eb32d331eb992587ed5afefc0fe7ca9df79e3c35ff72e3bfbe57b618
let {PrivateKey, initBLS} = require('@chainsafe/bls')
let { hash } = require('@chainsafe/ssz');
let hash_js = require('js-sha256');
const assert = require('assert')

let hash_chainsafe = hash;

async function main () {
    await initBLS()

    const priv_chainsafe = PrivateKey.fromHexString('0x70f623e0eb32d331eb992587ed5afefc0fe7ca9df79e3c35ff72e3bfbe57b618')
    const priv_chainsafe_hex = priv_chainsafe.toHexString()
    const pub_chainsafe = priv_chainsafe.toPublicKey().toHexString()

    let h1 = '0x00' + (hash_chainsafe(priv_chainsafe.toPublicKey().toBytesCompressed())).slice(1).toString('hex');
    console.log(h1);

    let h2 = '0x00' + hash_js(pub_chainsafe).substr(2);
    console.log(h2);

    assert(h1 === h2);
    assert(h1 = '00b884f65e45d2ee1afc1d6881a043edd6361d974a78c4afbf74880cbd9d8a44')
}

main()
