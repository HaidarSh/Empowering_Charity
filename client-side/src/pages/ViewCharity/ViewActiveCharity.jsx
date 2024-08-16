import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DisplayActiveCharities } from "../../components";
import { useStateContext } from "../../context";

export default function ViewActiveCharity() {
  const [isLoading, setIsLoading] = useState(false);
  const [charities, setCharities] = useState([]);
  const [filteredCharities, setFilteredCharities] = useState([]);
  const { address, contract, getActiveCharities } = useStateContext();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  async function fetchCharities() {
    setIsLoading(true);
    const data = await getActiveCharities();
    setCharities(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCharities();
  }, [address, contract]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = charities.filter(
        (charity) =>
          charity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          charity.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          charity.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCharities(filtered);
    } else {
      setFilteredCharities(charities);
    }
  }, [searchQuery, charities]);

  return (
    <DisplayActiveCharities
      title="All Active Charities"
      isLoading={isLoading}
      charities={filteredCharities}
    />
  );
}
