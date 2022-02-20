import React from "react";
//styles
import "./ThemeSelector.css";
// hooks
import { useTheme } from "../hooks/useTheme";
// icon
import lightMode from "../assets/lightmode.svg";
import darkMode from "../assets/darkmode.svg";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={mode === "dark" ? darkMode : lightMode}
          alt="mode toggle"
          onClick={toggleMode}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((theme) => (
          <div
            key={theme}
            onClick={() => changeColor(theme)}
            style={{ background: theme }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
