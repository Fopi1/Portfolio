import React from "react";
import Task from "../../components/task/Task";

const ToDoTasks = ({ taskStyles, deleteStyle }) => {
  return (
    <div>
      {taskStyles.map((task) => {
        let key = taskStyles.indexOf(task);
        return <Task deleteStyle={deleteStyle} key={key} {...task} />;
      })}
    </div>
  );
};

export default ToDoTasks;
