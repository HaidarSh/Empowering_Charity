import React, { useState, useEffect } from "react";

import { useStateContext } from "../../context";
import {
  category_icon_inactive,
  location_icon_inactive,
  phone_icon_inactive,
  name_icon_inactive,
  thirdweb,
} from "../../assets";

export default function InActiveFundCard({
  Id,
  owner,
  title,
  name,
  phoneNumber,
  target,
  amountCollected,
  image,
  category,
  country,
  handleClick,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [donators, setDonators] = useState([]);

  const { getDonations } = useStateContext();

  useEffect(() => {
    if (!isLoading) {
      fetchDonators();
    }
  }, [isLoading]);

  async function fetchDonators() {
    const data = await getDonations(Id);
    setDonators(data);
  }

  return (
    <div
      className="box fundcard w-full rounded-[20px] bg-[var(--inactivefundcard-bg-color)] cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className="w-full h-[230px] object-cover rounded-[20px] opacity-60 brightness-110 "
      />

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[5px] justify-between">
          <div className="flex flex-row items-center mb-[18px] ">
            <img
              src={name_icon_inactive}
              alt="name"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#ed732d]">
              {name}
            </p>
          </div>

          <div className="flex flex-row items-center mb-[18px]">
            <img
              src={location_icon_inactive}
              alt="country"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-medium text-[14px] text-[var(--text-color)] hover:text-[#ed732d]">
              {country}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center mb-[5px] justify-between">
          <div className="flex flex-row items-center mb-[18px] ">
            <img
              src={category_icon_inactive}
              alt="category"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-medium text-[14px] text-[var(--text-color)] hover:text-[#ed732d]">
              {category}
            </p>
          </div>

          <div className="flex flex-row items-center mb-[18px] ">
            <img
              src={phone_icon_inactive}
              alt="phone_number"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#ed732d]">
              {phoneNumber}
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="block">
            <h3 className="fundcard-text font-epilogue font-semibold text-[16px] text-[var(--text-color)] text-left leading-[26px] truncate hover:text-[#ed732d]">
              {title}
            </h3>
          </div>

          <div className="flex flex-col">
            <h4 className="fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#ed732d]">
              {donators.length}
            </h4>
            <p className="fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#ed732d]">
              {donators.length == 1 ? "Donator" : "Donators"}{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#ed732d]">
              {amountCollected}
            </h4>
            <p className="fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#ed732d]">
              Raised of {target} ETH
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="fundcard-text font-epilogue font-semibold  text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#ed732d]">
              0
            </h4>
            <p className="fundcard-text mt-[3px] font-epilogue font-normal text-[13px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#ed732d]">
              Days left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="icons w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={thirdweb}
              alt="user"
              className="icons w-1/2 h-1/2 object-contain"
            />
          </div>

          <p className="fundcard-text-exception flex-1 font-epilogue font-normal text-[11px] text-[var(--text-color)] truncate hover:text-[#ed732d]">
            by{" "}
            <span className="fundcard-text-exception text-[var(--text-color)] font-semibold hover:text-[#ed732d]">
              {owner}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
