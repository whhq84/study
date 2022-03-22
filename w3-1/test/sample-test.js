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



describe("Erc20合约测试", function () {
  // 定义
  let token;
  let deployer;
  let user1 = { addr: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', key: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d' };
  let user2 = { addr: '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc', key: '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a' };

  // 部署人信息
  it("展示部署人信息", async function () {
    deployer = await ethers.getSigner();

    let balance = await deployer.getBalance();
    console.log(`部署人: ${deployer.address}, 以太坊余额:${ethers.utils.formatEther(balance)}`)
  });

  // erc20部署
  it("部署ERC20合约", async function () {
    let name = 'TokenA';
    let symbol = 'A';
    let decimals = 18;

    const TokenA = await ethers.getContractFactory("TokenA");
    token = await TokenA.deploy('TokenA', 'A', 18, 0);
    let ret = await token.deployed();
    // console.log('ret:', ret);

    let total = await token.totalSupply();
    console.log(`合约地址 :${token.address}, 初始供应量:${total},${symbol},${decimals},${name}`)
  });

  // 查看钱包
  it("转帐前", async function () {
    // 管理员
    let balance = await token.balanceOf(deployer.address);
    console.log(`部署人:${deployer.address},代币余额:${ethers.utils.formatEther(balance)} A`);

    // 用户1
    let user;
    user = await getBalance(token, user1.key);
    console.log(`帐号1:${user.wallet.address}, 代币余额:${user.balance} A`);

    // 用户2
    user = await getBalance(token, user2.key);
    console.log(`帐号2:${user.wallet.address},代币余额:${user.balance} A`);

  });

  // 增发
  it("代币增发", async function () {
    let tx = await token.mint(ethers.utils.parseEther('90000'));

    let total = await token.totalSupply();
    console.log(`已增发代理:${total}`);
  });

  // 转帐
  it("管理员,代币转帐测试", async function () {
    // 转帐
    console.log('向帐号1转帐:600 向帐号2转帐:120');
    await token.transfer(user1.addr, ethers.utils.parseEther('600'));
    await token.transfer(user2.addr, ethers.utils.parseEther('120'));

  });

  // 查看钱包
  it("转帐后", async function () {
    // 管理员
    let balance = await token.balanceOf(deployer.address);
    console.log(`部署人:${deployer.address},代币余额:${ethers.utils.formatEther(balance)} A`);

    // 用户1
    let user;
    user = await getBalance(token, user1.key);
    console.log(`帐号1:${user.wallet.address}, 代币余额:${user.balance} A`);

    // 用户2
    user = await getBalance(token, user2.key);
    console.log(`帐号2:${user.wallet.address},代币余额:${user.balance} A`);

  });

  it("普通帐号", async function () {
    console.log('切换钱包');
    let usr1_wallet = new ethers.Wallet(user1.key, ethers.provider);
    let token1 = await token.connect(usr1_wallet);
    await token1.transfer(user2.addr, ethers.utils.parseEther('3'));
    console.log('帐号1转帐到帐号2完成');


    let balance = await token.balanceOf(deployer.address);
    console.log(`部署人:${deployer.address},代币余额:${ethers.utils.formatEther(balance)} A`);

    // 用户1
    let user;
    user = await getBalance(token, user1.key);
    console.log(`帐号1:${user.wallet.address}, 代币余额:${user.balance} A`);

    // 用户2
    user = await getBalance(token, user2.key);
    console.log(`帐号2:${user.wallet.address},代币余额:${user.balance} A`);
  });

});


return ;
describe('Vault 合约', async function () {
  let token;
  let deployer;
  let user1 = { addr: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', key: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d' };

  it('测试用例1', async function () {

    deployer = await ethers.getSigner();

    // 实例化代币合约
    // let addr = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    // let abi = {};
    // let wallet = new ethers.Wallet(user1.key, ethers.provider);
    // token = new ethers.Contract(addr, abi, wallet.provider.getSigner());

    // 部署代币合约
    const TokenA = await ethers.getContractFactory("TokenA");
    token = await TokenA.deploy('TokenA', 'A', 18, 0);
    let ret = await token.deployed();
    console.log(`代币合约地址:${token.address}`);


    // 部署 Vault 合约
    const Vault = await ethers.getContractFactory("Vault");
    let vault = await Vault.deploy();
    await vault.deployed();
    console.log(`Vault合约地址:${vault.address}`);

    // 代币增发
    let tx = await token.mint(ethers.utils.parseEther('20000'));
    let total = await token.totalSupply();
    console.log(`已增发代理:${total}`, await token.balanceOf(deployer.address));

    let balance = await deployer.getBalance();
    console.log(`部署人: ${deployer.address}, 以太坊余额:${ethers.utils.formatEther(balance)}`)

    // 转帐给用户1
    await token.transfer(user1.addr, ethers.utils.parseEther('200'));
    let user = await getBalance(token, user1.key);
    console.log(`帐号1:${user.wallet.address}, 代币余额:${user.balance} A`);

    // 切换钱包
    console.log('切换钱包');
    let usr1Wallet = new ethers.Wallet(user1.key, ethers.provider);
    let token1 = await token.connect(usr1Wallet);
    let vault1 = await vault.connect(usr1Wallet);

    // 检查授权
    let allow = await token1.allowance(usr1Wallet.address, vault1.address);
    allow = ethers.utils.formatEther(allow);
    // console.log(allow)
    if (allow < 1) {
      console.log('开始授权')
      await token1.approve(vault1.address, ethers.utils.parseEther('200'));
    }

    // 存款
    allow = await token1.allowance(usr1Wallet.address, vault1.address);
    allow = ethers.utils.formatEther(allow);
    // console.log(allow)
    if (allow > 0) {
      console.log('存款')
      await vault1.deposit(token1.address, ethers.utils.parseEther('120'));

      user = await getBalance(token1, user1.key);
      console.log(`帐号1:${user.wallet.address}, 用户余额:${user.balance} A`);
      balance = await token1.balanceOf(vault1.address);
      console.log(`Vault1:${vault1.address}, 用户余额:${ethers.utils.formatEther(balance)} A`);
    }

    //取回
    console.log('总供可取回', ethers.utils.formatEther(await vault1.balanceOf(token1.address)));
    await vault1.withdraw(token1.address, ethers.utils.parseEther('30'));

    console.log('当前仅取回部分')
    user = await getBalance(token1, user1.key);
    console.log(`帐号1:${user.wallet.address}, 用户余额:${user.balance} A`);
    balance = await token1.balanceOf(vault1.address);
    console.log(`Vault1:${vault1.address}, 用户余额:${ethers.utils.formatEther(balance)} A`);

  })

});
