W1-1作业：
* 安装 Metamask、并创建好账号
* 执行一次转账
* 使用 Remix 创建任意一个合约
* VSCode IDE 开发环境配置
* 使用 Truffle 部署 Counter 合约 到 test 网络（goerli）（提交交易 hash）
* 编写一个测试用例


转帐记录:
    https://testnet.bscscan.com/tx/0x12f8bc45a0ac6a7cca65528851357b0f86be7ee57f79f85c8005c6f71d31d321

Counter合约 :
    部署Hash: https://testnet.bscscan.com/tx/0x5ef31a6c02aec651ebe32cc38b2da0a22ca504b858169b5589d08f670fe5e394
    合约地址:  https://testnet.bscscan.com/address/0xcc001a305a0c790f74514e21aeb25bf8e7c75072


部署过程日志:

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'bscTest'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Counter'
   -------------------
   > transaction hash:    0x5ef31a6c02aec651ebe32cc38b2da0a22ca504b858169b5589d08f670fe5e394
   > Blocks: 3            Seconds: 9
   > contract address:    0xCC001a305a0c790F74514E21AEb25Bf8E7c75072
   > block number:        17366042
   > block timestamp:     1646698945
   > account:             0x702a2114B5be29710b68047DE39D48f7C03f836E
   > balance:             0.89813483
   > gas used:            165517 (0x2868d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00165517 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 17366045)
   > confirmation number: 3 (block: 17366047)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00165517 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.00165517 ETH

