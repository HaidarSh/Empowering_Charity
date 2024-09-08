import React from "react";

export default function CharityPhotosStyleThree({ imageSRC }) {
  return (
    <div className="box sm:w-[370px] sm:h-[250px] h-auto max-w-full rounded-[20px] cursor-pointer">
      <img
        src={imageSRC}
        alt="Charity"
        className="w-full h-full object-fit rounded-[20px] max-h-full"
      />
    </div>
  );
}
