import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlueLoader, ActiveFundCard } from "..";
import { search_dark, search_light } from "../../assets";
import { CustomButtom } from "..";
import { useStateContext } from "../../context";
import { useTheme } from "../HelperComponents/ThemeContext";

export default function DisplayActiveCharities({
  title,
  isLoading,
  charities,
}) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const { address, connect, disconnect } = useStateContext();

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    navigate(`./?query=${searchQuery}`);
  }, [searchQuery, navigate]);

  function handleNavigate(charity) {
    navigate(`/Active_Charity_Details/${charity.pId}`, { state: charity });
  }

  return (
    <div>
      <div className="flex flex-row justify-between gap-2">
        <div className="searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-bg-color)] rounded-[100px] ">
          <input
            type="text"
            placeholder={
              isSmallScreen ? "Search charities" : "Search for charities"
            }
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
        <div className="flex flex-row ml-auto sm:w-auto">
          <CustomButtom
            btnType="button"
            title={
              address
                ? isSmallScreen
                  ? "Disconnect"
                  : "Disconnect wallet"
                : isSmallScreen
                ? "Connect"
                : "Connect wallet"
            }
            styles={address ? "bg-[#e74c3c] p-1" : "bg-[#3498db] p-1"}
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      </div>

      <h1 className="charitydetails-text-3 font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]">
        {title} ({charities.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <BlueLoader />}

        {!isLoading && charities.length === 0 && (
          <p className="responsive-text font-epilogue font-normal text-[14px] leading-[30px]  text-[var(--text-color)]">
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
