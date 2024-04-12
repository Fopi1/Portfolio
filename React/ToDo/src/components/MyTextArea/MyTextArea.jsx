import React, { forwardRef } from "react";
import "./MyTextArea.css";

const MyTextArea = forwardRef((props, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      maxLength="168"
      type="text"
      className="task-text"
    />
  );
});

export default MyTextArea;
