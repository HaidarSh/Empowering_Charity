import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlueLoader, ActiveFundCard } from ".";
import { search } from "../assets";
import { CustomButtom } from ".";
import { useStateContext } from "../context";

export default function DisplayActiveCampaigns({
  title,
  isLoading,
  campaigns,
}) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { address, connect, disconnect } = useStateContext();

  useEffect(() => {
    navigate(`./?query=${searchQuery}`);
  }, [searchQuery, navigate]);

  function handleNavigate(campaign) {
    navigate(`/active-campaign-details/${campaign.pId}`, { state: campaign });
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-bg-color)] rounded-[100px] ">
          <input
            type="text"
            placeholder="Search for Charities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color)] bg-transparent outline-none"
          />
          <div className="w-[72px] h-full rounded-[20px] bg-[#3498db] flex justify-center items-center cursor-pointer">
            <img
              src={search}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>
        <CustomButtom
          btnType="button"
          title={address ? "Disconnect the wallet" : "Connect to Wallet"}
          styles={address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db]"}
          handleClick={() => {
            if (address) disconnect();
            else connect();
          }}
        />
      </div>

      <h1 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <BlueLoader />}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px]  text-[var(--text-color)]">
            {" "}
            No result found.
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <ActiveFundCard
              key={campaign.pId}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
}
