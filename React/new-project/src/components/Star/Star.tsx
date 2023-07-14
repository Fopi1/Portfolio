import React from "react";
import "./Star.module.css";
import cl from "./Star.module.css";

const Star = (props: any) => {
  if (props.selected) {
    return <span className={`${cl.star} ${cl.active}`}></span>;
  } else {
    return <span className={cl.star}></span>;
  }
};

export default Star;
