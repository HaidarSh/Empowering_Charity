import React from "react";
import { useNavigate } from "react-router-dom";

import { BlueLoader, ActiveFundCard } from "..";

export default function DisplayActiveUserCharities({
  title,
  isLoading,
  charities,
}) {
  const navigate = useNavigate();

  function handleNavigate(charity) {
    navigate(`/Active_Charity_Details/${charity.pId}`, { state: charity });
  }

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]">
        {title} ({charities.length})
      </h1>

      <div className="flex flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <BlueLoader />}

        {!isLoading && charities.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[var(--text-color)] ">
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
