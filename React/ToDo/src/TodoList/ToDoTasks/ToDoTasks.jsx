import React from "react";
import Task from "../../components/task/Task";

const ToDoTasks = ({ taskStyles, deleteStyle }) => {
  return (
    <div>
      {taskStyles.map((task) => {
        return (
          <Task
            deleteStyle={deleteStyle}
            key={taskStyles.indexOf(task)}
            {...task}
          />
        );
      })}
    </div>
  );
};

export default ToDoTasks;
