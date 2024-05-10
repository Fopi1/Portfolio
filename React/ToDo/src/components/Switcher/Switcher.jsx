import React from "react";
import "./Switcher.css";

const Switcher = ({ id, active, color, handleClick }) => {
  return (
    <>
      <div
        key={id}
        onClick={() => handleClick(id)}
        className={`switch-btn ${active ? `switch-on ${color}` : null}`}
      ></div>
    </>
  );
};

export default Switcher;
