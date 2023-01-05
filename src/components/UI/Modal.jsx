import React from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "../../context/context";

const Backdrop = () => {
  const { closeModal } = useGlobalContext();
  return (
    <div
      className="fixed w-full z-[50] h-screen bg-background dark:bg-backgroundDark2 -mt-20"
      onClick={closeModal}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`fixed z-[50] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${props.className}`}
    >
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
