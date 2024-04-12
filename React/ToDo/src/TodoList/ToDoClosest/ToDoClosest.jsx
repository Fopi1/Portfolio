import React, { useContext, useState } from "react";
import Task from "../../components/task/Task";
import { dateToSeconds } from "../../functions/dateToSeconds";
import { CurrentPageContext } from "../../components/PageContext/PageContext";

const ToDoClosest = ({ taskStyles, deleteStyle }) => {
  const { currentPage, addCurrentPage: _ } = useContext(CurrentPageContext);
  const [taskStyle, setTaskStyle] = useState();
  let tempTaskStyle;
  let currentPageTaskStyles = taskStyles[currentPage];
  if (currentPageTaskStyles.length !== 0) {
    tempTaskStyle = currentPageTaskStyles[0];
    for (let i = 0; i < currentPageTaskStyles.length; i++) {
      if (
        dateToSeconds(
          currentPageTaskStyles[i].endTime,
          currentPageTaskStyles[i].endDate
        ) < dateToSeconds(tempTaskStyle.endTime, tempTaskStyle.endDate)
      ) {
        tempTaskStyle = currentPageTaskStyles[i];
      }
    }
    if (taskStyle !== tempTaskStyle) {
      setTaskStyle(tempTaskStyle);
    }
  }
  return (
    <div style={{ backgroundColor: "rgba(34,32,32,0.5)" }}>
      {currentPageTaskStyles.length ? (
        <Task {...taskStyle} deleteStyle={deleteStyle} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToDoClosest;
