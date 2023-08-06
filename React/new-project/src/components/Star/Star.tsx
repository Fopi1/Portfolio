import React from "react";
import { useState } from "react";
import "./Star.module.css";
import cl from "./Star.module.css";

const Star = (props: any) => {
  return (
    <span
      {...props}
      className={`${cl.star}`}
      onClick={(event: any) => {
        let star: any = document
          .getElementById("stars")
          ?.querySelectorAll("span");
        let starId = event.currentTarget.dataset.itemid;
        for (let i = 0; i <= starId; i++) {
          star[i].classList.add(`${cl.active}`);
        }
        for (let i = ++starId; i < star.length; i++) {
          star[i].classList.remove(`${cl.active}`);
        }
      }}
    ></span>
  );
};

export default Star;
