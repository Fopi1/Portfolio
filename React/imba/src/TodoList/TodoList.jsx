import React from "react";
import "./TodoList.css";
import TodoHeader from "./ToDoHeader/TodoHeader";
import ToDoMain from "./ToDoMain/ToDoMain";
import Filter from "../components/filter/Filter";
import { useState } from "react";
import Modal from "../components/Modal/Modal";

const TodoList = () => {
  const [filterState, setFilterState] = useState(false);
  const [modal, setModal] = useState(false);
  const stateOfFilter = (value) => {
    setFilterState(value);
  };
  const stateOfModal = (value) => {
    setModal(value);
  };
  return (
    <div className="Todo_List">
      <TodoHeader
        stateOfFilter={stateOfFilter}
        stateOfModal={stateOfModal}
        modal={modal}
        setModal={setModal}
      />
      <Filter filterState={filterState} />
      <ToDoMain />
      <Modal visible={modal} setVisible={setModal}></Modal>
    </div>
  );
};

export default TodoList;
