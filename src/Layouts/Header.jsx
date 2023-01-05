import React from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import logo from "../assets/olixpin.svg";
import logoWhite from "../assets/olixpin-white.svg";
import { Link } from "react-router-dom";
import Hamburger from "../components/UI/Hamburger";
import Theme from "../components/UI/Theme";
import { useGlobalContext } from "../context/context";
import Modal from "../components/UI/Modal";
import Menus from "../components/UI/Menus";

const Header = () => {
  const { theme, isModalOpen } = useGlobalContext();
  return (
    <header className="dark:bg-backgroundDark2">
      <ComponentLayoutSize>
        <div className="py-5 flex justify-between items-center ">
          <Link to="/">
            {" "}
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
          <div className="flex gap-4">
            <Theme />
            <Hamburger />
          </div>
        </div>
        {isModalOpen && (
          <Modal>
            <div className="p-5 rounded-md ">
              <Menus />
            </div>
          </Modal>
        )}
      </ComponentLayoutSize>
    </header>
  );
};

export default Header;
