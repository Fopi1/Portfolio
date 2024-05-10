import React, { useContext, useRef } from "react";
import "./Arrow.css";
import { CurrentPageContext } from "../../Context/PageContext";

const Arrow = ({ style }) => {
  const { currentPage: __, addCurrentPage } = useContext(CurrentPageContext);
  const action = useRef(0);
  return (
    <span
      onClick={() => {
        if (style === undefined) {
          action.current = 1;
        } else if (style.rotate === "180deg") {
          action.current = -1;
        }
        addCurrentPage(action);
      }}
      style={style}
      className="arrow"
    ></span>
  );
};

export default Arrow;
