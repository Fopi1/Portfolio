import React, { useState } from "react";
import Task from "../../components/task/Task";
import dateToSeconds from "../../functions/dateToSeconds";

const ToDoClosest = ({ taskStyles, deleteStyle }) => {
  let tempTaskStyle;
  const [taskStyle, setTaskStyle] = useState();
  if (taskStyles.length !== 0) {
    tempTaskStyle = taskStyles[0];
    for (let i = 0; i < taskStyles.length; i++) {
      if (
        dateToSeconds(taskStyles[i].time2, taskStyles[i].date2) >
        dateToSeconds(tempTaskStyle.time2, tempTaskStyle.date2)
      ) {
        tempTaskStyle = taskStyles[i];
      }
    }
    if (taskStyle !== tempTaskStyle) {
      setTaskStyle(tempTaskStyle);
    }
  }
  return (
    <div style={{ backgroundColor: "rgba(34,32,32,0.5)" }}>
      {taskStyles.length ? (
        <Task {...taskStyle} deleteStyle={deleteStyle} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToDoClosest;
