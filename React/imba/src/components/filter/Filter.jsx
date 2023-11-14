import React from "react";
import "./Filter.css";
import FilterButton from "../buttons/FilterButton";

const Filter = ({ filterState }) => {
  return (
    <div className={`filter_container ${filterState ? "show" : "hide"}`}>
      <FilterButton>По дате добавления</FilterButton>
      <FilterButton>По дате окончания</FilterButton>
      <FilterButton>По алфавиту</FilterButton>
      <FilterButton>По важности</FilterButton>
    </div>
  );
};

export default Filter;
