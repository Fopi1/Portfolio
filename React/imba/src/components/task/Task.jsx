import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <div className="task">
      <div className="task-element">
        <div className="task-element__inner">
          <div
            className="circle"
            style={{ backgroundColor: props.styles }}
          ></div>
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
      <div className="task-element">
        <div className="task-element__inner">
          <div className="date">
            <div className="time">{props.time2}</div>
            <div className="current-date">{props.date2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
