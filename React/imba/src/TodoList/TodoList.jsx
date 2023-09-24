import React from "react";
import "./TodoList.css";
import TodoHeader from "./TodoHeader";

const TodoList = () => {
  return (
    <div className="Todo_List">
      <TodoHeader />
      <div className="Todo_main">
        <div className="Todo_closest-task"></div>
        <div className="Todo-tasks"></div>
      </div>
    </div>
  );
};

export default TodoList;
