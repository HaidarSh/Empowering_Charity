// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Empowering_Charity {
    struct Charity {
        uint256 charityId;
        address owner;
        string name;
        string title;
        string description;
        string category;
        string phoneNumber;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        string email;
        string country;
        address[] donators;
        uint256[] donations;
        bool active;
    }

    mapping(uint256 => Charity) public charities;
    uint256 public numberOfCharities = 0;

    modifier onlyOwner(uint256 _id) {
        require(
            msg.sender == charities[_id].owner,
            "Only the owner can perform this action"
        );
        _;
    }

    modifier charityIsActive(uint256 _id) {
        require(charities[_id].active, "The charity is not active");
        _;
    }

    modifier futureDeadline(uint256 _deadline) {
        require(
            _deadline > block.timestamp,
            "The deadline should be a date in the future"
        );
        _;
    }

    function createCharity(
        address _owner,
        string memory _name,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image,
        string memory _category,
        string memory _phoneNumber,
        string memory _email,
        string memory _country
    ) public futureDeadline(_deadline) returns (uint256) {
        Charity storage charity = charities[numberOfCharities];

        charity.charityId = numberOfCharities;
        charity.owner = _owner;
        charity.name = _name;
        charity.title = _title;
        charity.description = _description;
        charity.target = _target;
        charity.deadline = _deadline;
        charity.amountCollected = 0;
        charity.image = _image;
        charity.category = _category;
        charity.phoneNumber = _phoneNumber;
        charity.email = _email;
        charity.country = _country;
        charity.active = true;

        numberOfCharities++;

        return charity.charityId;
    }

    function donateToCharity(uint256 _id) public payable charityIsActive(_id) {
        uint256 amount = msg.value;

        Charity storage charity = charities[_id];

        charity.donators.push(msg.sender);
        charity.donations.push(amount);

        (bool sent, ) = payable(charity.owner).call{value: amount}("");
        require(sent, "Failed to send Ether");

        charity.amountCollected += (amount);

        if (charity.amountCollected >= charity.target / 1e18) {
            charity.active = false;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (charities[_id].donators, charities[_id].donations);
    }

    function getActiveCharities() public view returns (Charity[] memory) {
        uint256 activeCount = 0;

        for (uint i = 0; i < numberOfCharities; i++) {
            if (charities[i].active) {
                activeCount++;
            }
        }

        Charity[] memory activeCharities = new Charity[](activeCount);
        uint256 j = 0;

        for (uint i = 0; i < numberOfCharities; i++) {
            if (charities[i].active) {
                activeCharities[j] = charities[i];
                j++;
            }
        }

        return activeCharities;
    }

    function getInActiveCharities() public view returns (Charity[] memory) {
        uint256 inactiveCount = 0;

        for (uint i = 0; i < numberOfCharities; i++) {
            if (!charities[i].active) {
                inactiveCount++;
            }
        }

        Charity[] memory inactiveCharities = new Charity[](inactiveCount);
        uint256 j = 0;

        for (uint i = 0; i < numberOfCharities; i++) {
            if (!charities[i].active) {
                inactiveCharities[j] = charities[i];
                j++;
            }
        }

        return inactiveCharities;
    }

    function deleteCharity(
        uint256 _id
    ) public onlyOwner(_id) charityIsActive(_id) {
        charities[_id].active = false;
    }

    function editCharity(
        uint256 _id,
        string memory _name,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image,
        string memory _category,
        string memory _phoneNumber,
        string memory _email,
        string memory _country
    ) public onlyOwner(_id) {
        Charity storage charity = charities[_id];
        charity.name = _name;
        charity.title = _title;
        charity.description = _description;
        charity.target = _target;
        charity.deadline = _deadline;
        charity.image = _image;
        charity.category = _category;
        charity.phoneNumber = _phoneNumber;
        charity.email = _email;
        charity.country = _country;

        if (charity.amountCollected >= charity.target / 1e18) {
            charity.active = false;
        }
    }
}
