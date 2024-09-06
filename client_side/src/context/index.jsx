import React, { useState, useEffect, useContext, createContext } from "react";
import { useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { ABI, contractAddress } from "./Contract_ABI_Address";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const {
    contract,
    isLoading: isContractLoading,
    error: contractError,
  } = useContract(contractAddress, ABI);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [ethersContract, setEthersContract] = useState(null);

  useEffect(() => {
    if (signer) {
      const contractInstance = new ethers.Contract(
        contractAddress,
        ABI,
        signer
      );
      setEthersContract(contractInstance);
    }
  }, [signer]);

  const connect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setProvider(provider);
        setSigner(signer);
        setAddress(address);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      console.error("No Ethereum provider found.");
    }
  };
  const disconnect = () => {
    setProvider(null);
    setSigner(null);
    setAddress(null);
    setEthersContract(null);
  };

  async function publishCharity(form) {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }

      const targetValue = ethers.utils.parseUnits(
        form.target.toString(),
        "ether"
      );

      const transaction = await ethersContract.createCharity(
        address,
        form.name,
        form.title,
        form.description,
        targetValue,
        new Date(form.deadline).getTime(),
        form.image,
        form.category,
        form.phoneNumber,
        form.email,
        form.country
      );
      const receipt = await transaction.wait();

      console.log("Contract call success", receipt);
      return true;
    } catch (error) {
      console.error("Contract call failed", error);
      return false;
    }
  }

  async function editCharity(charityId, form) {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }
      const targetValue = ethers.utils.parseUnits(
        form.target.toString(),
        "ether"
      );

      const transaction = await ethersContract.editCharity(
        charityId,
        form.name,
        form.title,
        form.description,
        targetValue,
        new Date(form.deadline).getTime(),
        form.image,
        form.category,
        form.phoneNumber,
        form.email,
        form.country
      );

      const receipt = await transaction.wait();

      console.log("Charity edited successfully", receipt);
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
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }

      const transaction = await ethersContract.donateToCharity(pId, {
        value: ethers.utils.parseEther(amount),
      });

      const receipt = await transaction.wait();
      console.log("Donation successful", receipt);
      return true;
    } catch (error) {
      console.error("Donation failed", error);
      return false;
    }
  }

  async function getDonations(pId) {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return [];
      }

      const donations = await ethersContract.getDonators(pId);
      const numberOfDonations = donations[0].length;

      const parsedDonations = [];

      for (let i = 0; i < numberOfDonations; i++) {
        parsedDonations.push({
          donator: donations[0][i],
          donation: ethers.utils.formatEther(donations[1][i].toString()),
        });
      }

      return parsedDonations;
    } catch (error) {
      console.error("Failed to get donations", error);
      return [];
    }
  }

  async function removeCharity(charityId) {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }

      const transaction = await ethersContract.deleteCharity(charityId);

      const receipt = await transaction.wait();
      console.log("Charity deleted", receipt);
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
