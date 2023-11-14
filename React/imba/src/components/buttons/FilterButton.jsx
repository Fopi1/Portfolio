import React from "react";
import "./FilterButton.css";

const FilterButton = ({ children, props }) => {
  return <input className="filter_button" type="checkbox" value={children} />;
};

export default FilterButton;
