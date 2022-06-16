const bls = require('@jadepool/bls');
let {PrivateKey, initBLS} = require('@chainsafe/bls')
const assert = require('assert')

function genPubKeyByPrivKey () {
    let r = rng();

    console.log(r)

    const t = new bls.SecretKey();
    const buf = Buffer.from(r, 'hex');

    t.setLittleEndian(buf);

    const priv_jp = '0x' + t.serializeToHexStr();
    const pub_jp = '0x' + t.getPublicKey().serializeToHexStr();
    console.log(priv_jp);
    console.log(pub_jp);

    const priv_chainsafe = PrivateKey.fromHexString(priv_jp)
    const priv_chainsafe_hex = priv_chainsafe.toHexString()
    const pub_chainsafe = priv_chainsafe.toPublicKey().toHexString()

    console.log(priv_chainsafe_hex);
    console.log(pub_chainsafe);

    assert(priv_jp === priv_chainsafe_hex);
    assert(pub_jp === pub_chainsafe);

    console.log();
    console.log();
}

function rng() {
    var temp = '0b';
    for (let i = 0; i < 256; i++) {
      temp += Math.round(Math.random());
    }

    const randomNum = BigInt(temp);
    return randomNum.toString(16);
}

async function main () {
    await bls.init(bls.BLS12_381)
    await initBLS()

    for(let i = 0; i < 100; i++) {
        console.log(i);
        // await sleep();
        genPubKeyByPrivKey()
    }
}

main()
