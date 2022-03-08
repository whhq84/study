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



W2_2作业
* 编写合约Score，⽤于记录学⽣（地址）分数：
* 仅有⽼师（⽤modifier权限控制）可以添加和修改学⽣分数
* 分数不可以⼤于 100；
* 编写合约 Teacher 作为⽼师，通过 IScore 接⼝调⽤修改学⽣分数。


部署Hash: https://testnet.bscscan.com/tx/0xb18b49cc69e6653ed9a1af7cabe18b1a739bfef7a1dfda807b0440c62dffd713
合约地址:  https://testnet.bscscan.com/address/0xBD8afe6d7792496e3b607C83821a920e05F567b9


日志:
npx hardhat run scripts/sample-script.js --network bscTest
Score deployed to: 0xBD8afe6d7792496e3b607C83821a920e05F567b9


