// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/Empowering_Charity.sol";

contract DeployEmpowering_Charity is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        new Empowering_Charity();
        vm.stopBroadcast();
    }
}
