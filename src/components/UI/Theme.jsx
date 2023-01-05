import React from "react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useGlobalContext } from "../../context/context";

const Theme = () => {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <div className="cursor-pointer flex items-center justify-center">
      {theme === "dark" ? (
        <LightModeOutlined onClick={toggleTheme} className="text-primaryMain" />
      ) : (
        <DarkModeOutlined onClick={toggleTheme} className="text-white" />
      )}
    </div>
  );
};

export default Theme;
