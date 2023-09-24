import React from "react";
import "./TodoList.css";
import HeaderButton from "../components/buttons/HeaderButton";
import ButtonArrow from "../components/arrow/ButtonArrow";

const TodoHeader = () => {
  return (
    <div className="Todo_Header">
      <HeaderButton>
        <ButtonArrow style={{ margin: "5px 10px 0 5px" }} /> Фильтр
      </HeaderButton>
      <HeaderButton style={{ fontSize: "50px", marginBottom: "6px" }}>
        +
      </HeaderButton>
    </div>
  );
};

export default TodoHeader;
