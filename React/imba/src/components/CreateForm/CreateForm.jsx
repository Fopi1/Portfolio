import React, { useEffect, useRef, useState } from "react";
import "./CreateForm.css";
import Switcher from "../Switcher/Switcher";
import MyInput from "../myInput/MyInput";
import MyTextArea from "../MyTextArea/MyTextArea";
let colorStyle = 0;

const CreateForm = (props) => {
  const time = useRef(null);
  const date = useRef(null);
  const task = useRef(null);
  const time2 = useRef(null);
  const date2 = useRef(null);
  const [switchers, setSwitcher] = useState([
    { id: 1, active: false, color: "green" },
    { id: 2, active: false, color: "yellow" },
    { id: 3, active: false, color: "red" },
  ]);
  const handleClick = (clickedSwitcherId) => {
    const updatedSwitchers = switchers.map((switcher) => {
      if (switcher.id === clickedSwitcherId) {
        colorStyle = switcher.id;
        return { ...switcher, active: true };
      } else {
        return { ...switcher, active: false };
      }
    });
    setSwitcher(updatedSwitchers);
  };
  return (
    <div onClick={(e) => e.stopPropagation()} className="form-container">
      <div className="form-of-task">
        <div className="form-of-task-element">
          <div className="form-of-task-element_inner">
            <div className="switches">
              {switchers.map((switcher) => (
                <Switcher
                  key={switcher.id}
                  id={switcher.id}
                  active={switcher.active}
                  color={switcher.color}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="form-of-task-element">
          <div className="form-of-task-element_inner">
            <div className="date">
              <div className="time" ref={time}>
                {new Date().toLocaleString("ru-RU").split(",")[1].slice(0, 6)}
              </div>
              <div className="current-date" ref={date}>
                {new Date().toLocaleString("ru-RU").split(",")[0]}
              </div>
            </div>
          </div>
        </div>
        <div className="form-of-task-element">
          <div className="form-of-task-element_inner">
            <div className="text">
              <MyTextArea placeholder={"Задание"} ref={task} />
            </div>
          </div>
        </div>
        <div className="form-of-task-element" style={{ border: "none" }}>
          <div className="form-of-task-element_inner">
            <div className="date">
              <div className="time">
                <MyInput ref={time2} type={"time"} placeholder={"Время"} />
              </div>
              <div className="current-date">
                <MyInput ref={date2} type={"date"} placeholder={"Дата"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="confirm-button"
        onClick={() => {
          props.forwardStyles({
            colorStyle: colorStyle,
            time: time.current.innerText,
            date: date.current.innerText,
            task: task.current.value,
            time2: time2.current.value,
            date2: date2.current.value.split("-").reverse().join("."),
          });
        }}
      >
        Добавить задание
      </div>
    </div>
  );
};

export default CreateForm;