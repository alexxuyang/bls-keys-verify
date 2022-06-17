let { hash } = require('@chainsafe/ssz');
let hash_js = require('js-sha256');
const assert = require('assert')

let hash_chainsafe = hash;

let pubkeys = [
    'aa692e4689578206e694381d3102403ef06ddc3bdb10dc663fae43a7deb7f2e438faf9ed22b07b3016acfd60dcf47910',
    'a7c9fc42e063eed7572a6815dddfc3bd619a52e48de319c333baf21e21276355ac558d16cdf9a8adc8c3ba6b968b64c1',
    '981870db45474301c8a79ef926f3e4f55f80021ea466e571c22330d45582399a886fba2b806bbff13746511a727cffb8'
];

let credential = [
    '0x00307c240f56efaeed5d81832fe8e7772451a1f1e2fdf8ecd607b0ea3d4d7a71',
    '0x00c0f53b1596745be47ac375b9365e3420d68876febd48d79edf25b928d78e28',
    '0x00156c54bbea28c0f96f6488540500bf5205b78cbcdf1c98e92555e0e3aa0a95'
];

for (let i = 0; i < pubkeys.length; i++) {
    let h1 = '0x00' + Buffer.from(hash_chainsafe(Buffer.from(pubkeys[i], 'hex'))).slice(1).toString('hex');
    console.log(h1);

    let h2 = '0x00' + hash_js(Buffer.from(pubkeys[i], 'hex')).substr(2);
    console.log(h2);
    console.log(credential[i]);

    assert(h1 === h2);
    assert(h1 === credential[i]);

    console.log();
}
