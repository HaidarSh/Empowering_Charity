import React from "react";

export default function CharityPhotosStyleSix({ imageSRC }) {
  return (
    <div className="box sm:w-[370px] sm:h-[250px] max-w-[90%] h-[230px] rounded-[20px] cursor-pointer">
      <img
        src={imageSRC}
        alt="Charity"
        className="w-full h-full object-fit rounded-[20px]"
      />
    </div>
  );
}
