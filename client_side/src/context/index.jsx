import React, { useState, useEffect, useContext, createContext } from "react";
import { useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { ABI, contractAddress } from "./Contract_ABI_Address";
import Swal from "sweetalert2";

const StateContext = createContext();

const sepoliaChainId = "0xaa36a7";

const checkNetwork = async (provider) => {
  if (!provider) {
    console.error("No provider found");
    return false;
  }

  const { chainId } = await provider.getNetwork();
  if (chainId !== parseInt(sepoliaChainId, 16)) {
    Swal.fire({
      title: "You are not connected to the Sepolia network",
      text: "Please change your Meta Mask network to sepolia netwrok",
      icon: "warning",
      confirmButtonText: "OK",
      customClass: {
        popup: "custom-swal-popup-warning",
        title: "custom-swal-title-warning",
        confirmButton: "custom-swal-confirm-button-warning",
      },
    });
    return false;
  }

  return true;
};

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

        const isCorrectNetwork = await checkNetwork(provider);
        if (!isCorrectNetwork) {
          console.error("Please switch to the Sepolia network.");
          return;
        }

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

  const publishCharity = async (form) => {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }

      const isCorrectNetwork = await checkNetwork(provider);
      if (!isCorrectNetwork) return false;

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
  };

  const editCharity = async (charityId, form) => {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }

      const isCorrectNetwork = await checkNetwork(provider);
      if (!isCorrectNetwork) return false;

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
  };

  const donate = async (pId, amount) => {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }

      const isCorrectNetwork = await checkNetwork(provider);
      if (!isCorrectNetwork) return false;

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
  };

  const getActiveCharities = async () => {
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
  };

  const getInActiveCharities = async () => {
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
  };

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

  const getDonations = async (pId) => {
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
  };

  const removeCharity = async (charityId) => {
    try {
      if (!ethersContract) {
        console.error("Contract is not initialized.");
        return false;
      }

      const isCorrectNetwork = await checkNetwork(provider);
      if (!isCorrectNetwork) return false;

      const transaction = await ethersContract.deleteCharity(charityId);

      const receipt = await transaction.wait();
      console.log("Charity deleted", receipt);
      return true;
    } catch (error) {
      console.error("Delete charity failed", error);
      return false;
    }
  };

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
