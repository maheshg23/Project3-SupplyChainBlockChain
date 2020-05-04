const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "PROJECT KEY";
const infuraKey = "264c6913a5524f61ab70544cac16a198";

// const mnemonic = "SEED WORDS";
const mnemonic = "car issue fatal castle kid depth dutch license prison forget summer snake";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    //Public Network
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};