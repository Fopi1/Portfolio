import React, { forwardRef } from "react";
import "./MyInput.css";

const MyInput = forwardRef(({ type, placeholder }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      className="task-text"
    />
  );
});

export default MyInput;
