import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../../context";
import { CustomButtom, CountBoxActive, BlueLoader } from "../../components";
import { calculateBarPercentage, daysLeft } from "../../utils";
import {
  thirdweb,
  profile_picture_active,
  location_icon_active,
  name_icon_active,
  email_icon_active,
  phone_icon_active,
} from "../../assets";

import Swal from "sweetalert2";

export default function ActiveCharityDetails() {
  const {
    donate,
    getDonations,
    contract,
    address,
    connect,
    disconnect,
    removeCharity,
    getUserActiveCharities,
    getUserInActiveCharities,
  } = useStateContext();

  const { state } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const [collectedAmount, setCollectedAmount] = useState(state.amountCollected);
  const [activeCharities, setActiveCharities] = useState([]);
  const [inActiveCharities, setInActiveCharities] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  async function fetchDonators() {
    const data = await getDonations(state.pId);
    setDonators(data);
  }

  async function fetchActiveCharities() {
    setIsLoading(true);
    const data = await getUserActiveCharities(state.owner);
    setActiveCharities(data);
    setIsLoading(false);
  }

  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(state.owner);
    setInActiveCharities(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) {
      fetchDonators();
      fetchActiveCharities();
      fetchInActiveCharities();
    }
  }, [address, contract]);

  async function handleDonate() {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount <= 0) {
      Swal.fire({
        title: "Incorrect donation amount",
        text: "Please enter a positive number",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
      return;
    }
    if (isNaN(parsedAmount)) {
      Swal.fire({
        title: "No value entered",
        text: "Please enter a number to donate",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
      return;
    }
    const response = await donate(state.pId, amount);
    if (response) {
      setIsLoading(true);
      Swal.fire({
        title: "Donated successfully!",
        text: "",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-success",
          title: "custom-swal-title-success",
          confirmButton: "custom-swal-confirm-button-success",
        },
      });
    } else {
      Swal.fire({
        title: "Donation proccess rejected",
        text: "",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
      return;
    }
    const newCollectedAmount = parseFloat(collectedAmount) + parsedAmount;
    setCollectedAmount(newCollectedAmount);
    await fetchDonators();

    if (newCollectedAmount === state.target / 1e18) {
      navigate("/View_Active_Charity");
      Swal.fire({
        title:
          "Charity is now inactive as the target amount has been reached, Charity Removed to the inactive page",
        text: "",
        icon: "warning",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-warning",
          title: "custom-swal-title-warning",
          confirmButton: "custom-swal-confirm-button-warning",
        },
      });
    }
    if (newCollectedAmount > state.target / 1e18) {
      navigate("/View_Active_Charity");
      Swal.fire({
        title:
          "Charity is now inactive as the amount donated exceeded the target, Charity Removed to the inactive page",
        text: "",
        icon: "warning",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-warning",
          title: "custom-swal-title-warning",
          confirmButton: "custom-swal-confirm-button-warning",
        },
      });
    }
    setIsLoading(false);
    setAmount("");
  }

  async function handleDelete() {
    try {
      setIsLoading(true);
      const response = await removeCharity(state.pId);
      if (response) {
        console.log("Deletion successful");
        navigate("/View_Active_Charity");
        Swal.fire({
          title: "Charity successfully deleted!",
          text: "",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success",
          },
        });
      } else {
        console.log("Deletion failed, response.success is false");
        throw new Error("Deletion failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      Swal.fire({
        title: "Charity deletion rejected.",
        text: "",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleInputChange(event) {
    const value = event.target.value;
    if (parseFloat(value) > 0 || value === "") {
      setAmount(value);
    } else {
      setAmount(value);
    }
  }

  return (
    <div>
      {isLoading && <BlueLoader />}
      {address && (
        <div className="flex flex-col justify-center items-center px-50">
          <CustomButtom
            btnType="button"
            title={address ? "Disconnect the wallet" : ""}
            styles={
              address
                ? "bg-[#e74c3c] px-6 py-2 w-[400px] h-[40px] flex justify-center items-center"
                : ""
            }
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      )}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="charity"
            className="custom-buttom w-full h-[410px] object-cover rounded-xl cursor-pointer"
          />

          <div className="cursor-pointer custom-buttom relative w-full h-[7px] bg-[var(--targetloading-bg-color)] mt-2 rounded-[20px]">
            <div
              className="absolute h-full bg-[#338AF0] rounded-[20px]"
              style={{
                width: `${calculateBarPercentage(
                  state.target / 1000000000000000000,
                  collectedAmount
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBoxActive title="Days Left" value={remainingDays + 1} />
          <CountBoxActive
            title={`Raised of ${state.target / 1000000000000000000}`}
            value={collectedAmount}
          />
          <CountBoxActive title="Total Donators" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[1.5] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
              Creator
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="icons-charitydetails w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user"
                  className="icons w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="charitydetails-text-nb font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                  {state.owner}
                </h4>
                <div className="flex flex-row justify-between">
                  <p className="charitydetails-text-nb mt-[4px] font-epilogue font-normal text-[10px] text-[var(--text-color)] cursor-pointer hover:text-[#338AF0] ">
                    {activeCharities.length} Active{" "}
                    {activeCharities.length > 1 ? "Charities" : "Charity"}
                  </p>
                  <p className="charitydetails-text-nb mt-[4px] font-epilogue font-normal text-[10px] text-[var(--text-color)] cursor-pointer hover:text-[#e74c3c]">
                    {inActiveCharities.length} InActive{" "}
                    {inActiveCharities.length > 1 ? "Charities" : "Charity"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6 gap-5">
            <div className="icons-charitydetails w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer">
              <img
                src={profile_picture_active}
                alt="profile_picture_active"
                className="icons w-3/4 h-3/4 "
              />
            </div>

            <div className="text-[var(--text-color)] w-full mt-5">
              <div className="flex flex-wrap text-lg mb-4 justify-between">
                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={name_icon_active}
                      alt="name_icon_active"
                      className="icons cursor-pointer"
                    />
                    <h1 className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                      {state.name}
                    </h1>
                  </div>
                  <br />
                  <div>
                    <img
                      src={location_icon_active}
                      alt="location_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                      {state.country}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={phone_icon_active}
                      alt="phone_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                      {state.phoneNumber}
                    </p>
                  </div>
                  <br />
                  <div>
                    <img
                      src={email_icon_active}
                      alt="email_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all underline cursor-pointer hover:text-[#338AF0]">
                      {state.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
              Story
            </h4>
            <div className="mt-[20px]">
              <p className="font-epilogue font-small text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
              Donators
            </h4>
            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donators}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-epilogue font-small text-[14px] text-[var(--text-color)] leading-[26px] break-all">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="font-epilogue font-small text-[14px] text-[var(--text-color)] leading-[26px] break-all">
                      {item.donation} ETH
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-small text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>
        {address ? (
          <div className="flex-1">
            {address && (
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
                  Donate
                </h4>
                <div className="custom-buttom mt-[20px] flex flex-col p-4 bg-[var(--donatetocharity1-bg-color)] rounded-[10px]">
                  <p className="font-epilogue font-semibold text-[20px] leading-[30px] text-center text-[var(--text-color)]">
                    Donate to the Charity
                  </p>
                  <div className="mt-[30px]">
                    <input
                      type="number"
                      placeholder="ETH 0.5"
                      step="0.1"
                      className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--text-color)] text-[18px] leading-[30px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                      value={amount}
                      onChange={handleInputChange}
                    />

                    <div className="custom-buttom custom-buttom my-[20px] p-4 bg-[var(--donatetocharity2-bg-color)] rounded-[10px]">
                      <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-[var(--text-color)]">
                        Back it because you believe in it.
                      </h4>
                      <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[var(--text-color)]">
                        Support the project for no reward, just because it
                        speaks to you.
                      </p>
                    </div>

                    <CustomButtom
                      btnType="button"
                      title="Fund Charity"
                      styles="w-full bg-[#3498db]"
                      handleClick={handleDonate}
                    />
                  </div>
                </div>
              </div>
            )}
            {address === state.owner && (
              <div className="py-4">
                <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase mb-[10px]">
                  Delete Charity
                </h4>
                <div>
                  <CustomButtom
                    btnType="button"
                    title="Delete Charity"
                    styles="w-full bg-[#e74c3c]"
                    handleClick={handleDelete}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="custom-buttom bg-[var(--profile-bg-color)] flex-1 justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 max-h-300px">
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] my-10">
              Please connect your wallet to delete or donate to this charity.
            </h4>
            <div className="flex flex-col justify-between">
              <CustomButtom
                btnType="button"
                title={address ? "Disconnect the wallet" : "Connect to wallet"}
                styles={address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db]"}
                handleClick={() => {
                  if (address) disconnect();
                  else connect();
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
