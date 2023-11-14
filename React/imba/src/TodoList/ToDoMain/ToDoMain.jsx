import React from "react";
import ToDoClosest from "../ToDoClosest/ToDoClosest";
import ToDoTasks from "../ToDoTasks/ToDoTasks";
import "./ToDoMain.css";

const ToDoMain = () => {
  return (
    <div className="main">
      <ToDoClosest />
      <ToDoTasks />
    </div>
  );
};

export default ToDoMain;
