import React from "react";

import { useNavigate } from "react-router-dom";

import { RedLoader, InActiveFundCard } from "./";

export default function DisplayInActiveUserCampaigns({
  title,
  isLoading,
  campaigns,
}) {
  const navigate = useNavigate();

  function handleNavigate(campaign) {
    navigate(`/inactive-campaign-details/${campaign.Id}`, { state: campaign });
  }

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] text-left mt-[20px]">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <RedLoader />}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[var(--text-color)]">
            No result found.
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <InActiveFundCard
              key={campaign.pId}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
}
