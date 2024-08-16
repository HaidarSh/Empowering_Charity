import React from "react";

export default function CountBoxActiveInActive({ title, value }) {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="count-box font-epilogue font-bold text-[30px] text-[var(--text-color)] p-3 bg-[#e74c3c] rounded-t-[10px] w-full text-center truncate">
        {value}
      </h4>
      <p className="count-box font-epilogue font-normal text-[16px] text-[var(--text-color)] bg-[var(--countbox-active-color)] px-3 py-2 w-full rounded-b-[10px] text-center">
        {title}
      </p>
    </div>
  );
}
