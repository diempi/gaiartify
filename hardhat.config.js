require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
        mantle: {
          url: "https://rpc.mantle.xyz", //mainnet
          accounts: [process.env.PRIV_KEY],
          gasPrice: 20000000, 
      },
      mantleSepolia: {
          url: "https://mantle-sepolia.g.alchemy.com/v2/ZNChb_7jU_GNTsoBrp5Vopt9dcGfDIVm", // Sepolia Testnet
          accounts: [process.env.PRIV_KEY],
          gasPrice: 20000000, 
      },
      "mantle-testnet": {
        url: "https://rpc.testnet.mantle.xyz/",
        accounts: [process.env.PRIV_KEY], // Uses the private key from the .env file
        gasPrice: 20000000, 
      }
  }
};
