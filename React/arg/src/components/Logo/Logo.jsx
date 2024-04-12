import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logoContainer}>
      <div className={classes.logoContainerInner}>
        <div className={classes.logo}>
          <div className={classes.logoSmall}></div>
          <div className={classes.logoSmallBottom}></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
