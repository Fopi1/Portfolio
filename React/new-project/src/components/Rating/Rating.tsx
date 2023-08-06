import React from "react";
import Star from "../Star/Star";

const Rating = (props: any) => {
  let stars = [];
  for (let i = 0; i < props.value; i++) {
    stars.push(<Star data-itemid={`${i}`} key={i} />);
  }
  return <div id="stars">{[...stars]}</div>;
};

export default Rating;
