import React from "react";

export default function CustomButtom(props) {
  return (
    <button
      type={props.btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-[var(--text-color)] min-h-[52px] px-4 rounded-[10px] ${props.styles}`}
      onClick={props.handleClick}
     >
      {props.title}
    </button>
  );
}
