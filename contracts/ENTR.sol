//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ERC20WithPermit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ENTR is ERC20WithPermit, Ownable {

    uint256 private constant SUPPLY = 100_000_000 * 10**18;

    constructor() ERC20("ENTER Governance Token", "ENTR") {
        _mint(msg.sender, SUPPLY);
    }

    function mint(address to, uint256 amount) public virtual onlyOwner {
        _mint(to, amount);
    }
}