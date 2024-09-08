import React from "react";

export default function CharityPhotosStylethree({ imageSRC }) {
  return (
    <div className="box sm:w-[370px] sm:h-[250px] w-full rounded-[20px]  cursor-pointer">
      <img
        src={imageSRC}
        alt="Charity"
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>
  );
}
