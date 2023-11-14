import React from "react";
import "./Modal.css";

const Modal = ({ children, visible, setVisible }) => {
  return (
    <div
      onClick={() => setVisible(false)}
      className={`modal ${visible ? "active" : null}`}
    >
      {children}
    </div>
  );
};

export default Modal;
