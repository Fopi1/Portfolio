import React, { forwardRef } from "react";
import "./MyTextArea.css";

const MyTextArea = forwardRef(({ placeholder }, ref) => {
  return (
    <textarea
      placeholder={placeholder}
      ref={ref}
      maxLength="168"
      type="text"
      className="task-text"
    />
  );
});

export default MyTextArea;
