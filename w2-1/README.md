# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```



W2_1作业：
* 编写⼀个Bank合约：
* 通过 Metamask 向Bank合约转账ETH
* 在Bank合约记录每个地址转账⾦额
* 编写 Bank合约withdraw(), 实现提取出所有的 ETH


部署Hash: https://testnet.bscscan.com/tx/0xda3ace6dd42379b92e3969962e91d6eb05cf008a3f9c91fa325f0f04a693eec1
合约地址:  https://testnet.bscscan.com/address/0x8B665D7c878B2282a9B261E11d5AC0eF28e0ce1a


日志:
npx hardhat run scripts/sample-script.js --network bscTest
Bank deployed to: 0x8B665D7c878B2282a9B261E11d5AC0eF28e0ce1a


通过 Metamask 向Bank合约转账Hash: https://testnet.bscscan.com/tx/0x604caef81bb179d92384543982836a0e2e0269c129eef85da1c530c2288b8acf
