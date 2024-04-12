import React, { useContext } from "react";
import Task from "../../components/task/Task";
import { CurrentPageContext } from "../../components/PageContext/PageContext";

const ToDoTasks = ({ taskStyles, deleteStyle }) => {
  let { currentPage, addCurrentPage: _ } = useContext(CurrentPageContext);
  return (
    <div>
      {taskStyles[currentPage].map((task) => {
        return (
          <Task
            deleteStyle={deleteStyle}
            key={taskStyles[currentPage].indexOf(task)}
            {...task}
          />
        );
      })}
    </div>
  );
};

export default ToDoTasks;
