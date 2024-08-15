import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButtom, FormField, BlueLoader } from "../components";
import {
  checkIfImage,
  validatePhoneNumber,
  countryOptions,
  categoryOptions,
} from "../utils";

import Swal from "sweetalert2";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign, address, connect, disconnect } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
    category: "",
    phoneNumber: "",
    email: "",
    country: "",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  function handleFormFieldChange(fieldName, event) {
    setForm({
      ...form,
      [fieldName]: event.target ? event.target.value : event.value,
    });
  }

  function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(
      /^(\+?[1-9]\d{0,2})\s?(\d{1,2})\s?(\d{3})\s?(\d{3})$/,
      "$1 $2 $3 $4"
    );
  }

  function handlePhoneNumberChange(event) {
    const formattedNumber = formatPhoneNumber(event.target.value);
    handleFormFieldChange("phoneNumber", {
      target: { value: formattedNumber },
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (form.target <= 0) {
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
      setForm({ ...form, target: "" });
      return;
    }

    if (!validatePhoneNumber(form.phoneNumber)) {
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
      setForm({ ...form, phoneNumber: "" });
      return;
    }

    checkIfImage(form.image, async (exists) => {
      if (!exists) {
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
        setForm({ ...form, image: "" });
        return;
      }
    });

    const response = await createCampaign({
      ...form,
      target: ethers.utils.parseUnits(form.target, 18),
    });
    if (response) {
      setIsLoading(true);
      Swal.fire({
        title: "Charity successfully created!",
        text: "",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-success",
          title: "custom-swal-title-success",
          confirmButton: "custom-swal-confirm-button-success",
        },
      });
      setIsLoading(false);
      navigate("/ViewActiveCharity");
    } else {
      Swal.fire({
        title: "Can't create charity",
        text: "",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title-error",
          confirmButton: "custom-swal-confirm-button-error",
        },
      });
    }
  }

  return address ? (
    <div className="bg-[var(--createcharity-bg-color)] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <BlueLoader />}
      <div className="flex justify-center mb-[10px]">
        <CustomButtom
          btnType="button"
          title={address ? "Disconnect the wallet" : "Connect to Wallet"}
          styles={address ? "bg-[#e74c3c] px-6 " : "bg-[#3498db] px-6 "}
          handleClick={() => {
            if (address) disconnect();
            else connect();
          }}
        />
      </div>
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3498db] rounded-[10px] mt-[5px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-[var(--text-color)]">
          Create a Charity
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Name *"
            placeholder="Write Your Name"
            inputType="text"
            value={form.name}
            handleChange={(event) => {
              handleFormFieldChange("name", event);
            }}
          />

          <FormField
            labelName="Phone number *"
            placeholder="Write your phone number"
            inputType="text"
            value={form.phoneNumber}
            handleChange={handlePhoneNumberChange}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Email *"
            placeholder="Write your Email"
            inputType="email"
            value={form.email}
            handleChange={(event) => {
              handleFormFieldChange("email", event);
            }}
          />

          <FormField
            labelName="Country *"
            placeholder="Select your Country"
            isSelect
            options={countryOptions}
            value={form.country}
            handleChange={(event) => {
              handleFormFieldChange("country", event);
            }}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Charity title *"
            placeholder="Write a Title"
            inputType="text"
            value={form.title}
            handleChange={(event) => {
              handleFormFieldChange("title", event);
            }}
          />

          <FormField
            labelName="Category *"
            placeholder="Select a Category"
            isSelect
            options={categoryOptions}
            value={form.category}
            handleChange={(event) => {
              handleFormFieldChange("category", event);
            }}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write Your Story"
          isTextArea
          value={form.description}
          handleChange={(event) => {
            handleFormFieldChange("description", event);
          }}
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#3498db] h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain "
          />
          <h4 className="font-epilogue font-bold text-[25px] text-[var(--text-color)] ml-[20px] ">
            You Will get 100% of the donated amount
          </h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="number"
            value={form.target}
            handleChange={(event) => {
              handleFormFieldChange("target", event);
            }}
          />

          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(event) => {
              handleFormFieldChange("deadline", event);
            }}
            min={minDate}
          />
        </div>

        <FormField
          labelName="Charity Image *"
          placeholder="Place a picture for your Charity"
          inputType="url"
          value={form.image}
          handleChange={(event) => {
            handleFormFieldChange("image", event);
          }}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButtom
            btnType="submit"
            title="Submit New Charity"
            styles="bg-[#3498db]"
          />
        </div>
      </form>
    </div>
  ) : (
    <div className="bg-[var(--createcharity-bg-color)] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center mb-[10px]">
        <CustomButtom
          btnType="button"
          title={address ? "Disconnect the wallet" : "Connect to Wallet"}
          styles={address ? "bg-[#e74c3c] px-6 py-3" : "bg-[#3498db] px-6 py-3"}
          handleClick={() => {
            if (address) disconnect();
            else connect();
          }}
        />
      </div>

      <div className="flex justify-center flex-col items-center h-full mt-[5px] text-[var(--text-color)]">
        <h1 className="text-[20px] text-bold ">
          Please connect wallet in order to add charity
        </h1>
      </div>
    </div>
  );
}
