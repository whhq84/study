// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./TokenA.sol";
import "./Context.sol";

contract Vault {
    address private _owner;

    uint256 private _tvl;
    mapping(address => mapping(address => uint256)) private deposited;

    event Deposit(address user, uint256 amount);
    event Withdraw(address user, uint256 amount);

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Ownable: caller is not the owner");
        _;
    }

    function deposit(address erc20, uint256 amount) public returns (bool) {
        _deposit(msg.sender, erc20, amount);
        return true;
    }

    function balanceOf(address erc20) public view returns (uint256) {
        return deposited[msg.sender][erc20];
    }

    function withdraw(address erc20, uint256 amount) public returns (bool) {
        _withdraw(msg.sender, erc20, amount);
        return true;
    }

    // function withdrawAll(address user) onlyOwner() public returns (bool) {
    //     _withdraw(address(this), amount);
    //     return true;
    // }

    // fallback() external payable {
    //     // custom function code
    // }

    // receive() external payable {
    //     // custom function code
    // }

    function _deposit(
        address user,
        address erc20,
        uint256 amount
    ) internal returns (bool) {
        require(user != address(0), "ERC20: transfer from the zero address");
        require(amount > 0, "The deposit amount must be greater than zero");

        TokenA token = TokenA(erc20);
        require(
            token.transferFrom(user, address(this), amount),
            "deposit error"
        );

        deposited[user][erc20] += amount;
        _tvl += amount;

        emit Deposit(user, amount);

        return true;
    }

    function _withdraw(
        address user,
        address erc20,
        uint256 amount
    ) internal returns (bool) {
        require(user != address(0), "ERC20: transfer from the zero address");
        require(amount > 0, "The deposit amount must be greater than zero");

        // console.log(deposited[user][erc20]);

        require(
            deposited[user][erc20] >= amount,
            "The deposit balance must be greater than amount"
        );

        TokenA token = TokenA(erc20);
        require(
            // token.transferFrom(address(this), user, amount),
            token.transfer(user, amount),
            "deposit error"
        );

        deposited[user][erc20] -= amount;
        _tvl -= amount;

        emit Withdraw(user, amount);
        return true;
    }
}
