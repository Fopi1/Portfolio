import React from "react";
import "./MainPage.css";
import Arrow from "../../components/arrows/Arrow";
import TodoList from "../../TodoList/TodoList";

const MainPage = () => {
  return (
    <div className="bg__main">
      <div className="container__main">
        <div className="container__main__inner">
          <Arrow style={{ rotate: "180deg" }} />
          <TodoList />
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
