import React from "react";

export default function CharityPhotosStyle({ imageSRC }) {
  return (
    <div className="box sm:w-[370px] sm:h-[250px] w-full h-[270px] rounded-[20px] bg-[#34495e] cursor-pointer">
      <img
        src={imageSRC}
        alt="Charity"
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>
  );
}
