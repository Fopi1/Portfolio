import React, { useContext, useEffect, useRef, useState } from "react";
import "./Filter.css";
import FilterButton from "../buttons/FilterButton";
import { CSSTransition } from "react-transition-group";
import { CurrentPageContext } from "../../Context/PageContext";

const Filter = ({ filterState, filterTasks }) => {
  const { currentPage, setCurrentPage: _ } = useContext(CurrentPageContext);
  // Значения того были ли нажаты кнопки
  const [isChecked, setIsChecked] = useState({
    filterDate: false,
    filterEndDate: false,
    filterAlphabet: false,
    filterImportance: false,
  });
  const prevPage = useRef(0);
  const idArray = useRef([]);

  // Меняет значение нажатой кнопки на true ("нажата"), после идёт проверка на то была ли нажата кнопка до этого
  //  (! добавляется для того чтобы указать что кнопка была нажата и сейчас её надо отжать)
  const handleIsChecked = (id) => {
    setIsChecked((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    if (idArray.current.includes(id)) {
      idArray.current = idArray.current.filter((e) => e !== id);
    } else {
      idArray.current.push(id);
    }
    filterTasks(id);
  };
  // Обнуление сортировки при смене страницы, чтобы не было ошибок
  useEffect(() => {
    if (prevPage.current !== currentPage) {
      prevPage.current = currentPage;
      setIsChecked({
        filterDate: false,
        filterEndDate: false,
        filterAlphabet: false,
        filterImportance: false,
      });
    }
  }, [currentPage]);
  return (
    <CSSTransition
      in={filterState}
      timeout={500}
      classNames={"filter-container"}
    >
      <div className="filter-container">
        <FilterButton
          id={"filterDate"}
          isChecked={isChecked.filterDate}
          handleIsChecked={handleIsChecked}
        >
          По дате добавления
        </FilterButton>
        <FilterButton
          id={"filterEndDate"}
          isChecked={isChecked.filterEndDate}
          handleIsChecked={handleIsChecked}
        >
          По дате окончания
        </FilterButton>
        <FilterButton
          id={"filterAlphabet"}
          isChecked={isChecked.filterAlphabet}
          handleIsChecked={handleIsChecked}
        >
          По алфавиту
        </FilterButton>
        <FilterButton
          id={"filterImportance"}
          isChecked={isChecked.filterImportance}
          handleIsChecked={handleIsChecked}
        >
          По важности
        </FilterButton>
      </div>
    </CSSTransition>
  );
};

export default Filter;
