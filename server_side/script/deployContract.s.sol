// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol"; 
import "../src/Contract.sol";

contract DeployContract is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        new Contract(); 
        vm.stopBroadcast();
    }
}
