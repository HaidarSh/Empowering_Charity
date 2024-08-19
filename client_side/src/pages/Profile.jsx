import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DisplayActiveUserCharities,
  DisplayInActiveUserCharities,
  CustomButtom,
  BlueLoader,
  RedLoader,
} from "../components";
import { useStateContext } from "../context";
import {
  search_dark,
  search_light,
  profile_picture_active,
  address_icon_active,
  email_icon_active,
  phone_icon_active,
  name_icon_active,
  location_icon_active,
  location_icon_inactive,
  phone_icon_inactive,
  profile_picture_inactive,
  address_icon_inactive,
  name_icon_inactive,
  email_icon_inactive,
} from "../assets";

import { useTheme } from "../ThemeContext";

function ToggleButton({ active, onClick, label, color }) {
  return (
    <button
      onClick={onClick}
      className={`profile-button px-6 py-2 rounded-[10px] text-[var(--custombuttom-text-color)] ${color} text-[20px] ${
        active ? "border-4 shadow-md" : "border border-transparent shadow-none"
      }`}
      style={{
        borderColor: active ? "var(--profile-bg-color)" : "transparent",
      }}
    >
      {label}
    </button>
  );
}

export default function Profile() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [activeCharities, setActiveCharities] = useState([]);
  const [inActiveCharities, setInActiveCharities] = useState([]);
  const [filteredCharities, setFilteredCharities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showActive, setShowActive] = useState(true);

  const [userActiveProfile, setUserActiveProfile] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    country: "",
  });

  const [userInActiveProfile, setUserInActiveProfile] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    country: "",
  });

  const {
    address,
    contract,
    connect,
    disconnect,
    getUserActiveCharities,
    getUserInActiveCharities,
  } = useStateContext();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (contract) {
      fetchActiveCharities();
      fetchInActiveCharities();
    }
  }, [address, contract]);

  async function fetchActiveCharities() {
    setIsLoading(true);
    const data = await getUserActiveCharities(address);
    setActiveCharities(data);
    setUserActiveProfile((prev) => ({
      ...prev,
      name: data[0]?.name || prev.name,
      address: data[0]?.owner || prev.address,
      phoneNumber: data[0]?.phoneNumber || prev.phoneNumber,
      email: data[0]?.email || prev.email,
      country: data[0]?.country || prev.country,
    }));
    setIsLoading(false);
  }

  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(address);
    setInActiveCharities(data);
    setUserInActiveProfile((prev) => ({
      ...prev,
      name: data[0]?.name || prev.name,
      address: data[0]?.owner || prev.address,
      phoneNumber: data[0]?.phoneNumber || prev.phoneNumber,
      email: data[0]?.email || prev.email,
      country: data[0]?.country || prev.country,
    }));
    setIsLoading(false);
  }

  useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [queryParam]);

  useEffect(() => {
    filterCharities();
  }, [searchQuery, activeCharities, inActiveCharities, showActive]);

  function filterCharities() {
    const charities = showActive ? activeCharities : inActiveCharities;
    const filtered = charities.filter(
      (charity) =>
        charity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        charity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        charity.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCharities(filtered);
  }

  return address ? (
    <div>
      {isLoading && <BlueLoader />}

      <div className="flex justify-between">
        <div className=" searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-bg-color)] rounded-[100px]">
          <input
            type="text"
            placeholder="Search for Charities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color)] bg-transparent outline-none"
          />

          <div
            className={`w-[72px] h-full rounded-[20px] ${
              showActive ? "bg-[#3498db]" : "bg-[#e74c3c]"
            } flex justify-center items-center cursor-pointer`}
            onClick={filterCharities}
          >
            <img
              src={theme === "dark" ? search_dark : search_light}
              alt="search"
              className="w-[15px] h-[15px] object-contain "
            />
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <CustomButtom
            btnType="button"
            title={address ? "Disconnect the wallet" : "Connect to wallet"}
            styles={
              address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db] px-6 py-3"
            }
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      </div>

      <div className="profile-bar mt-[60px] bg-[var(--profile-bg-color)] rounded-[20px] shadow-lg p-8  mx-auto flex flex-col gap-6 mb-10">
        {" "}
        <div className="flex items-center mb-6 gap-5">
          <div className="box w-[100px] h-[100px] rounded-[20px] bg-[var(--background-color)] flex items-center justify-center mr-6 p-2">
            <img
              src={
                showActive ? profile_picture_active : profile_picture_inactive
              }
              alt="Profile Photo"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <div className="text-[var(--text-color)] w-full mt-5">
            <div className="flex flex-wrap text-lg mb-4 justify-between">
              <div className="flex flex-col mb-1">
                <div>
                  <img
                    src={showActive ? name_icon_active : name_icon_inactive}
                    alt="name_icon"
                    className="icons cursor-pointer"
                  />
                  <h1
                    className={`profile-button mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#338AF0]"
                        : "hover:text-[#e74c3c]"
                    } `}
                  >
                    {userActiveProfile.name ||
                      userInActiveProfile.name ||
                      "N/A"}
                  </h1>
                </div>
                <br />
                <div>
                  <img
                    src={
                      showActive ? address_icon_active : address_icon_inactive
                    }
                    alt="address_icon"
                    className="icons cursor-pointer"
                  />
                  <p
                    className={`profile-button mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#338AF0]"
                        : "hover:text-[#e74c3c]"
                    }`}
                  >
                    {userActiveProfile.address ||
                      userInActiveProfile.address ||
                      "N/A"}
                  </p>
                </div>
                <br />
                <div>
                  <img
                    src={
                      showActive ? location_icon_active : location_icon_inactive
                    }
                    alt="location_icon"
                    className="icons cursor-pointer"
                  />
                  <p
                    className={`profile-button mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#338AF0]"
                        : "hover:text-[#e74c3c]"
                    }`}
                  >
                    {userActiveProfile.country ||
                      userInActiveProfile.country ||
                      "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col mb-1">
                <div>
                  <img
                    src={showActive ? phone_icon_active : phone_icon_inactive}
                    alt="phone_icon"
                    className="icons cursor-pointer"
                  />

                  <p
                    className={`profile-button mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#338AF0]"
                        : "hover:text-[#e74c3c]"
                    }`}
                  >
                    {userActiveProfile.phoneNumber ||
                      userInActiveProfile.phoneNumber ||
                      "N/A"}
                  </p>
                </div>
                <br />
                <div>
                  <img
                    src={showActive ? email_icon_active : email_icon_inactive}
                    alt="email_icon"
                    className="icons cursor-pointer"
                  />

                  <p
                    className={`profile-button underline mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#338AF0]"
                        : "hover:text-[#e74c3c]"
                    }`}
                  >
                    {userActiveProfile.email ||
                      userInActiveProfile.email ||
                      "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[30px]">
          <div
            onClick={() => setShowActive(true)}
            className="box bg-[var(--background-color)] p-4 w-[130px] rounded-[10px] mt-10 flex text-lg text-[var(--text-color)] flex justify-center items-center cursor-pointer"
          >
            <div className="profile-button flex flex-col ">
              <span className="profile-button font-bold text-[#338AF0] cursor-pointer">
                Active:
              </span>
              <span className="profile-button flex justify-center items-center cursor-pointer text-[#338AF0]">
                {activeCharities.length}
              </span>
            </div>
          </div>
          <div
            onClick={() => setShowActive(false)}
            className="box bg-[var(--background-color)] p-4 w-[130px] rounded-[10px] mt-10 flex text-lg text-[var(--text-color)] flex justify-center items-center cursor-pointer"
          >
            <div className="profile-button flex flex-col">
              <span className="profile-button font-bold cursor-pointer text-[#e74c3c]">
                InActive:
              </span>
              <span className="profile-button flex justify-center items-center cursor-pointer text-[#e74c3c]">
                {inActiveCharities.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mb-4 justify-center font-epilogue">
        <ToggleButton
          active={showActive}
          onClick={() => setShowActive(true)}
          label="Active"
          color="bg-[#3498db]"
        />

        <ToggleButton
          active={!showActive}
          onClick={() => setShowActive(false)}
          label="InActive"
          color="bg-[#e74c3c]"
        />
      </div>

      <div>
        {showActive ? (
          <DisplayActiveUserCharities
            title="All active charities"
            isLoading={isLoading}
            charities={filteredCharities}
          />
        ) : (
          <DisplayInActiveUserCharities
            title="All inactive charities"
            isLoading={isLoading}
            charities={filteredCharities}
          />
        )}
      </div>
    </div>
  ) : (
    <div className="profile-bar bg-[var(--profile-bg-color)] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center mb-[10px]">
        <CustomButtom
          btnType="button"
          title={address ? "Disconnect the wallet" : "Connect to wallet"}
          styles={address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db] px-6 py-3"}
          handleClick={() => {
            if (address) disconnect();
            else connect();
          }}
        />
      </div>

      <div className="flex justify-center flex-col items-center h-full mt-[5px] text-[var(--text-color)]">
        <h1 className="text-[20px] text-bold">
          Please connect wallet to view your profile.
        </h1>
      </div>
    </div>
  );
}
