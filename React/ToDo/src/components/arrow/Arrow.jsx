import React, { useContext } from "react";
import "./Arrow.css";
import { CurrentPageContext } from "../PageContext/PageContext";

let action = 0;
const Arrow = ({ style }) => {
  const { currentPage: __, addCurrentPage } = useContext(CurrentPageContext);
  return (
    <span
      onClick={() => {
        if (style === undefined) {
          action = 1;
        } else if (style.rotate === "180deg") {
          action = -1;
        }
        addCurrentPage(action);
      }}
      style={style}
      className="arrow"
    ></span>
  );
};

export default Arrow;
