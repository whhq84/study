// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

// const NFToken = require(`../deployments/${network.name}/NFToken.json`)
const NFToken = require(`../artifacts/contracts/NFToken.sol/NFToken.json`)
// console.log(NFToken);

async function main() {

  let [wallet1, wallet2] = await ethers.getSigners();
  console.log(wallet1.address, wallet2.address)

  // let nft = await ethers.getContractAt('NFToken', NFToken.address, wallet1)
  let nft = await ethers.getContractAt('NFToken', '0x5FbDB2315678afecb367f032d93F642f64180aa3', wallet1)

  let filter = nft.filters.Transfer();
  filter.fromBlock = 1
  filter.toBlock = 100

  // let events = await myerc20.queryFilter(filter);
  let events = await ethers.provider.getLogs(filter)
  for (let i = 0; i < events.length; i++) {
    console.log(events[i]);
  }

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
