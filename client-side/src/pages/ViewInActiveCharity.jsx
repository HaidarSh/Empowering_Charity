import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DisplayInActiveCampaigns } from "../components";
import { useStateContext } from "../context";

export default function ViewInActiveCharity() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const { address, contract, getInActiveCampaigns } = useStateContext();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  async function fetchCampaigns() {
    setIsLoading(true);
    const data = await getInActiveCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = campaigns.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          campaign.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          campaign.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCampaigns(filtered);
    } else {
      setFilteredCampaigns(campaigns);
    }
  }, [searchQuery, campaigns]);

  return (
    <DisplayInActiveCampaigns
      title="All In-Active Charities"
      isLoading={isLoading}
      campaigns={filteredCampaigns}
    />
  );
}
