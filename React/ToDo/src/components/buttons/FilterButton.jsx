import React from "react";
import "./FilterButton.css";
let idArray = [];

const FilterButton = ({ children, filterTasks, id }) => {
  return (
    <input
      onClick={() => {
        if (idArray.includes(id)) {
          idArray = idArray.filter((e) => e !== id);
          filterTasks(id + "!");
        } else {
          idArray.push(id);
          filterTasks(id);
        }
      }}
      className="filter-button"
      type="checkbox"
      value={children}
    />
  );
};

export default FilterButton;
