import React from "react";
import { useNavigate } from "react-router-dom";

import { BlueLoader, ActiveFundCard } from ".";

export default function DisplayActiveUserCampaigns({
  title,
  isLoading,
  campaigns,
}) {
  const navigate = useNavigate();

  function handleNavigate(campaign) {
    navigate(`/active-campaign-details/${campaign.pId}`, { state: campaign });
  }

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <BlueLoader />}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[var(--text-color)] ">
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
