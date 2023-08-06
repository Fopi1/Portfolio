import React from "react";
import Star from "./Star";

const Stars = (props: any) => {
  let { value } = props;

  let stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<Star />);
  }
  return <>{[...stars]}</>;
};
export default Stars;
