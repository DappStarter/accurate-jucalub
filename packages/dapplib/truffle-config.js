require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember exchange gloom arena bubble share'; 
let testAccounts = [
"0x1e00b059345a1723deda00cef01c63a4af255c3a26234d71e757d06c104fc721",
"0xd0c1d7d7f1628de8d785d21dcc68da93add760273d365bb640ad09185e12e969",
"0xdf4df2af56e2c29ae23476a185c291b8b2de5707c00e231519ad30c53eb1e74d",
"0xd05bcc6216be7b18565458d769c998d0faca4f2936cd36d7aad12fde5a0f8b0f",
"0x80ff379ff0f339d9b4ce0bbbf6b6db1fd88dcbb6cf0c66353cd9c21167e931ad",
"0x4892ec3c1a14e018beee53b194e71d7ecfb038837a7721ef2612e2ccad886eb4",
"0x66e4569decd74469a6335beaac3494de41ba202981cbc19e0b1f2092827fd6b4",
"0x2395fe56617986e3fe91c9ea8b041852ef490122078128e96f431a4cf6c93013",
"0x552a71a2a6281115e33d57f7a2f2f1698f5a005c55c20267810866b0b380fb0d",
"0x5510c38f2a0adefdc78ab6477d3bfdf6e80a2836aada84ea46d59b7d73214250"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
