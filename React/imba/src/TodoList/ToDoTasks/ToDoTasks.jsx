import React from "react";
import Task from "../../components/task/Task";

const ToDoTasks = ({ taskStyles }) => {
  console.log(taskStyles);
  return (
    <div>
      {taskStyles.map((task) => {
        let key = taskStyles.indexOf(task);
        return <Task {...task} key={key} />;
      })}
    </div>
  );
};

export default ToDoTasks;
