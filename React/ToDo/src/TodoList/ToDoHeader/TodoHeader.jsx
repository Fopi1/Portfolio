import React, { useContext } from "react";
import "./ToDoHeader.css";
import HeaderButton from "../../components/buttons/HeaderButton";
import ButtonArrow from "../../components/arrow/ButtonArrow";
import {
  CurrentPageContext,
  PageContext,
} from "../../components/PageContext/PageContext";

const TodoHeader = ({ stateOfFilter, stateOfModal }) => {
  const { pages, addPages: _ } = useContext(PageContext);
  const { currentPage, addCurrentPage: __ } = useContext(CurrentPageContext);
  return (
    <div className="Todo_Header">
      <HeaderButton stateOfFilter={stateOfFilter}>
        <ButtonArrow style={{ margin: "5px 15px 0 10px" }} /> Фильтр
      </HeaderButton>
      <div className="pages-container">
        <span>Количество страниц:</span>
        <div className="pages">
          {currentPage + 1}/{pages + 1}
        </div>
      </div>
      <HeaderButton
        stateOfModal={stateOfModal}
        styleComponents={{ fontSize: "50px", marginBottom: "6px" }}
        styleButton={{ marginRight: "20px" }}
      >
        +
      </HeaderButton>
    </div>
  );
};

export default TodoHeader;
