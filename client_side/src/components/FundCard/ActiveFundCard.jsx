import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context";
import {
  category_icon_active,
  thirdweb,
  location_icon_active,
  name_icon_active,
  phone_icon_active,
} from "../../assets";
import { daysLeft } from "../../utils";

export default function ActiveFundCard({
  pId,
  owner,
  title,
  name,
  target,
  deadline,
  amountCollected,
  image,
  category,
  country,
  phoneNumber,
  handleClick,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const remainingDays = daysLeft(deadline);
  const [donators, setDonators] = useState([]);

  const { getDonations } = useStateContext();

  useEffect(() => {
    if (!isLoading) {
      fetchDonators();
    }
  }, [isLoading]);

  async function fetchDonators() {
    const data = await getDonations(pId);
    setDonators(data);
  }

  return (
    <div
      className="box fundcard w-full rounded-[20px] bg-[var(--activefundcard-bg-color)] cursor-pointer mt-[15px]"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className="w-full h-[230px] object-cover rounded-[20px]"
      />

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[5px] justify-between">
          <div className="flex flex-row items-center mb-[18px] ">
            <img
              src={name_icon_active}
              alt="name"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#0c3d32]">
              {name}
            </p>
          </div>

          <div className="flex flex-row items-center mb-[18px]">
            <img
              src={location_icon_active}
              alt="country"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#0c3d32]">
              {country}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center mb-[5px] justify-between">
          <div className="flex flex-row items-center mb-[18px]">
            <img
              src={category_icon_active}
              alt="category"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#0c3d32]">
              {category}
            </p>
          </div>

          <div className="flex flex-row items-center mb-[18px] ">
            <img
              src={phone_icon_active}
              alt="phone_number"
              className="icons w-[20px] h-[20px] object-contain"
            />
            <p className="fundcard-text ml-[12px] mt-[4px] font-epilogue font-semibold font-medium text-[14px] text-[var(--text-color)] hover:text-[#0c3d32]">
              {phoneNumber}
            </p>
          </div>
        </div>

        <div className="flex justify-between flex mt-[15px] gap-2">
          <div className="block">
            <h3 className="fundcard-text font-epilogue font-semibold text-[16px] text-[var(--text-color)] text-left leading-[26px] hover:text-[#0c3d32]">
              {title}
            </h3>
          </div>

          <div className="flex flex-col">
            <h4 className="fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#0c3d32]">
              {donators.length}
            </h4>
            <p className="fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#0c3d32]">
              {donators.length == 1
                ? "Donator"
                : "Donators"}{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#0c3d32]">
              {amountCollected}
            </h4>{" "}
            <p className="fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#0c3d32]">
              Raised of {target} ETH
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="fundcard-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] leading-[22px] hover:text-[#0c3d32]">
              {remainingDays + 1}
            </h4>
            <p className="fundcard-text mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[var(--text-color)] sm:max-w-[120px] truncate hover:text-[#0c3d32]">
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

          <p className="fundcard-text-exception flex-1 font-epilogue font-normal text-[11px] text-[var(--text-color)] truncate hover:text-[#0c3d32]">
            by{" "}
            <span className="fundcard-text-exception font-epilogue text-[var(--text-color)] font-semibold hover:text-[#0c3d32]">
              {owner}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
