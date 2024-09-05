import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DisplayActiveUserCharities,
  DisplayInActiveUserCharities,
  CustomButtom,
  GreenLoader,
  OrangeLoader,
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
import { useTheme } from "../components";

function ToggleButton({ active, onClick, label, color }) {
  return (
    <button
      onClick={onClick}
      className={`profile-button responsive-text px-6 py-2 rounded-[50px] text-[var(--custombuttom-text-color)] ${color} text-[20px] ${
        active ? "border-4 shadow-md" : "border border-transparent shadow-none"
      }`}
      style={{
        borderColor: active ? "var(--profile-buttom-bg-color)" : "transparent",
      }}
    >
      {label}
    </button>
  );
}

export default function Profile({ showActive, setShowActive }) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [activeCharities, setActiveCharities] = useState([]);
  const [inActiveCharities, setInActiveCharities] = useState([]);
  const [filteredCharities, setFilteredCharities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

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
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      name: Array.from(
        new Set(data.map((item) => item.name).filter(Boolean))
      ).join(" | "),
      address: Array.from(
        new Set(data.map((item) => item.owner).filter(Boolean))
      ).join(" | "),
      phoneNumber: Array.from(
        new Set(data.map((item) => item.phoneNumber).filter(Boolean))
      ).join(" | "),
      email: Array.from(
        new Set(data.map((item) => item.email).filter(Boolean))
      ).join(" | "),
      country: Array.from(
        new Set(data.map((item) => item.country).filter(Boolean))
      ).join(" | "),
    }));
    setIsLoading(false);
  }

  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(address);
    setInActiveCharities(data);
    setUserInActiveProfile((prev) => ({
      ...prev,
      name: Array.from(
        new Set(data.map((item) => item.name).filter(Boolean))
      ).join(" | "),
      address: Array.from(
        new Set(data.map((item) => item.owner).filter(Boolean))
      ).join(" | "),
      phoneNumber: Array.from(
        new Set(data.map((item) => item.phoneNumber).filter(Boolean))
      ).join(" | "),
      email: Array.from(
        new Set(data.map((item) => item.email).filter(Boolean))
      ).join(" | "),
      country: Array.from(
        new Set(data.map((item) => item.country).filter(Boolean))
      ).join(" | "),
    }));
    setIsLoading(false);
  }

  const activeName = userActiveProfile.name;
  const inactiveName = userInActiveProfile.name;

  const uniqueActiveNames = Array.from(new Set([activeName].filter(Boolean)));
  const uniqueInactiveNames = Array.from(
    new Set([inactiveName].filter(Boolean))
  );

  const activeNamesList =
    uniqueActiveNames.length > 0
      ? uniqueActiveNames.map((name, index) => (
          <React.Fragment key={`active-${index}`}>
            {name}
            {index < uniqueActiveNames.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

  const inactiveNamesList =
    uniqueInactiveNames.length > 0
      ? uniqueInactiveNames.map((name, index) => (
          <React.Fragment key={`inactive-${index}`}>
            {name}
            {index < uniqueInactiveNames.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

  const activeCountry = userActiveProfile.country;
  const inactiveCountry = userInActiveProfile.country;

  const uniqueActiveCountries = Array.from(
    new Set([activeCountry].filter(Boolean))
  );
  const uniqueInactiveCountries = Array.from(
    new Set([inactiveCountry].filter(Boolean))
  );
  const activeCountriesList =
    uniqueActiveCountries.length > 0
      ? uniqueActiveCountries.map((country, index) => (
          <React.Fragment key={`active-${index}`}>
            {country}
            {index < uniqueActiveCountries.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

  const inactiveCountriesList =
    uniqueInactiveCountries.length > 0
      ? uniqueInactiveCountries.map((country, index) => (
          <React.Fragment key={`inactive-${index}`}>
            {country}
            {index < uniqueInactiveCountries.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

  const activePhoneNumber = userActiveProfile.phoneNumber;
  const inactivePhoneNumber = userInActiveProfile.phoneNumber;

  const uniqueActivePhoneNumbers = Array.from(
    new Set([activePhoneNumber].filter(Boolean))
  );
  const uniqueInactivePhoneNumbers = Array.from(
    new Set([inactivePhoneNumber].filter(Boolean))
  );

  const activePhoneNumbersList =
    uniqueActivePhoneNumbers.length > 0
      ? uniqueActivePhoneNumbers.map((phoneNumber, index) => (
          <React.Fragment key={`active-${index}`}>
            {phoneNumber}
            {index < uniqueActivePhoneNumbers.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

  const inactivePhoneNumbersList =
    uniqueInactivePhoneNumbers.length > 0
      ? uniqueInactivePhoneNumbers.map((phoneNumber, index) => (
          <React.Fragment key={`inactive-${index}`}>
            {phoneNumber}
            {index < uniqueInactivePhoneNumbers.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

  const activeEmail = userActiveProfile.email;
  const inactiveEmail = userInActiveProfile.email;

  const uniqueActiveEmails = Array.from(new Set([activeEmail].filter(Boolean)));
  const uniqueInactiveEmails = Array.from(
    new Set([inactiveEmail].filter(Boolean))
  );

  const activeEmailsList =
    uniqueActiveEmails.length > 0
      ? uniqueActiveEmails.map((email, index) => (
          <React.Fragment key={`active-${index}`}>
            {email}
            {index < uniqueActiveEmails.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

  const inactiveEmailsList =
    uniqueInactiveEmails.length > 0
      ? uniqueInactiveEmails.map((email, index) => (
          <React.Fragment key={`inactive-${index}`}>
            {email}
            {index < uniqueInactiveEmails.length - 1 && <br />}
          </React.Fragment>
        ))
      : "N/A";

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
      {isLoading && (showActive ? <GreenLoader /> : <OrangeLoader />)}

      <div className="flex flex-row justify-between gap-2">
        {showActive ? (
          <div className="searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-profile-active-bg-1-color)] rounded-[100px] ">
          <input
            type="text"
            placeholder="Search for charities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color-white)] bg-transparent outline-none"
          />
          <div className="w-[72px] h-full rounded-[20px] bg-[var(--searchbar-profile-active-bg-2-color)] flex justify-center items-center cursor-pointer">
            <img
              src={theme === "dark" ? search_dark : search_light}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>
        ) : (
          <div className="searchBar lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[var(--searchbar-profile-inactive-bg-1-color)] rounded-[100px]">
          <input
            type="text"
            placeholder="Search for charities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[var(--text-color)] bg-transparent outline-none"
          />
          <div className="w-[72px] h-full rounded-[20px] bg-[var(--searchbar-profile-inactive-bg-2-color)] flex justify-center items-center cursor-pointer">
            <img
              src={theme === "dark" ? search_dark : search_light}
              alt="search"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>
        )
      }

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
            styles={address ? "bg-[#ed732d]" : "bg-[#eda479]"}
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      </div>

      <div className="profile-bar mt-[60px] bg-[var(--profile-bg-color)] rounded-[20px] shadow-lg p-8  mx-auto flex flex-col gap-6 mb-10">
        {" "}
        <div className="profile-responsive flex items-center mb-6 gap-5">
          <div className="box-profile w-[100px] h-[100px] rounded-[20px] bg-[var(--background-color)] flex items-center justify-center mr-6 p-2">
            <img
              src={
                showActive ? profile_picture_active : profile_picture_inactive
              }
              alt="Profile Photo"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <div className="text-[var(--text-color-white)] w-full mt-5">
            <div className="flex flex-wrap text-lg mb-4 justify-between">
              <div className="flex flex-col mb-1">
                <div>
                  <img
                    src={showActive ? name_icon_active : name_icon_inactive}
                    alt="name_icon"
                    className="icons cursor-pointer"
                  />
                  <h1
                    className={`profile-button responsive-text mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#37BB9E]"
                        : "hover:text-[#ed732d]"
                    } `}
                  >
                    <div>
                      {showActive && <div>{activeNamesList}</div>}
                      {!showActive && <div>{inactiveNamesList}</div>}
                    </div>
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
                    className={`profile-button charitydetails-text-2 mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#37BB9E]"
                        : "hover:text-[#ed732d]"
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
                    className={`profile-button responsive-text mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#37BB9E]"
                        : "hover:text-[#ed732d]"
                    }`}
                  >
                    <div>
                      {showActive && <div>{activeCountriesList}</div>}
                      {!showActive && <div>{inactiveCountriesList}</div>}
                    </div>
                  </p>
                </div>
              </div>

              <div className="flex flex-col mb-1 mt-5">
                <div>
                  <img
                    src={showActive ? phone_icon_active : phone_icon_inactive}
                    alt="phone_icon"
                    className="icons cursor-pointer"
                  />

                  <p
                    className={`profile-button responsive-text mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#37BB9E]"
                        : "hover:text-[#ed732d]"
                    }`}
                  >
                    <div>
                      {showActive && <div>{activePhoneNumbersList}</div>}
                      {!showActive && <div>{inactivePhoneNumbersList}</div>}
                    </div>
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
                    className={`profile-button responsive-text underline mb-1 cursor-pointer ${
                      showActive
                        ? "hover:text-[#37BB9E]"
                        : "hover:text-[#ed732d]"
                    }`}
                  >
                    <div>
                      {showActive && <div>{activeEmailsList}</div>}
                      {!showActive && <div>{inactiveEmailsList}</div>}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[30px]">
          <div
            onClick={() => setShowActive(true)}
            className="box-profile bg-[var(--background-color)] p-4 w-[130px] rounded-[10px] mt-10 flex text-lg text-[var(--text-color)] flex justify-center items-center cursor-pointer"
          >
            <div className="profile-button flex flex-col ">
              <span className="profile-button responsive-text font-bold text-[var(--text-color-profile-active)] cursor-pointer">
                Active:
              </span>
              <span className="profile-button responsive-text font-bold flex justify-center items-center cursor-pointer text-[var(--text-color-profile-active)]">
                {activeCharities.length}
              </span>
            </div>
          </div>
          <div
            onClick={() => setShowActive(false)}
            className="box-profile bg-[var(--background-color)] p-4 w-[130px] rounded-[10px] mt-10 flex text-lg text-[var(--text-color)] flex justify-center items-center cursor-pointer"
          >
            <div className="profile-button flex flex-col">
              <span className="profile-button responsive-text font-semibold cursor-pointer text-[#ed732d]">
                InActive:
              </span>
              <span className="profile-button responsive-text font-semibold flex justify-center items-center cursor-pointer text-[#ed732d]">
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
          color="bg-[#0c3d32]"
        />

        <ToggleButton
          active={!showActive}
          onClick={() => setShowActive(false)}
          label="InActive"
          color="bg-[#ed732d]"
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
          title={
            address
              ? isSmallScreen
                ? "Disconnect"
                : "Disconnect wallet"
              : isSmallScreen
              ? "Connect"
              : "Connect wallet"
          }
          styles={address ? "bg-[#ed732d] px-6 py-3" : "bg-[#eda479] px-6 py-3"}
          handleClick={() => {
            if (address) disconnect();
            else connect();
          }}
        />
      </div>

      <div className="flex justify-center flex-col items-center h-full mt-[5px] text-[var(--text-color-white)]">
        <h1 className="responsive-text text-[20px] text-bold">
          Please connect the wallet to view your profile.
        </h1>
      </div>
    </div>
  );
}
