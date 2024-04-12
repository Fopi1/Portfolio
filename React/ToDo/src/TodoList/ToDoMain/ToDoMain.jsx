import React from "react";
import ToDoClosest from "../ToDoClosest/ToDoClosest";
import ToDoTasks from "../ToDoTasks/ToDoTasks";
import "./ToDoMain.css";

const ToDoMain = ({ taskStyles, deleteStyle }) => {
  return (
    <div className="main">
      <ToDoClosest taskStyles={taskStyles} deleteStyle={deleteStyle} />
      <ToDoTasks taskStyles={taskStyles} deleteStyle={deleteStyle} />
    </div>
  );
};

export default ToDoMain;
