require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember hour gesture loan flip stable'; 
let testAccounts = [
"0x95a545a75d25fce6b6d4bb4d035bda10c8a2258ced857d00e283d6ad5fd8171b",
"0x4846b843bcf7cfea1bdd33eb5ffa9ca2a2f6e6815d6157b63b8b956d1860147a",
"0x0f99a4d6a32446b5113550c984d4bf9ba87263c3713f65f344990be96403d448",
"0x4621a52a5f70267e596ac18a8d36a0add1f3ad57ff904a20d989105b7f1933e4",
"0x770d38285b5782a7aae1aa250a67c50bb7b9fa89aa05053e7558a7553414faf9",
"0x747785e5200137cf42c822d8852e5ec132bb8b415f24d3ff5884727aae350687",
"0x7116b21d779ffcfd5c07804e34d25df9381f9f31c11c855246432da81b0bbd40",
"0xceff13817b6fd5e149f057e6cdaebb47d3e366b3041d834011dbe14bd2cc1e75",
"0x37d366a147e7c92f7b3ca7d63f9dd4699043769ce7df5af5248969048ce1edd6",
"0x538ec57be893682e15f534c5c8267c65bc4a013f2cef279cc8dc78d7a6e1e1ad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
