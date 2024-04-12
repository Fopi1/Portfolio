import React from "react";
import { CSSTransition } from "react-transition-group";
import Arrow from "../arrow/Arrow";
import "./MyError.css";

const MyError = ({ isError }) => {
  return (
    <CSSTransition in={isError} timeout={500} classNames="error-container">
      <div className="error-container">
        <div className="error-box">
          <div className="error-box_inner">
            <span className="error-text">
              Проверьте на наличие пустых или ошибочных элементов
            </span>
            <Arrow style={{ rotate: "90deg" }} />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MyError;
