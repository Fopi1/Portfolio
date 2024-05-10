import React from "react";
import "./BindsLogo.css";

const BindsLogo = ({ children }) => {
  return (
    <div className="logo-firstLayer">
      <div className="logo-secondLayer">{children}</div>
    </div>
  );
};

export default BindsLogo;
