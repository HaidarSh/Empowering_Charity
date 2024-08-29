import React from "react";

export default function CountBoxActiveInActive({ title, value }) {
  return (
    <div className="countbox-custom flex flex-col items-center w-[150px]">
      <h4 className="custom-buttom font-epilogue charitydetails-text-3 font-bold text-[30px] text-[var(--custombuttom-text-color)] p-3 bg-[var(--countbox-inactive-1-color)] rounded-t-[10px] w-full text-center truncate cursor-pointer">
        {value}
      </h4>
      <p className="custom-buttom font-epilogue charitydetails-text-3 font-normal text-[16px] text-[var(--custombuttom-text-color)] bg-[var(--countbox-inactive-2-color)] px-3 py-2 w-full rounded-b-[10px] text-center cursor-pointer">
        {title}
      </p>
    </div>
  );
}
