import React from "react";
import "./TodoList.css";
import TodoHeader from "./ToDoHeader/TodoHeader";
import ToDoMain from "./ToDoMain/ToDoMain";
import Filter from "../components/filter/Filter";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import CreateForm from "../components/CreateForm/CreateForm";
import filterTask from "../functions/filterTask";

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
  const deleteStyle = (props) => {
    setTaskStyles((prevStyle) =>
      prevStyle.filter((item) => JSON.stringify(item) !== JSON.stringify(props))
    );
  };
  const filterTasks = (id) => {
    setTaskStyles(filterTask(id, taskStyles));
  };
  return (
    <div className="Todo_List">
      <TodoHeader
        stateOfFilter={stateOfFilter}
        stateOfModal={stateOfModal}
        modal={modal}
        setModal={setModal}
      />
      <Filter filterState={filterState} filterTasks={filterTasks} />
      <ToDoMain taskStyles={taskStyles} deleteStyle={deleteStyle} />
      <Modal visible={modal} setVisible={setModal}>
        <CreateForm forwardStyles={forwardStyles} />
      </Modal>
    </div>
  );
};

export default TodoList;
