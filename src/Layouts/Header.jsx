import React, { useState } from "react";
import logo from "../assets/olixpin.svg";
import logoWhite from "../assets/olixpin-white.svg";
import { Link } from "react-router-dom";
import Hamburger from "../components/UI/Hamburger";
import Theme from "../components/UI/Theme";
import { useGlobalContext } from "../context/context";
import Modal from "../components/UI/Modal";
import Menus from "../components/UI/Menus";
import SocialMedia from "../components/UI/SocialMedia";

const Header = () => {
  const { theme, isModalOpen, scrollHeight, open, setOpen, handleOpen } =
    useGlobalContext();

  return (
    <header
      className={`sticky top-0 px-5 z-[100] ${
        scrollHeight > 50 && !open
          ? "bg-background dark:bg-backgroundDark2"
          : "bg-transparent"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="py-5 flex justify-between items-center ">
        <Link
          to="/#home"
          onClick={() => {
            closeModal();
            setOpen(!open);
            handleOpen();
          }}
        >
          {theme === "dark" ? (
            <img
              src={logo}
              alt="
                Olixpin"
              className="w-20"
            />
          ) : (
            <img src={logoWhite} alt="Olixpin" className="w-20" />
          )}
        </Link>
        <div className="flex gap-4 z-[70]">
          <Theme open={open} />
          <Hamburger open={open} handleOpen={handleOpen} />
        </div>
      </div>

      {isModalOpen && (
        <Modal>
          <div className="p-5 rounded-md flex flex-col items-start">
            <Menus />
          </div>
          <div
            id="social-media"
            className="flex gap-4 items-center justify-start mt-2 p-5 text-xl text-gray-500 dark:text-gray-300 dark:border-gray-700 text-backgroundDark2 dark:text-white"
          >
            <code className="font-medium max-[425px]:hidden">
              Social Media:
            </code>
            <SocialMedia />
          </div>
        </Modal>
      )}
    </header>
  );
};

export default Header;
