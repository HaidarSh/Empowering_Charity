import React from "react";
import Select from "react-select";
import { useTheme } from "../ThemeContext";

export default function FormField(props) {
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
  return (
    <label className="flex-1 w-full flex flex-col ">
      {props.labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)] mb-[10px]">
          {props.labelName}
        </span>
      )}

      {props.isTextArea ? (
        <textarea
          required
          value={props.value}
          onChange={props.handleChange}
          rows={10}
          placeholder={props.placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px] sm:min-w-[300px]"
        />
      ) : props.isSelect ? (
        <Select
          options={props.options}
          value={props.options.find((option) => option.value === props.value)}
          onChange={(selectedOption) =>
            props.handleChange({ target: { value: selectedOption.value } })
          }
          styles={customStyles}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          required
          value={props.value}
          onChange={props.handleChange}
          type={props.inputType}
          step="0.1"
          min={props.min}
          placeholder={props.placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[var(--text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
}
