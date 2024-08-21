import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { project_logo, profile_active, profile_inactive } from "../../assets";
import { navlinks } from "../../constants";
import { ThemeToggleIcon } from "..";

const getUpdatedNavLinks = (showActive) => {
  return navlinks.map((link) => {
    if (link.name === "profile") {
      return {
        ...link,
        imgUrl: showActive ? profile_active : profile_inactive,
      };
    }
    return link;
  });
};

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`links w-[48px] h-[48px] rounded-[10px] ${
      isActive === name ? "bg-[var(--active-icon-bg-color)]" : ""
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      className={`w-1/2 h-1/2 ${isActive !== name ? "grayscale" : ""}`}
      alt={`${name}-icon`}
    />
  </div>
);

export default function DefaultSidebar({ showActive }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);

  useEffect(() => {
    const activeLink = getUpdatedNavLinks(showActive).find(
      (link) => link.link === location.pathname
    );
    if (activeLink) {
      setIsActive(activeLink.name);
    }
  }, [location.pathname, showActive]);

  const updatedNavlinks = getUpdatedNavLinks(showActive);

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[30px] gap-5">
      <div>
        <Icon
          styles="logo w-[52px] h-[52px] bg-[var(--icon-bg-color)] rounded-full"
          imgUrl={project_logo}
        />
      </div>
      <div className="sidebar flex-1 flex flex-col justify-between object-contain items-center bg-[var(--sidebar-bg-color)] rounded-[20px] w-[76px] py-4 mt-12 gap-6">
        <div className="flex flex-col justify-center items-center gap-6">
          {updatedNavlinks.map((link) => (
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
