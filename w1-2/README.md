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


W1-2作业：
* 使用Hardhat部署修改后的Counter
* 使用Hardhat测试Counter
* 写一个脚本调用count()


部署Hash: https://testnet.bscscan.com/tx/0x4ae74952787950aad0c328ba9eda0aabd1195c9c06eea0bf7b03b71dd3986ef7
合约地址:  https://testnet.bscscan.com/address/0xb4b39828becde1a978110b748f51df1adedadb66


日志：
npx hardhat run scripts/sample-script.js --network bscTest
Downloading compiler 0.8.0
Compiled 2 Solidity files successfully
Greeter deployed to: 0xB4b39828BECDE1A978110b748f51DF1AdedAdB66
