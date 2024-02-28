import React from "react";
import Logo from "../Logo/Logo";
import classes from "./ChronoMain.module.css";

const ChronoMain = () => {
  return (
    <div className={classes.container}>
      <div className={classes.smoke} />
      <Logo />
      <span className={classes.logoText}>ChronoTech</span>
    </div>
  );
};

export default ChronoMain;
