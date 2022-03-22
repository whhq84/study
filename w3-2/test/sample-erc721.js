const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");

//     // 执行部署，返回请求
//     const greeter = await Greeter.deploy("Hello, world!");
//     // 部署中，等待链上区块确认
//     await greeter.deployed();


//     expect(await greeter.greet()).to.equal("Hello, world!");


//     // 执行合约，返回请求
//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
//     // wait until the transaction is mined
//     await setGreetingTx.wait();


//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


async function getBalance(token, privateKey) {
  let wallet = new ethers.Wallet(privateKey);
  let balance = await token.balanceOf(wallet.address);
  // console.log(ethers.utils.formatEther(balance.toString()));
  return { wallet: wallet, balance: ethers.utils.formatEther(balance.toString()) }
}


describe('NFToken合约', async function () {
  let nft;
  let deployer;
  let user1 = { addr: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', key: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d' };

  it('测试用例1', async function () {

    deployer = await ethers.getSigner();


    // 部署合约
    const NFToken = await ethers.getContractFactory("NFToken");
    nft = await NFToken.deploy();
    await nft.deployed();
    console.log(`部署人：${deployer.address},NFT地址:${nft.address}`);

    // 铸造
    console.log('铸造')
    let tokenId = 99;
    await nft.mint(deployer.address, tokenId);

    // 查找
    let addr = await nft.ownerOf(tokenId);
    console.log(`tokenId:${tokenId}, owner:${addr}`)

    // 转移
    console.log('转移')
    await nft.transferFrom(deployer.address, user1.addr, tokenId);
    console.log('转移后所有者: ', await nft.ownerOf(tokenId))

  })

});
