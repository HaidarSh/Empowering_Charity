import React from "react";
import { useTheme } from "../ThemeContext";
import { sun, moon } from "../assets";

export default function ThemeToggleIcon() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="cursor-pointer p-2">
      {theme === "light" ? (
        <img src={moon} className="w-6 h-6" />
      ) : (
        <img src={sun} className="w-6 h-6" />
      )}
    </div>
  );
}
