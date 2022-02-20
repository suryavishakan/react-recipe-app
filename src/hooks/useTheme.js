import { useContext } from "react";
// context provider
import { ThemeContext } from "./../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "Context is used out of scope of the parent. useTheme() must be used inside the ThemeProvider"
    );
  }
  return context;
};
