import React from "react";
import "./HeaderButton.css";

const HeaderButton = ({ children, style, props }) => {
  return (
    <button {...props} style={style} className="HeaderButton">
      {children.length > 1 ? (
        <>
          {children[0]}
          <span>{children[1]}</span>
        </>
      ) : (
        <span style={style}>{children}</span>
      )}
    </button>
  );
};

export default HeaderButton;
