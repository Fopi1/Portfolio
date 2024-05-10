import React, { useRef, useState } from "react";
import "./CreateForm.css";
import Switcher from "../Switcher/Switcher";
import MyInput from "../myInput/MyInput";
import MyTextArea from "../MyTextArea/MyTextArea";
import MyError from "../errorComponent/MyError";
import { useMultipleRefs } from "../../hooks/useMultipleRefs";

const CreateForm = ({ forwardStyles }) => {
  const [time, date, task, endTime, endDate] = useMultipleRefs(5, 0);
  const index = useRef(0);
  const colorStyle = useRef(1);
  const needsValuesOfTask = [task, endTime, endDate];
  const [isError, setIsError] = useState(false);
  const [switchers, setSwitcher] = useState([
    { id: 1, active: true, color: "green" },
    { id: 2, active: false, color: "yellow" },
    { id: 3, active: false, color: "red" },
  ]);
  const handleClick = (clickedSwitcherId) => {
    const updatedSwitchers = switchers.map((switcher) => {
      if (switcher.id === clickedSwitcherId) {
        colorStyle.current = switcher.id;
        return { ...switcher, active: true };
      } else {
        return { ...switcher, active: false };
      }
    });
    setSwitcher(updatedSwitchers);
  };
  return (
    <div onClick={(e) => e.stopPropagation()} className="form-container">
      <MyError isError={isError} />
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
                <MyInput ref={endTime} type={"time"} placeholder={"Время"} />
              </div>
              <div className="current-date">
                <MyInput ref={endDate} type={"date"} placeholder={"Дата"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="confirm-button"
        onClick={() => {
          for (let i = 0; i < needsValuesOfTask.length; i++) {
            if (needsValuesOfTask[i].current.value === "") {
              setIsError(true);
              return 0;
            }
          }
          setIsError(false);
          forwardStyles({
            colorStyle: colorStyle.current,
            time: time.current.innerText,
            date: date.current.innerText,
            task: task.current.value,
            endTime: endTime.current.value,
            endDate: endDate.current.value.split("-").reverse().join("."),
            index: index.current,
            dateRank: 0,
            endDateRank: 0,
            alphabetRank: 0,
            importanceRank: 0,
          });
          index.current += 1;
        }}
      >
        Добавить задание
      </div>
    </div>
  );
};

export default CreateForm;
