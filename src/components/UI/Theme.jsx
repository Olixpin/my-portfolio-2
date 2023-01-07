import React, { useState } from "react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useGlobalContext } from "../../context/context";

const Theme = ({ open }) => {
  const { theme, toggleTheme, screenWidth, openModal } = useGlobalContext();
  console.log(openModal);
  console.log(open);

  return (
    <div className="cursor-pointer flex items-center justify-center">
      {theme === "dark" ? (
        <LightModeOutlined
          onClick={toggleTheme}
          className={`
        ${
          open
            ? "text-primaryMain"
            : screenWidth > 800
            ? "text-white"
            : "text-primaryMain"
        }
        `}
        />
      ) : (
        <DarkModeOutlined onClick={toggleTheme} className="text-white" />
      )}
    </div>
  );
};

export default Theme;
