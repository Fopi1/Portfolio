import React, { forwardRef } from "react";
import "./MyInput.css";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} className="task-text" />;
});

export default MyInput;
