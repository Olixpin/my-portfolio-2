import React from "react";
import { useGlobalContext } from "../../context/context";

const Hamburger = ({ handleOpen, open }) => {
  const { openModal, closeModal, isModalOpen, screenWidth } =
    useGlobalContext();

  return (
    <div className="relative">
      <button
        className="block w-10 h-10 focus:outline-none"
        onClick={() => {
          handleOpen();
          isModalOpen ? closeModal() : openModal();
        }}
      >
        <div
          className={`${
            open
              ? "rotate-45 transition-all"
              : screenWidth > 800
              ? "-mt-1.5 bg-white"
              : "-mt-1.5"
          } hamburger-line bg-primaryMain dark:bg-white z-[60] transition-all`}
        ></div>
        <div
          className={`${
            open
              ? "-rotate-45 transition-all"
              : screenWidth > 800
              ? "mt-1.5 bg-white"
              : "mt-1.5"
          } hamburger-line bg-primaryMain dark:bg-white z-[60] transition-all`}
        ></div>
      </button>
    </div>
  );
};

export default Hamburger;
