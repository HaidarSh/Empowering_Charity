import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlueLoader, ActiveFundCard } from "..";
import { search_dark, search_light } from "../../assets";
import { CustomButtom } from "..";
import { useStateContext } from "../../context";

import { useTheme } from "../../ThemeContext";

export default function DisplayActiveCharities({
  title,
  isLoading,
  charities,
}) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { address, connect, disconnect } = useStateContext();

  useEffect(() => {
    navigate(`./?query=${searchQuery}`);
  }, [searchQuery, navigate]);

  function handleNavigate(charity) {
    navigate(`/Active_Charity_Details/${charity.pId}`, { state: charity });
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-bg-color)] rounded-[100px] ">
          <input
            type="text"
            placeholder="Search for Charities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color)] bg-transparent outline-none"
          />
          <div className="w-[72px] h-full rounded-[20px] bg-[#3498db] flex justify-center items-center cursor-pointer">
            <img
              src={theme === "dark" ? search_dark : search_light}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>
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

      <h1 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]">
        {title} ({charities.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <BlueLoader />}

        {!isLoading && charities.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px]  text-[var(--text-color)]">
            {" "}
            No result found.
          </p>
        )}

        {!isLoading &&
          charities.length > 0 &&
          charities.map((charity) => (
            <ActiveFundCard
              key={charity.pId}
              {...charity}
              handleClick={() => handleNavigate(charity)}
            />
          ))}
      </div>
    </div>
  );
}
