// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Contract {
    struct Campaign {
        uint256 campaignId;
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

    mapping(uint256 => Campaign) public campaigns;
    uint256 public numberOfCampaigns = 0;

    function createCampaign(
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
    ) public returns (uint256) {
        require(
            _deadline > block.timestamp,
            "The deadline should be a date in the future"
        );

        Campaign storage campaign = campaigns[numberOfCampaigns];

        campaign.campaignId = numberOfCampaigns;
        campaign.owner = _owner;
        campaign.name = _name;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;
        campaign.category = _category;
        campaign.phoneNumber = _phoneNumber;
        campaign.email = _email;
        campaign.country = _country;
        campaign.active = true;

        numberOfCampaigns++;

        return campaign.campaignId;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        require(campaign.active == true, "The campaign is not active");

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(campaign.owner).call{value: amount}("");
        require(sent, "Failed to send Ether");

        campaign.amountCollected += (amount);

        if (campaign.amountCollected >= campaign.target) {
            campaign.active = false;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getActiveCampaigns() public view returns (Campaign[] memory) {
        uint256 activeCount = 0;

        for (uint i = 0; i < numberOfCampaigns; i++) {
            if (campaigns[i].active) {
                activeCount++;
            }
        }

        Campaign[] memory activeCampaigns = new Campaign[](activeCount);
        uint256 j = 0;

        for (uint i = 0; i < numberOfCampaigns; i++) {
            if (campaigns[i].active) {
                activeCampaigns[j] = campaigns[i];
                j++;
            }
        }

        return activeCampaigns;
    }

    function getInActiveCampaigns() public view returns (Campaign[] memory) {
        uint256 inactiveCount = 0;

        for (uint i = 0; i < numberOfCampaigns; i++) {
            if (!campaigns[i].active) {
                inactiveCount++;
            }
        }

        Campaign[] memory inactiveCampaigns = new Campaign[](inactiveCount);
        uint256 j = 0;

        for (uint i = 0; i < numberOfCampaigns; i++) {
            if (!campaigns[i].active) {
                inactiveCampaigns[j] = campaigns[i];
                j++;
            }
        }

        return inactiveCampaigns;
    }

    function deleteCampaign(uint256 _id) public {
        require(
            msg.sender == campaigns[_id].owner,
            "Only the owner can delete the campaign"
        );
        require(campaigns[_id].active, "Campaign is already inactive");

        campaigns[_id].active = false;
    }

    function setNotActive(uint256 _id) public {
        campaigns[_id].active = false;
    }
}
