import React from "react";
import { useNavigate } from "react-router-dom";
import { project_logo } from "../assets";
import { navlinks } from "../constants";
import { ThemeToggleIcon } from ".";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[var(--active-icon-bg-color)]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      alt="fund-logo"
    />
  </div>
);

export default function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState("/");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[30px] gap-5">
      <div>
        <Icon
          styles="w-[52px] h-[52px] bg-[var(--icon-bg-color)] rounded-full"
          imgUrl={project_logo}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between items-center bg-[var(--sidebar-bg-color)] rounded-[20px] w-[76px] py-4 mt-12 gap-6">
        <div className="flex flex-col justify-center items-center gap-6">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <ThemeToggleIcon />
      </div>
    </div>
  );
}
