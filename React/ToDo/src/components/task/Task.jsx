import React from "react";
import "./Task.css";

const Task = ({ deleteStyle, ...props }) => {
  let color = "";
  switch (props.colorStyle) {
    case 1:
      color = "#4EFB32";
      break;
    case 2:
      color = "#DFFB32";
      break;
    case 3:
      color = "#FC2929";
      break;
    default:
      break;
  }
  return (
    <div className="task">
      <div className="task-element">
        <div className="task-element__inner">
          <div className="circle" style={{ backgroundColor: color }}></div>
        </div>
      </div>
      <div className="task-element">
        <div className="task-element__inner">
          <div className="date">
            <div className="time">{props.time}</div>
            <div className="current-date">{props.date}</div>
          </div>
        </div>
      </div>
      <div className="task-element">
        <div className="task-element__inner">{props.task}</div>
      </div>
      <div className="task-element" style={{ borderRight: 0 }}>
        <div className="task-element__inner">
          <div className="date">
            <div className="time">{props.endTime}</div>
            <div className="current-date">{props.endDate}</div>
          </div>
        </div>
      </div>
      <div className="delete">
        <button
          className="delete-button"
          onClick={() => {
            deleteStyle({ ...props });
          }}
        >
          <span
            style={{ fontSize: "30px", color: "#56423D", fontWeight: "Bold" }}
          >
            X
          </span>
        </button>
      </div>
    </div>
  );
};

export default Task;
