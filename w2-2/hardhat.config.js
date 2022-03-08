require("@nomiclabs/hardhat-waffle");

// private key
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    bscTest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [mnemonic],
      // gas: 3100000,
      // gasPrice: 8000000000,
    }
  }
};
