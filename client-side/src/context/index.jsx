import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useDisconnect,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { ABI, contractAddress } from "./Contract_ABI_Address";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const {
    contract,
    isLoading: isContractLoading,
    error: contractError,
  } = useContract(contractAddress, ABI);

  const {
    mutateAsync: createCampaign,
    isLoading: isWriteLoading,
    error: writeError,
  } = useContractWrite(contract, "createCampaign");

  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  async function publishCampaign(form) {
    try {
      const targetValue = form.target.toString();
      let data = await createCampaign({
        args: [
          address,
          form.name,
          form.title,
          form.description,
          ethers.utils.parseUnits(targetValue, "ether"),
          new Date(form.deadline).getTime(),
          form.image,
          form.category,
          form.phoneNumber,
          form.email,
          form.country,
        ],
      });
      console.log("Contract call success", data);
      return true;
    } catch (error) {
      console.error("Contract call failed", error);
      return false;
    }
  }

  async function getActiveCampaigns() {
    const campaigns = await contract.call("getActiveCampaigns");

    const parsedCampaigns = campaigns.map((campaign, i) => ({
      pId: campaign.campaignId,
      owner: campaign.owner,
      name: campaign.name,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      category: campaign.category,
      phoneNumber: campaign.phoneNumber,
      email: campaign.email,
      country: campaign.country,
    }));
    return parsedCampaigns;
  }

  async function getInActiveCampaigns() {
    const campaigns = await contract.call("getInActiveCampaigns");

    const parsedCampaigns = campaigns.map((campaign, j) => ({
      pId: campaign.campaignId,
      owner: campaign.owner,
      name: campaign.name,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      category: campaign.category,
      phoneNumber: campaign.phoneNumber,
      email: campaign.email,
      country: campaign.country,
    }));

    return parsedCampaigns;
  }

  async function getUserActiveCampaigns(address) {
    const allCampaigns = await getActiveCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  }

  async function getUserInActiveCampaigns(address) {
    const allCampaigns = await getInActiveCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address && !campaign.active
    );

    return filteredCampaigns;
  }

  async function donate(pId, amount) {
    try {
      const data = await contract.call("donateToCampaign", [pId], {
        value: ethers.utils.parseEther(amount),
      });
      return true;
    } catch (error) {
      console.error("Delete campaign failed", error);
      return false;
    }
  }

  async function getDonations(pId) {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  }

  async function removeCampaign(campaignId) {
    try {
      const data = await contract.call("deleteCampaign", [campaignId]);
      console.log("Campaign deleted", data);
      return true;
    } catch (error) {
      console.error("Delete campaign failed", error);
      return false;
    }
  }

  async function setNotActive(campaignId) {
    try {
      const data = await contract.call("setNotActive", [campaignId]);
      return true;
    } catch (error) {
      console.error("Delete campaign failed", error);
      return false;
    }
  }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createCampaign: publishCampaign,
        getActiveCampaigns,
        getInActiveCampaigns,
        getUserActiveCampaigns,
        getUserInActiveCampaigns,
        donate,
        getDonations,
        connect,
        disconnect,
        removeCampaign,
        setNotActive,
        isContractLoading,
        isWriteLoading,
        writeError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
