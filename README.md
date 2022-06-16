### 私钥公钥的生成

我们使用了两个库来生成私钥公钥

库A是[这个](https://www.npmjs.com/package/@jadepool/bls)

库B是[这个](https://github.com/alexxuyang/lodestar/blob/c156aa1b170bc9437e063350255da056b5abc887/packages/lodestar-cli/src/depositContract/depositData.ts#L5)

A库用来生成的withdraw key，B库生成的signing key

[程序](01-priv-key/main.js)验证了100万个私钥在A、B两个库里面生成的公钥，结果一致


### hash函数的使用

sha256 hash算法结果比对

在生成credential的时候，需要使用一个sha256算法（官方工具使用的是python的)

我们使用的是chainsafe/ssz库 A，[我们将A]([程序](02-sha256-hash/main.js))与一个每周下载量在80万次的一个sha256库，做了100万次hash生成的比对，结果一致


### bls公钥的长度

[以太坊定义的bls公钥长度](https://github.com/ethereum/consensus-specs/blob/7a5cdc2a9df9a19c3abe47d88a8b7587a9f109d3/specs/core/0_beacon-chain.md#custom-types)为48个字节/Byte

我们的程序[lib-kengen]，在hash前，使用的也是48个字节的压缩公钥，[参见这里](01-priv-key/100.out.txt#L4)


### 送进HASH函数的参数格式

将公钥数据放入hash函数时，不应该包含'0x'字符；我们的[程序](https://github.com/alexxuyang/bls-keys-verify/blob/c78c4e3f04876be29826769e5c958d1cced49588/03-compressed-pub-key/main.js#L22)是这样做的

ethereum在通过公钥生成地址过程中，也不包含'0x'字符；所以我认为我们这样做是对的

可以这样测试，为什么这个逻辑是对的

到这个网站通过公钥生成地址A：http://emn178.github.io/online-tools/keccak_256.html

然后再通过metamask倒入私钥生成地址B，可以看到A与B相同

所以，可以看到在做hash时不需要字符'0x'

// Private key = , 0xdf9dd56d0e9c5a8b69025e7cbe8bd017002f15900c085aebf2813a82716ba52c
// Publid key = , 0x07c2e848078e51af308edd0228ed13f7c07f5cd1ea0b661f635eacf0acd722f093b7f36978d62148054333bc56d4b89087581b8cdcba473c8885ae09f079482c
// Address = , 0x38ee0653a0bf931b6b9c4d742e4a278237198c2b
