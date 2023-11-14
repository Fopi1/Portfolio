import React from "react";
import Task from "../../components/task/Task";

let props = {
  styles: "#FC2929",
  time: "19:20",
  date: "14.11.2023",
  task: "Дададададададада",
  time2: "20:30",
  date2: "14.11.2023",
};

const ToDoTasks = () => {
  return (
    <div>
      <Task {...props} />
    </div>
  );
};

export default ToDoTasks;
