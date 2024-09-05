// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/Empowering_Charity.sol"; // Adjust the path according to your project structure

contract EmpoweringCharityTest is Test {
    Empowering_Charity charityContract;
    address owner = address(0x1);
    address donator = address(0x2);

    function setUp() public {
        charityContract = new Empowering_Charity();
    }

    // Test charity creation
    // function testCreateCharity() public {
    //     uint256 charityId = charityContract.createCharity(
    //         owner,
    //         "Charity Name",
    //         "Charity Title",
    //         "Charity Description",
    //         100 ether,          // Target
    //         block.timestamp + 1 days,  // Deadline in future
    //         "charityImage.jpg",
    //         "Health",
    //         "123456789",
    //         "email@example.com",
    //         "Country"
    //     );

    //     Empowering_Charity.Charity memory createdCharity = charityContract.charities(charityId);
        
    //     assertEq(createdCharity.owner, owner);
    //     assertEq(createdCharity.name, "Charity Name");
    //     assertEq(createdCharity.target, 100 ether);
    //     assertEq(createdCharity.active, true);
    // }

    // Test charity donation
    // function testDonateToCharity() public {
    //     uint256 charityId = charityContract.createCharity(
    //         owner,
    //         "Charity Name",
    //         "Charity Title",
    //         "Charity Description",
    //         100 ether, 
    //         block.timestamp + 1 days, 
    //         "charityImage.jpg",
    //         "Health",
    //         "123456789",
    //         "email@example.com",
    //         "Country"
    //     );

    //     // Simulate a donation
    //     vm.deal(donator, 10 ether); // Give donator some ether
    //     vm.prank(donator); // Make the next transaction from the donator's address
    //     charityContract.donateToCharity{value: 10 ether}(charityId);

    //     Empowering_Charity.Charity memory updatedCharity = charityContract.charities(charityId);

    //     assertEq(updatedCharity.amountCollected, 10 ether);
    //     assertEq(updatedCharity.donators[0], donator);
    //     assertEq(updatedCharity.donations[0], 10 ether);
    // }

    // Test that only the owner can delete the charity
    // function testDeleteCharityAsOwner() public {
    //     uint256 charityId = charityContract.createCharity(
    //         owner,
    //         "Charity Name",
    //         "Charity Title",
    //         "Charity Description",
    //         100 ether, 
    //         block.timestamp + 1 days, 
    //         "charityImage.jpg",
    //         "Health",
    //         "123456789",
    //         "email@example.com",
    //         "Country"
    //     );

    //     vm.prank(owner); // Simulate the owner making the next transaction
    //     charityContract.deleteCharity(charityId);

    //     Empowering_Charity.Charity memory updatedCharity = charityContract.charities(charityId);
    //     assertEq(updatedCharity.active, false);
    // }

    // Test that non-owner cannot delete the charity
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

        vm.prank(donator); // Simulate a non-owner trying to delete
        vm.expectRevert("Only the owner can perform this action");
        charityContract.deleteCharity(charityId);
    }

    // Test future deadline requirement
    function testFutureDeadlineRevert() public {
        vm.expectRevert("The deadline should be a date in the future");
        charityContract.createCharity(
            owner,
            "Charity Name",
            "Charity Title",
            "Charity Description",
            100 ether,
            block.timestamp - 1 days, // Past deadline
            "charityImage.jpg",
            "Health",
            "123456789",
            "email@example.com",
            "Country"
        );
    }
}
