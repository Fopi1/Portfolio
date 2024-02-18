import React, { useState } from "react";
import Task from "../../components/task/Task";
import { dateToSeconds } from ".../functions/dateToSeconds";

const ToDoClosest = ({ taskStyles }) => {
  const [taskStyle, setTaskStyle] = useState(taskStyles[0].date2);
  for (let i = 0; i < taskStyles.length; i++) {
    if (dateToSeconds(taskStyles[i].date2 > taskStyle))
      setTaskStyle(taskStyle[i]);
  }
  console.log(taskStyle);
  return (
    <div style={{ backgroundColor: "rgba(34,32,32,0.5)" }}>
      <Task
        styles={"#FC2929"}
        time={"19:20"}
        date={"14.11.2023"}
        task={"Дададададададада"}
        time2={"20:30"}
        date2={"14.11.2023"}
      />
    </div>
  );
};

export default ToDoClosest;
