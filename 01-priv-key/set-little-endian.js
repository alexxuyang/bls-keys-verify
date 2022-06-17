const bls = require('@jadepool/bls');
let {PrivateKey, initBLS} = require('@chainsafe/bls')
const assert = require('assert')

function genPubKeyByPrivKey () {
    // let r = rng();

    // 0x3a = 0x00111010
    let r = 'ffa4584bfc786ae7baf9fef0be777dea5ef32bb2bccb78876dc42689988b66fe';

    console.log(r)

    const t = new bls.SecretKey();
    const buf = Buffer.from(r, 'hex');

    t.setLittleEndian(buf);

    const priv_jp = t.serializeToHexStr();
    console.log(priv_jp);
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

    for(let i = 0; i < 1; i++) {
        console.log(i);
        // await sleep();
        genPubKeyByPrivKey()
    }
}

main()
