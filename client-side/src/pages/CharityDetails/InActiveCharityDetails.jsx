import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../../context";
import { CountBoxInActive, RedLoader } from "../../components";
import { calculateBarPercentage, daysLeft } from "../../utils";
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
  const navigate = useNavigate();

  const {
    getDonations,
    contract,
    address,
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
    const data = await getUserActiveCharities(address);
    setActiveCharities(data);
    setIsLoading(false);
  }

  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(address);
    setInActiveCharities(data);
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <RedLoader />}

      <div className="w-full flex md:flex-row flex-row mt-10 gap-[30px] ">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="charity"
            className="w-full h-[410px] object-cover rounded-xl opacity-60 brightness-110 contrast-50 saturate-50"
          />

          <div className="custom-buttom relative w-full h-[5px]  bg-[var(--targetloading-bg-color)] mt-2 rounded-[20px]">
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
              <div className="custom-buttom w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                  {state.owner}
                </h4>

                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[var(--text-color)] cursor-pointer hover:text-[#e74c3c]">
                  {inActiveCharities.length + activeCharities.length} Charities
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6 gap-5">
            <div className="custom-buttom w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer">
              <img
                src={profile_picture_inactive}
                alt="profile_picture_active"
                className="w-3/4 h-3/4"
              />
            </div>

            <div className="text-[var(--text-color)] w-full mt-5">
              <div className="flex flex-wrap text-lg mb-4 justify-between">
                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={name_icon_inactive}
                      alt="name_icon_active"
                      className=""
                    />
                    <h1 className="font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                      {state.name}
                    </h1>
                  </div>
                  <br />
                  <div>
                    <img
                      src={location_icon_inactive}
                      alt="location_icon"
                      className=""
                    />
                    <p className="font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                      {state.country}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={phone_icon_inactive}
                      alt="phone_icon"
                      className=""
                    />
                    <p className="font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#e74c3c]">
                      {state.phoneNumber}
                    </p>
                  </div>
                  <br />

                  <div>
                    <img
                      src={email_icon_inactive}
                      alt="email_icon"
                      className=""
                    />
                    <p className="font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all underline cursor-pointer hover:text-[#e74c3c]">
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
              <p className="font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
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
                    <p className="font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] break-all">
                      {index + 1}. {item.donator}
                    </p>

                    <p className="font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] break-all">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
                  No donators for this charity.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
