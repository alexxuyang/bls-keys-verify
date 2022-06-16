const ethWallet = require('ethereumjs-wallet').default;

for(let index=0; index < 2; index++) {
    let addressData = ethWallet.generate();
    console.log(`Private key = , ${addressData.getPrivateKeyString()}`);
    console.log(`Publid key = , ${addressData.getPublicKeyString()}`);
    console.log(`Address = , ${addressData.getAddressString()}`);
}

// use http://emn178.github.io/online-tools/keccak_256.html to generate a ethereum address
// show that ethereum don't use compressed form of public key to generate address

// Private key = , 0xdf9dd56d0e9c5a8b69025e7cbe8bd017002f15900c085aebf2813a82716ba52c
// Publid key = , 0x07c2e848078e51af308edd0228ed13f7c07f5cd1ea0b661f635eacf0acd722f093b7f36978d62148054333bc56d4b89087581b8cdcba473c8885ae09f079482c
// Address = , 0x38ee0653a0bf931b6b9c4d742e4a278237198c2b
// Private key = , 0x9bad15ed2f0e105d6d3d8b423c065221163d7b5bdf9b573ddf3d96959ec24539
// Publid key = , 0xe7279547aaf967b8107d6dda67b6d98ef624c67ea35ffb7ce8a58a71a9ae2752ccff0498e17b812407739721ac9fcda467dd8cbb7864efc3772115fa31926e91
// Address = , 0x05a756e6ca72842d6380c7040c3c5184f6aa1181