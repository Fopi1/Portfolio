import React from "react";
import BindTemplate from "../BindTemlpate/BindTemplate";
import "./BindContainer.css";

const BindContainer = () => {
  return (
    <div className="bind-container">
      <BindTemplate
        name={"Окно фильтрации"}
        description={"Открыть окно сортировки тудушек"}
        binds={["R"]}
      />
      <BindTemplate
        name={"Создание тудушки"}
        description={"Открывает модальное окно для создания тудушки"}
        binds={["Alt", "+", "Q"]}
      />
      <BindTemplate
        name={"Перелистка страниц"}
        description={"Листает страницы по убыванию"}
        binds={["A", ",", "←"]}
      />
      <BindTemplate
        name={"Перелистка страниц"}
        description={"Листает страницы по возрастанию"}
        binds={["D", ",", "→"]}
      />
    </div>
  );
};

export default BindContainer;
