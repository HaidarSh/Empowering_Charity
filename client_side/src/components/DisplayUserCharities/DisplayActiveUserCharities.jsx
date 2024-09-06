import React from "react";
import { useNavigate } from "react-router-dom";

import { GreenLoader, ActiveFundCard } from "..";

export default function DisplayActiveUserCharities({
  title,
  isLoading,
  charities,
}) {
  const navigate = useNavigate();

  function handleNavigate(charity) {
    navigate(`/Empowering_Charity/Active_Charity_Details/${charity.pId}`, { state: charity });
  }

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]">
        {title} ({charities.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && <GreenLoader />}

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
