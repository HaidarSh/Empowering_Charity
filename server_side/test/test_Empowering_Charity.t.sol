// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/Empowering_Charity.sol";

contract EmpoweringCharityTest is Test {
    Empowering_Charity charityContract;
    address owner = address(0x1);
    address donator = address(0x2);

    function setUp() public {
        charityContract = new Empowering_Charity();
    }
    function testDeleteCharityAsNonOwner() public {
        uint256 charityId = charityContract.createCharity(
            owner,
            "Charity Name",
            "Charity Title",
            "Charity Description",
            100 ether, 
            block.timestamp + 1 days, 
            "charityImage.jpg",
            "Health",
            "123456789",
            "email@example.com",
            "Country"
        );

        vm.prank(donator); 
        vm.expectRevert("Only the owner can perform this action");
        charityContract.deleteCharity(charityId);
    }

    function testFutureDeadlineRevert() public {
        vm.expectRevert("The deadline should be a date in the future");
        charityContract.createCharity(
            owner,
            "Charity Name",
            "Charity Title",
            "Charity Description",
            100 ether,
            block.timestamp - 1 days,
            "charityImage.jpg",
            "Health",
            "123456789",
            "email@example.com",
            "Country"
        );
    }
}
