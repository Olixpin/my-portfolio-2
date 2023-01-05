import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const { openModal, closeModal, isModalOpen } = useGlobalContext();

  return (
    <div className={"relative"}>
      <button
        className="block w-10 h-10 focus:outline-none"
        onClick={() => {
          setOpen(!open);
          isModalOpen ? closeModal() : openModal();
        }}
      >
        <div
          className={`${
            open ? "rotate-45 transition-all" : "-mt-1.5 transition-all"
          } hamburger-line z-[60] transition-all`}
        ></div>
        <div
          className={`${
            open ? "-rotate-45 transition-all" : "mt-1.5 transition-all"
          } hamburger-line z-[60] transition-all`}
        ></div>
      </button>
    </div>
  );
};

export default Hamburger;
