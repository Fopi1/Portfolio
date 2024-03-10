import React from "react";
import Logo from "../Logo/Logo";
import "./ChronoMain.css";
import Fog from "../Fog/Fog";

const ChronoMain = () => {
  return (
    <>
      <div className="container">
        <Fog />
        <div className="container__inner">
          <div className="logo__inner">
            <Logo />
          </div>
          <span className="logoText">ChronoTech</span>
        </div>
      </div>
    </>
  );
};

export default ChronoMain;
