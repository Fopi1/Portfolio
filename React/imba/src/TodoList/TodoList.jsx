import React from "react";
import "./TodoList.css";
import TodoHeader from "./ToDoHeader/TodoHeader";
import ToDoMain from "./ToDoMain/ToDoMain";
import Filter from "../components/filter/Filter";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import CreateForm from "../components/CreateForm/CreateForm";

const TodoList = () => {
  const [filterState, setFilterState] = useState(false);
  const [modal, setModal] = useState(false);
  const [taskStyles, setTaskStyles] = useState([]);
  const stateOfFilter = (value) => {
    setFilterState(value);
  };
  const stateOfModal = (value) => {
    setModal(value);
  };
  const forwardStyles = (props) => {
    setTaskStyles((prevStyle) => [...prevStyle, props]);
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
      <ToDoMain taskStyles={taskStyles} />
      <Modal visible={modal} setVisible={setModal}>
        <CreateForm forwardStyles={forwardStyles} />
      </Modal>
    </div>
  );
};

export default TodoList;
