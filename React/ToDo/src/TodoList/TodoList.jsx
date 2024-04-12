import React, { useContext, useEffect, useState } from "react";
import TodoHeader from "./ToDoHeader/TodoHeader";
import ToDoMain from "./ToDoMain/ToDoMain";
import Filter from "../components/filter/Filter";
import Modal from "../components/Modal/Modal";
import CreateForm from "../components/CreateForm/CreateForm";
import { filterTask } from "../functions/filterTask";
import "./TodoList.css";
import {
  CurrentPageContext,
  PageContext,
} from "../components/PageContext/PageContext";
import { keyShortcuts } from "../functions/keyShortcuts";

const TodoList = () => {
  const [filterState, setFilterState] = useState(false);
  const [modal, setModal] = useState(false);
  const { pages, addPages } = useContext(PageContext);
  const { currentPage, addCurrentPage } = useContext(CurrentPageContext);
  const [taskStyles, setTaskStyles] = useState([[]]);

  const stateOfFilter = (value) => {
    setFilterState(value);
  };
  const stateOfModal = (value) => {
    setModal(value);
  };
  // Добавить ToDo
  const forwardStyles = (tasks) => {
    if (taskStyles[pages].length >= 8 && taskStyles[currentPage].length >= 8) {
      setTaskStyles((prevStyle) => {
        let prevTaskStyle = [...prevStyle];
        prevTaskStyle.push([]);
        return prevTaskStyle;
      });
      addPages(1);
      forwardStylesToNewPage(tasks, true);
    } else if (taskStyles[currentPage].length >= 8) {
      forwardStylesToNewPage(tasks);
    } else {
      setTaskStyles((prevStyle) => {
        let prevTaskStyle = [...prevStyle];
        prevTaskStyle[currentPage].push(tasks);
        return prevTaskStyle;
      });
    }
  };
  // Добавить ToDo на новую страницу
  const forwardStylesToNewPage = (tasks, condition = false) => {
    if (condition) {
      setTaskStyles((prevStyle) => {
        let prevTaskStyle = [...prevStyle];
        prevTaskStyle[pages + 1].push(tasks);
        return prevTaskStyle;
      });
    } else {
      setTaskStyles((prevStyle) => {
        let prevTaskStyle = [...prevStyle];
        prevTaskStyle[pages].push(tasks);
        return prevTaskStyle;
      });
    }
  };
  // Удалить какое-то ToDo
  const deleteStyle = (tasks) => {
    if (taskStyles[currentPage].length === 1 && currentPage !== 0) {
      setTaskStyles((prevStyle) => {
        let prevTaskStyle = [...prevStyle];
        prevTaskStyle[currentPage] = prevTaskStyle[currentPage].filter(
          (item) => JSON.stringify(item) !== JSON.stringify(tasks)
        );
        prevTaskStyle.splice(currentPage, 1);
        return prevTaskStyle;
      });
      addCurrentPage(-1);
      addPages(-1);
    } else {
      setTaskStyles((prevStyle) => {
        let prevTaskStyle = [...prevStyle];
        prevTaskStyle[currentPage] = prevTaskStyle[currentPage].filter(
          (item) => JSON.stringify(item) !== JSON.stringify(tasks)
        );
        return prevTaskStyle;
      });
    }
  };
  // Фильтрация ToDo
  const filterTasks = (id) => {
    setTaskStyles([...filterTask(currentPage, id, taskStyles)]);
  };
  // Использование биндов
  useEffect(() => {
    const handleKeyShortcuts = keyShortcuts(
      addCurrentPage,
      setModal,
      setFilterState,
      modal
    );
    window.addEventListener("keydown", handleKeyShortcuts);

    return () => {
      window.removeEventListener("keydown", handleKeyShortcuts);
    };
  }, [addCurrentPage, modal]);
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
