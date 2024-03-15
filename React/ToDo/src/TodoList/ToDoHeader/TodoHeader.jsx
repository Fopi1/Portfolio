import React from "react";
import "./ToDoHeader.css";
import HeaderButton from "../../components/buttons/HeaderButton";
import ButtonArrow from "../../components/arrow/ButtonArrow";

const TodoHeader = ({ stateOfFilter, stateOfModal }) => {
  return (
    <div className="Todo_Header">
      <HeaderButton stateOfFilter={stateOfFilter}>
        <ButtonArrow style={{ margin: "5px 15px 0 10px" }} /> Фильтр
      </HeaderButton>
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
