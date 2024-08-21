import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../../context";
import { CustomButtom, CountBoxInActive, RedLoader } from "../../components";
import { calculateBarPercentage } from "../../utils";
import {
  email_icon_inactive,
  location_icon_inactive,
  name_icon_inactive,
  phone_icon_inactive,
  profile_picture_inactive,
  thirdweb,
} from "../../assets";

export default function InActiveCharityDetails() {
  const { state } = useLocation();

  const {
    getDonations,
    contract,
    address,
    connect,
    disconnect,
    getUserActiveCharities,
    getUserInActiveCharities,
  } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [donators, setDonators] = useState([]);
  const [activeCharities, setActiveCharities] = useState([]);
  const [inActiveCharities, setInActiveCharities] = useState([]);

  useEffect(() => {
    if (contract) fetchDonators();
    fetchActiveCharities();
    fetchInActiveCharities();
  }, [contract, address]);

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

  return (
    <div>
      {isLoading && <RedLoader />}
      <div className="flex flex-col justify-center items-center px-50">
        <CustomButtom
          btnType="button"
          title={address ? "Disconnect wallet" : "Connect wallet"}
          styles={
            address
              ? "bg-[#e74c3c] h-[40px] flex justify-center items-center"
              : "bg-[#3498db] h-[40px] flex justify-center items-center"
          }
          handleClick={() => {
            if (address) disconnect();
            else connect();
          }}
        />
      </div>
      <div className="w-full image-custom-2 flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1">
          <img
            src={state.image}
            alt="charity"
            className="custom-buttom image-custom w-full h-[410px] object-cover rounded-xl cursor-pointer opacity-60 brightness-110"
          />

          <div className="cursor-pointer custom-buttom relative w-full h-[7px] bg-[var(--targetloading-bg-color)] mt-2 rounded-[20px]">
            <div
              className="absolute h-full bg-[#e74c3c] rounded-[20px]"
              style={{
                width: `${calculateBarPercentage(
                  state.target / 1000000000000000000,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBoxInActive title="Days Left" value="0" />
          <CountBoxInActive
            title={`Raised of ${state.target / 1000000000000000000}`}
            value={state.amountCollected}
          />
          <CountBoxInActive title="Total Donators" value={donators.length} />
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
                <h4 className="charitydetails-text-nb charitydetails-text-2 font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                  {state.owner}
                </h4>
                <div className="flex flex-row justify-between">
                  <p className="charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[11px] text-[var(--text-color)] cursor-pointer hover:text-[#338AF0] ">
                    {activeCharities.length} Active{" "}
                    {activeCharities.length > 1 ? "Charities" : "Charity"}
                  </p>
                  <p className="charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[11px] text-[var(--text-color)] cursor-pointer hover:text-[#e74c3c]">
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
                src={profile_picture_inactive}
                alt="profile_picture_active"
                className="icons w-3/4 h-3/4"
              />
            </div>

            <div className="text-[var(--text-color)] w-full mt-5">
              <div className="flex flex-wrap text-lg mb-4 justify-between">
                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={name_icon_inactive}
                      alt="name_icon_active"
                      className="icons cursor-pointer"
                    />
                    <h1 className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                      {state.name}
                    </h1>
                  </div>
                  <br />
                  <div>
                    <img
                      src={location_icon_inactive}
                      alt="location_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                      {state.country}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={phone_icon_inactive}
                      alt="phone_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                      {state.phoneNumber}
                    </p>
                  </div>
                  <br />

                  <div>
                    <img
                      src={email_icon_inactive}
                      alt="email_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all underline cursor-pointer hover:text-[#e74c3c]">
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
              <p className="charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
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
                    <p className="charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] break-all">
                      {index + 1}. {item.donator}
                    </p>

                    <p className="charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] break-all">
                      {item.donation} ETH
                    </p>
                  </div>
                ))
              ) : (
                <p className="charitydetails-text-3 font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
                  No donators for this charity.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="custom-buttom bg-[var(--profile-bg-color)] flex-1 justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 max-h-300px">
          <h4 className="font-epilogue responsive-text font-semibold text-[18px]  my-10 text-[#e74c3c]">
            This charity is now inactive. Donations and deletions are no longer
            permitted.
          </h4>
        </div>
      </div>
    </div>
  );
}
