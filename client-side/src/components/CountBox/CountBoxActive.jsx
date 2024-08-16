import React from "react";

export default function CountBoxActive({ title, value }) {
  return (
    <div className="flex flex-col items-center w-[150px] ">
      <h4 className="box font-epilogue font-bold text-[30px] text-[var(--custombuttom-text-color)] p-3 bg-darkBlue rounded-t-[10px] w-full text-center truncate cursor-pointer">
        {value}
      </h4>
      <p className="box font-epilogue font-normal text-[16px] text-[var(--custombuttom-text-color)] bg-[var(--countbox-active-color)] px-3 py-2 w-full rounded-b-[10px] text-center cursor-pointer">
        {title}
      </p>
    </div>
  );
}
