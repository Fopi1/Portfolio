import React from "react";
import "./Filter.css";
import FilterButton from "../buttons/FilterButton";
import { CSSTransition } from "react-transition-group";

const Filter = ({ filterState, filterTasks }) => {
  return (
    <CSSTransition
      in={filterState}
      timeout={500}
      classNames={"filter-container"}
    >
      <div className="filter-container">
        <FilterButton filterTasks={filterTasks} id={"filterDate"}>
          По дате добавления
        </FilterButton>
        <FilterButton filterTasks={filterTasks} id={"filterEndDate"}>
          По дате окончания
        </FilterButton>
        <FilterButton filterTasks={filterTasks} id={"filterABC"}>
          По алфавиту
        </FilterButton>
        <FilterButton filterTasks={filterTasks} id={"filterImportant"}>
          По важности
        </FilterButton>
      </div>
    </CSSTransition>
  );
};

export default Filter;
