import React from "react";
import "./button.css";

const Button = ({ children, stateCallback, styleButton, styleComponents }) => {
  return (
    <>
      <button
        onClick={() => {
          if (stateCallback) {
            stateCallback((state) => !state);
          }
        }}
        style={styleButton}
        className="button"
      >
        <span style={styleComponents}>{children}</span>
      </button>
    </>
  );
};

export default Button;
