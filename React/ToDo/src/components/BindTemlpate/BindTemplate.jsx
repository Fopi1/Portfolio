import React from "react";
import "./BindTemplate.css";

const BindTemplate = ({ name, description, binds }) => {
  return (
    <div className="bind-template">
      <div className="bind-template__inner">
        <div className="bind-name">{name}</div>
        <div className="bind">
          <div className="keybind">
            <div className="keybind__inner">
              {binds.map((bind) => (
                <span key={binds.indexOf(bind)}>{bind}</span>
              ))}
            </div>
          </div>
          <div className="bind-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BindTemplate;
