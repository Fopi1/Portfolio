import React from "react";
import "./FilterButton.css";

const FilterButton = ({ children, id, isChecked, handleIsChecked }) => {
  return (
    <input
      onClick={() => {
        handleIsChecked(id);
      }}
      className={`filter-button ${isChecked ? "checked" : ""}`}
      type="checkbox"
      value={children}
    />
  );
};

export default FilterButton;
