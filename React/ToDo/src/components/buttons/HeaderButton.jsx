import React from "react";
import "./HeaderButton.css";

const HeaderButton = ({
  stateOfFilter,
  stateOfModal,
  children,
  styleButton,
  styleComponents,
}) => {
  let filterState = false;
  return (
    <>
      {stateOfFilter !== undefined ? (
        <button
          onClick={() => {
            stateOfFilter((filterState) => !filterState);
            filterState = !filterState;
          }}
          style={styleButton}
          className="HeaderButton"
        >
          {children[0]}
          <span>{children[1]}</span>
        </button>
      ) : (
        <button
          onClick={() => {
            stateOfModal(true);
          }}
          style={styleButton}
          className="HeaderButton"
        >
          <span style={styleComponents}>{children}</span>
        </button>
      )}
    </>
  );
};

export default HeaderButton;
