import React from "react";

export default function CharityPhotosStyleThree({ imageSRC }) {
  return (
    <div className="box sm:w-[370px] sm:h-[250px] w-full h-auto rounded-[20px] cursor-pointer">
      <img
        src={imageSRC}
        alt="Charity"
        className="w-full h-full object-fit rounded-[20px]"
      />
    </div>
  );
}
