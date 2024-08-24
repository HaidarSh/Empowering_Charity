import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import Select from "react-select";
import { useStateContext } from "../../context";
import { useTheme } from "../../components/HelperComponents/ThemeContext";
import { CustomButtom, CountBoxActive, BlueLoader } from "../../components";
import {
  countryOptions,
  categoryOptions,
  checkIfImage,
  validatePhoneNumber,
} from "../../utils";
import { calculateBarPercentage, daysLeft } from "../../utils";
import {
  thirdweb,
  profile_picture_active,
  location_icon_active,
  name_icon_active,
  email_icon_active,
  phone_icon_active,
} from "../../assets";

import Swal from "sweetalert2";

export default function ActiveCharityDetails() {
  const {
    donate,
    getDonations,
    contract,
    address,
    connect,
    disconnect,
    removeCharity,
    editCharity,
    getUserActiveCharities,
    getUserInActiveCharities,
  } = useStateContext();

  const { theme } = useTheme();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1a1a2e" : "#afafaf",
      borderColor: "#3a3a43",
      color: theme === "dark" ? "#ffffff" : "#000000",
      minHeight: "56px",
      borderRadius: "10px",
      paddingLeft: "10px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#3a3a43",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1a1a2e" : "#afafaf",
      color: theme === "dark" ? "#ffffff" : "#000000",
      borderRadius: "10px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#4b6264",
      paddingLeft: "10px",
    }),
    input: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
      paddingLeft: "10px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#4b5264" : "#888888",
    }),
    indicatorSeparator: (provided) => ({
      display: "none",
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? theme === "dark"
          ? "#3498db"
          : "#cccccc"
        : state.isFocused
        ? theme === "dark"
          ? "#1a1a2e"
          : "#afafaf"
        : theme === "dark"
        ? "#1a1a2e"
        : "#afafaf",
      color: theme === "dark" ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: theme === "dark" ? "#3498db" : "#cccccc",
        color: theme === "dark" ? "#ffffff" : "#000000",
      },
    }),
  };

  const { state } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const [collectedAmount, setCollectedAmount] = useState(state.amountCollected);
  const [activeCharities, setActiveCharities] = useState([]);
  const [inActiveCharities, setInActiveCharities] = useState([]);
  const [minDate, setMinDate] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [isEditMode, setIsEditMode] = useState(false);
  const [charityDetails, setCharityDetails] = useState({
    ...state,
  });
  const [editedCharity, setEditedCharity] = useState({
    name: state.name,
    title: state.title,
    description: state.description,
    target: state.target,
    image: state.image,
    category: state.category,
    phoneNumber: state.phoneNumber,
    email: state.email,
    country: state.country,
  });
  const [charityUpdated, setCharityUpdated] = useState(false);

  const remainingDays = daysLeft(state.deadline);

  async function fetchDonators() {
    const data = await getDonations(state.pId);
    setDonators(data);
  }

  async function fetchActiveCharities() {
    setIsLoading(true);
    const data = await getUserActiveCharities(state.owner);
    setActiveCharities(data);
    setIsLoading(false);
  }

  async function fetchInActiveCharities() {
    setIsLoading(true);
    const data = await getUserInActiveCharities(state.owner);
    setInActiveCharities(data);
    setIsLoading(false);
  }

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (contract) {
      fetchDonators();
      fetchActiveCharities();
      fetchInActiveCharities();
    }
  }, [address, contract]);

  useEffect(() => {
    if (charityUpdated) {
      setCharityDetails((prevDetails) => ({
        ...prevDetails,
        ...editedCharity,
      }));
      setCharityUpdated(false);
    }
  }, [charityUpdated, editedCharity]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  async function handleDonate() {
    const parsedAmount = parseFloat(amount);

    if (parsedAmount <= 0) {
      Swal.fire({
        title: "Incorrect donation amount",
        text: "Please enter a positive number",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
      return;
    }

    if (isNaN(parsedAmount)) {
      Swal.fire({
        title: "No value entered",
        text: "Please enter a number to donate",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await donate(state.pId, amount);

      if (response) {
        Swal.fire({
          title: "Donated successfully!",
          text: "",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success",
          },
        }).then(async () => {
          const newCollectedAmount = parseFloat(collectedAmount) + parsedAmount;
          setCollectedAmount(newCollectedAmount);

          try {
            await fetchDonators();

            if (newCollectedAmount >= editedCharity.target) {
              Swal.fire({
                title:
                  "Charity is now inactive as the target amount has been reached.",
                text: "Charity Removed to the inactive page",
                icon: "warning",
                confirmButtonText: "OK",
                customClass: {
                  popup: "custom-swal-popup-warning",
                  title: "custom-swal-title-warning",
                  confirmButton: "custom-swal-confirm-button-warning",
                },
              }).then(() => {
                navigate("/View_Active_Charity");
              });
            }
          } catch (error) {
            console.error("Error during donation:", error);
            Swal.fire({
              title: "An error occurred during donation",
              text: "",
              icon: "error",
              confirmButtonText: "OK",
              customClass: {
                popup: "custom-swal-popup-error",
                title: "custom-swal-title-error",
                confirmButton: "custom-swal-confirm-button-error",
              },
            });
          } finally {
            setIsLoading(false);
          }

          setAmount("");
        });
      }
    } catch (error) {
      console.error("Error during donation:", error);
      Swal.fire({
        title: "An error occurred during donation",
        text: "",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete() {
    try {
      setIsLoading(true);
      const response = await removeCharity(state.pId);
      if (response) {
        console.log("Deletion successful");
        navigate("/View_Active_Charity");
        Swal.fire({
          title: "Charity successfully deleted!",
          text: "",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success",
          },
        });
      } else {
        console.log("Deletion failed, response.success is false");
        throw new Error("Deletion failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      Swal.fire({
        title: "Charity deletion rejected.",
        text: "",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleInputChange(event) {
    const value = event.target.value;
    if (parseFloat(value) > 0 || value === "") {
      setAmount(value);
    } else {
      setAmount(value);
    }
  }

  function handleEdit() {
    setIsEditMode(true);
  }

  async function handleSaveEdit(event) {
    event.preventDefault();

    setIsLoading(true);
    try {
      if (editedCharity.target <= 0) {
        Swal.fire({
          title: "Wrong target value",
          text: "Provide a positive Number!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error",
          },
        });
        setEditedCharity({ ...editedCharity, target: "" });
        return;
      }

      if (!validatePhoneNumber(editedCharity.phoneNumber)) {
        Swal.fire({
          title: "Wrong phone number",
          text: "Provide a valid phone number!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error",
          },
        });
        setEditedCharity({ ...editedCharity, phoneNumber: "" });
        return;
      }

      const imageExists = await new Promise((resolve) => {
        checkIfImage(editedCharity.image, resolve);
      });

      if (!imageExists) {
        Swal.fire({
          title: "Wrong image url",
          text: "Provide a correct image url!",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error",
          },
        });
        setEditedCharity({ ...editedCharity, image: "" });
        return;
      }

      const response = await editCharity(state.pId, {
        ...editedCharity,
        target: ethers.utils.parseUnits(editedCharity.target, 18),
      });

      if (response) {
        Swal.fire({
          title: "Charity updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-success",
            title: "custom-swal-title-success",
            confirmButton: "custom-swal-confirm-button-success",
          },
        }).then(() => {
          if (editedCharity.target <= collectedAmount) {
            Swal.fire({
              title:
                "Charity is now inactive as the target amount has been reached.",
              text: "Charity Removed to the inactive page",
              icon: "warning",
              confirmButtonText: "OK",
              customClass: {
                popup: "custom-swal-popup-warning",
                title: "custom-swal-title-warning",
                confirmButton: "custom-swal-confirm-button-warning",
              },
            }).then(() => {
              navigate("/View_Active_Charity");
            });
          }
        });

        setIsEditMode(false);
        setCharityUpdated(true);
      } else {
        Swal.fire({
          title: "Failed to update charity",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-swal-popup-error",
            title: "custom-swal-title-error",
            confirmButton: "custom-swal-confirm-button-error",
          },
        });
      }
    } catch (error) {
      Swal.fire({
        title: "You didn't change any field",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(
      /^(\+?[1-9]\d{0,2})\s?(\d{1,2})\s?(\d{3})\s?(\d{3})$/,
      "$1 $2 $3 $4"
    );
  }

  function handlePhoneNumberChange(event) {
    const formattedNumber = formatPhoneNumber(event.target.value);
    handleEditInputChange("phoneNumber", formattedNumber);
  }

  function handleEditInputChange(fieldName, value) {
    setEditedCharity((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  }

  return (
    <div>
      {isLoading && <BlueLoader />}
      {address && (
        <div className="flex flex-col justify-center items-center px-50">
          <CustomButtom
            btnType="button"
            title={
              address
                ? isSmallScreen
                  ? "Disconnect"
                  : "Disconnect wallet"
                : ""
            }
            styles={
              address
                ? "bg-[#e74c3c] px-6 py-2 h-[40px] flex justify-center items-center"
                : ""
            }
            handleClick={() => {
              if (address) disconnect();
              else connect();
            }}
          />
        </div>
      )}
      <div className="w-full image-custom-2 flex md:flex-row  flex-col mt-10 gap-[30px]">
        <div className="flex-1">
          <img
            src={charityDetails.image}
            alt="charity"
            className="custom-buttom image-custom w-full h-[410px] object-cover rounded-xl cursor-pointer"
          />

          <div className="cursor-pointer custom-buttom relative w-full h-[7px] bg-[var(--targetloading-bg-color)] mt-2 rounded-[20px]">
            <div
              className="absolute h-full bg-[#338AF0] rounded-[20px]"
              style={{
                width: `${calculateBarPercentage(
                  charityDetails.target,
                  collectedAmount
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBoxActive title="Days Left" value={remainingDays + 1} />
          <CountBoxActive
            title={`Raised of ${charityDetails.target} ETH`}
            value={collectedAmount}
          />
          <CountBoxActive title="Total Donators" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[1.5] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
              Creator
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="icons-charitydetails w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user"
                  className="icons w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="charitydetails-text-nb charitydetails-text-2 font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                  {charityDetails.owner}
                </h4>
                <div className="flex flex-row justify-between">
                  <p className="charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[10px] text-[var(--text-color)] cursor-pointer hover:text-[#338AF0] ">
                    {activeCharities.length} Active{" "}
                    {activeCharities.length === 1 ? "Charity" : "Charities"}
                  </p>
                  <p className="charitydetails-text-nb charitydetails-text-2 mt-[4px] font-epilogue font-normal text-[10px] text-[var(--text-color)] cursor-pointer hover:text-[#e74c3c]">
                    {inActiveCharities.length} InActive{" "}
                    {inActiveCharities.length === 1 ? "Charity" : "Charities"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
          <div className="icons-charitydetails w-[55px] h-[52px] flex items-center justify-center rounded-full bg-[var(--targetloading-bg-color)] cursor-pointer">
              <img
                src={profile_picture_active}
                alt="profile_picture_active"
                className="icons w-3/4 h-3/4 object-contain"
              />
            </div>

            <div className="text-[var(--text-color)] w-full mt-5">
              <div className="flex flex-wrap text-lg mb-4 justify-between">
                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={name_icon_active}
                      alt="name_icon_active"
                      className="icons cursor-pointer"
                    />
                    <h1 className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                      {charityDetails.name}
                    </h1>
                  </div>
                  <br />
                  <div>
                    <img
                      src={location_icon_active}
                      alt="location_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                      {charityDetails.country}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mb-1">
                  <div>
                    <img
                      src={phone_icon_active}
                      alt="phone_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all cursor-pointer hover:text-[#338AF0]">
                      {charityDetails.phoneNumber}
                    </p>
                  </div>
                  <br />
                  <div>
                    <img
                      src={email_icon_active}
                      alt="email_icon"
                      className="icons cursor-pointer"
                    />
                    <p className="charitydetails-text font-epilogue font-semibold text-[14px] text-[var(--text-color)] break-all underline cursor-pointer hover:text-[#338AF0]">
                      {charityDetails.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
              Title
            </h4>
            <div className="mt-[20px]">
              <h1 className=" font-epilogue text-[var(--text-color)] leading-[26px] text-justify">
                {charityDetails.title}
              </h1>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
              Story
            </h4>
            <div className="mt-[20px]">
              <p className="charitydetails-text-3 font-epilogue font-small text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
                {charityDetails.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase">
              Donators
            </h4>
            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donators}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="charitydetails-text-3 font-epilogue font-small text-[14px] text-[var(--text-color)] leading-[26px] break-all">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="charitydetails-text-3 font-epilogue font-small text-[14px] text-[var(--text-color)] leading-[26px] break-all">
                      {item.donation} ETH
                    </p>
                  </div>
                ))
              ) : (
                <p className="charitydetails-text-3 font-epilogue font-small text-[16px] text-[var(--text-color)] leading-[26px] text-justify">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>
        {address ? (
          <div className="flex-1">
            {address && (
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase mb-[10px]">
                  Donate charity
                </h4>
                <div className="custom-buttom  flex flex-col p-4 bg-[var(--donatetocharity1-bg-color)] rounded-[10px]">
                  <p className="charitydetails-text-3 font-epilogue font-semibold text-[20px] leading-[30px] text-center text-[var(--text-color)]">
                    Pledge without reward
                  </p>
                  <div className="mt-[30px]">
                    <input
                      type="number"
                      placeholder="ETH 0.5"
                      step="0.1"
                      className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--text-color)] text-[18px] leading-[30px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                      value={amount}
                      onChange={handleInputChange}
                    />

                    <div className="custom-buttom custom-buttom my-[20px] p-4 bg-[var(--donatetocharity2-bg-color)] rounded-[10px]">
                      <h4 className="charitydetails-text-3 font-epilogue font-bold text-[14px] leading-[22px] text-[var(--text-color)]">
                        Back it because you believe in it.
                      </h4>
                      <p className="charitydetails-text-3 mt-[20px] font-epilogue font-normal leading-[22px] text-[var(--text-color)]">
                        Support the project for no reward, just because it
                        speaks to you.
                      </p>
                    </div>

                    <CustomButtom
                      btnType="button"
                      title="Fund"
                      styles="w-full bg-[#3498db]"
                      handleClick={handleDonate}
                    />
                  </div>
                </div>
              </div>
            )}
            {address === charityDetails.owner && (
              <div className="py-4">
                <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase mb-[10px]">
                  Deactivate Charity
                </h4>
                <div>
                  <CustomButtom
                    btnType="button"
                    title="Deactivate"
                    styles="w-full bg-[#FF8C00]"
                    handleClick={handleDelete}
                  />
                </div>

                <h4 className="font-epilogue font-semibold text-[18px] text-[var(--text-color)] uppercase mb-[10px] pt-4">
                  Edit Charity
                </h4>
                <div className="">
                  <CustomButtom
                    btnType="button"
                    title="Edit"
                    styles="w-full bg-[#3498db]"
                    handleClick={handleEdit}
                  />
                </div>
              </div>
            )}

            {isEditMode && (
              <div className="bg-[var(--profile-bg-color)] p-8 rounded-[20px] ">
                <form
                  onSubmit={handleSaveEdit}
                  className="w-full  flex flex-col gap-[30px]"
                >
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Name *
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Update your name"
                          value={editedCharity.name}
                          onChange={(event) => {
                            handleEditInputChange("name", event.target.value);
                          }}
                          className="w-full py-[15px] px-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Phone number *
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          required
                          placeholder="Update your phone number"
                          value={editedCharity.phoneNumber}
                          onChange={handlePhoneNumberChange}
                          className="w-full py-[15px] px-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Email *
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Update your Email"
                          value={editedCharity.email}
                          onChange={(event) =>
                            handleEditInputChange("email", event.target.value)
                          }
                          className="w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Country *
                        <Select
                          id="country"
                          options={countryOptions}
                          required
                          value={countryOptions.find(
                            (option) => option.value === editedCharity.country
                          )}
                          onChange={(selectedOption) =>
                            handleEditInputChange(
                              "country",
                              selectedOption.value
                            )
                          }
                          placeholder="Update your Country"
                          styles={customStyles}
                          className="w-full outline-none border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Category *
                        <Select
                          id="category"
                          options={categoryOptions}
                          required
                          value={categoryOptions.find(
                            (option) => option.value === editedCharity.category
                          )}
                          onChange={(selectedOption) =>
                            handleEditInputChange(
                              "category",
                              selectedOption.value
                            )
                          }
                          placeholder="Update your Category"
                          styles={customStyles}
                          className="w-full outline-none border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Title *
                        <input
                          type="text"
                          id="title"
                          required
                          name="title"
                          placeholder="Update your title"
                          value={editedCharity.title}
                          onChange={(event) =>
                            handleEditInputChange("title", event.target.value)
                          }
                          className="w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Story *
                        <textarea
                          id="description"
                          name="description"
                          required
                          placeholder="Update Your Story"
                          value={editedCharity.description}
                          rows={10}
                          onChange={(event) =>
                            handleEditInputChange(
                              "description",
                              event.target.value
                            )
                          }
                          className="w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Target *
                        <input
                          id="goal-input"
                          type="number"
                          placeholder="ETH 0.5"
                          required
                          value={editedCharity.target}
                          onChange={(event) =>
                            handleEditInputChange("target", event.target.value)
                          }
                          step={0.1}
                          className="w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <label className="w-full font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)]">
                        Image *
                        <input
                          type="text"
                          id="image"
                          name="Image *"
                          placeholder="Update charity image"
                          required
                          value={editedCharity.image}
                          onChange={(event) =>
                            handleEditInputChange("image", event.target.value)
                          }
                          className="w-full py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px]"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-5">
                    <CustomButtom
                      btnType="submit"
                      title="Save"
                      styles="bg-[#3498db]"
                    />

                    <CustomButtom
                      btnType="button"
                      title="Cancel"
                      handleClick={() => setIsEditMode(false)}
                      styles="bg-[#e74c3c]"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : (
          <div className="custom-buttom bg-[var(--profile-bg-color)] flex-1 justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 max-h-300px">
            <h4 className="responsive-text font-epilogue font-semibold text-[18px] text-[var(--text-color)] my-10">
              Please connect your wallet to delete or donate to this charity.
            </h4>
            <div className="flex flex-col justify-between">
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
                styles={address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db]"}
                handleClick={() => {
                  if (address) disconnect();
                  else connect();
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
