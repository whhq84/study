const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


// describe("Bank", function () {
//   it("Bank return the instance", async function () {
//     const Bank = await ethers.getContractFactory("Bank");
//     const bank = await Bank.deploy();
//     await bank.deployed();

//     // expect(await greeter.greet()).to.equal("Hello, world!");

//     // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // // wait until the transaction is mined
//     // await setGreetingTx.wait();

//     // expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


// private key
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

(async () => {

  const artifactsPath = `./artifacts/contracts/Bank.sol/Bank.json`
  const metadata = JSON.parse(fs.readFileSync(artifactsPath).toString().trim());

  const abi = metadata.abi;
  const address = '0x8B665D7c878B2282a9B261E11d5AC0eF28e0ce1a';

  const signers = await ethers.getSigners();

  let contract = new ethers.Contract(address, abi, signers[0])
  let amount = ethers.utils.parseEther('0.16', {
    // nonce: nonce++,
    // gasLimit: 2000000,
    // gasPrice: 2000000
  })
  // console.log(amount)
  // return;
  let tx = await contract.withdraw(amount);

  console.log('withdraw', tx);

})();

// console.log('hello', mnemonic);
