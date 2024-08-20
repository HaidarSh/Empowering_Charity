import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { sun, moon } from "../../assets";

export default function ThemeToggleIcon() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="themetoggleicon cursor-pointer p-2"
    >
      {isHovered ? (
        theme === "light" ? (
          <img src={moon} className="w-6 h-6" />
        ) : (
          <img src={sun} className="w-6 h-6" />
        )
      ) : theme === "light" ? (
        <img src={sun} className="w-6 h-6" />
      ) : (
        <img src={moon} className="w-6 h-6" />
      )}
    </div>
  );
}
