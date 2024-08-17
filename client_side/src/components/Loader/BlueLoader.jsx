import React from "react";

import { BlueLoader } from "../../assets";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img
        src={BlueLoader}
        alt="loader"
        className="w-[100px] h-[100px] object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        Loading
        <br /> Please wait...
      </p>
    </div>
  );
}
