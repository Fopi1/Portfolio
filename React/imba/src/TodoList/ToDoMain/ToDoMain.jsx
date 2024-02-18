import React from "react";
import ToDoClosest from "../ToDoClosest/ToDoClosest";
import ToDoTasks from "../ToDoTasks/ToDoTasks";
import "./ToDoMain.css";

const ToDoMain = ({ taskStyles }) => {
  return (
    <div className="main">
      <ToDoClosest taskStyles={taskStyles} />
      <ToDoTasks taskStyles={taskStyles} />
    </div>
  );
};

export default ToDoMain;
