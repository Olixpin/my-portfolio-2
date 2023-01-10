import React from "react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useGlobalContext } from "../../context/context";

const Theme = ({ open }) => {
  const { theme, toggleTheme, screenWidth, scrollHeight } = useGlobalContext();

  return (
    <>
      {scrollHeight > 100 ? (
        <div className="cursor-pointer flex items-center justify-center">
          {theme === "dark" ? (
            <LightModeOutlined
              onClick={toggleTheme}
              className={`
        ${
          open
            ? "text-primaryMain"
            : screenWidth > 800
            ? "text-primaryMain"
            : "text-primaryMain"
        }
        `}
            />
          ) : (
            <DarkModeOutlined onClick={toggleTheme} className="text-white" />
          )}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Theme;
