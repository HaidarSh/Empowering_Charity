import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useCoinbaseWallet,
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
    mutateAsync: createCharity,
    isLoading: isWriteLoading,
    error: writeError,
  } = useContractWrite(contract, "createCharity");

  const address = useAddress();
  const connect = useCoinbaseWallet();
  const disconnect = useDisconnect();

 
  console.log("Connect Function:", connect);

 
  console.log("Disconnect Function:", disconnect);

  async function publishCharity(form) {
    try {
      const targetValue = form.target.toString();
      let data = await createCharity({
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

  async function editCharity(charityId, form) {
    try {
      const targetValue = form.target.toString();
      let data = await contract.call("editCharity", [
        charityId,
        form.name,
        form.title,
        form.description,
        ethers.utils.parseUnits(targetValue, "ether"),
        form.image,
        form.category,
        form.phoneNumber,
        form.email,
        form.country,
      ]);
      console.log("Charity edited successfully", data);
      return true;
    } catch (error) {
      console.error("Edit charity failed", error);
      return false;
    }
  }

  async function getActiveCharities() {
    const charities = await contract.call("getActiveCharities");

    const parsedCharities = charities.map((charity) => ({
      pId: charity.charityId,
      owner: charity.owner,
      name: charity.name,
      title: charity.title,
      description: charity.description,
      target: ethers.utils.formatEther(charity.target.toString()) / 1e18,
      deadline: charity.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        charity.amountCollected.toString()
      ),
      image: charity.image,
      category: charity.category,
      phoneNumber: charity.phoneNumber,
      email: charity.email,
      country: charity.country,
    }));
    return parsedCharities;
  }

  async function getInActiveCharities() {
    const charities = await contract.call("getInActiveCharities");

    const parsedCharities = charities.map((charity) => ({
      pId: charity.charityId,
      owner: charity.owner,
      name: charity.name,
      title: charity.title,
      description: charity.description,
      target: ethers.utils.formatEther(charity.target.toString()) / 1e18,
      deadline: charity.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        charity.amountCollected.toString()
      ),
      image: charity.image,
      category: charity.category,
      phoneNumber: charity.phoneNumber,
      email: charity.email,
      country: charity.country,
    }));

    return parsedCharities;
  }

  async function getUserActiveCharities(address) {
    const allCharities = await getActiveCharities();

    const filteredCharities = allCharities.filter(
      (charity) => charity.owner === address
    );

    return filteredCharities;
  }

  async function getUserInActiveCharities(address) {
    const allCharities = await getInActiveCharities();

    const filteredCharities = allCharities.filter(
      (charity) => charity.owner === address && !charity.active
    );

    return filteredCharities;
  }

  async function donate(pId, amount) {
    try {
      const data = await contract.call("donateToCharity", [pId], {
        value: ethers.utils.parseEther(amount),
      });
      return true;
    } catch (error) {
      console.error("Delete charity failed", error);
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

  async function removeCharity(charityId) {
    try {
      const data = await contract.call("deleteCharity", [charityId]);
      console.log("Charity deleted", data);
      return true;
    } catch (error) {
      console.error("Delete charity failed", error);
      return false;
    }
  }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createCharity: publishCharity,
        getActiveCharities,
        getInActiveCharities,
        getUserActiveCharities,
        getUserInActiveCharities,
        donate,
        getDonations,
        removeCharity,
        editCharity,
        connect,
        disconnect,
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
