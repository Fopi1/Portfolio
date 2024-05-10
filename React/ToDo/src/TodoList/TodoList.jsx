import React, { useContext, useEffect, useState } from "react";
import TodoHeader from "./ToDoHeader/TodoHeader";
import ToDoMain from "./ToDoMain/ToDoMain";
import Filter from "../components/filter/Filter";
import Modal from "../components/Modal/Modal";
import CreateForm from "../components/CreateForm/CreateForm";
import { filterTasks } from "../functions/filterTasks";
import "./TodoList.css";
import {
  CurrentPageContext,
  PageContext,
  TaskContext,
} from "../Context/PageContext";
import { binds } from "../functions/binds";

const TodoList = () => {
  // =============================================================================
  // STATES
  const [filterState, setFilterState] = useState(false); // Filter state
  const [modal, setModal] = useState(false); // Modal state
  // =============================================================================
  // CONTEXTS
  const { pages, addPages } = useContext(PageContext); // Pages context
  const { currentPage, addCurrentPage } = useContext(CurrentPageContext); // Current page context
  const { taskStyles, setTaskStyles } = useContext(TaskContext); // Task context
  // =============================================================================
  // CALLBACKS
  const stateOfFilter = (value) => {
    setFilterState(value);
  };
  const stateOfModal = (value) => {
    setModal(value);
  };
  // =============================================================================
  // FUNCTIONS
  // Add Todo task to task styles array
  const forwardStyles = (tasks) => {
    const isAllPagesFull = taskStyles[pages].length >= 8;
    const isCurrentPageFull = taskStyles[currentPage].length >= 8;

    // Check if all the pages are full and forward styles to the newly created page
    if (isAllPagesFull && isCurrentPageFull) {
      setTaskStyles((prevStyle) => [...prevStyle, []]);
      addPages(1);
      forwardStylesToNewPage({ tasks: tasks, isAllPagesFull: true });
    }
    // Check if the current page are full and forward styles to new page without adding new page
    else if (isCurrentPageFull) {
      forwardStylesToNewPage(tasks);
    }
    // Add the task to the current page
    else {
      setTaskStyles((prevStyle) => {
        const prevTaskStyle = [...prevStyle];
        prevTaskStyle[currentPage].push(tasks);
        return prevTaskStyle;
      });
    }
  };
  // Add Todo tasks to a new page of task styles array (if needed)
  const forwardStylesToNewPage = ({ tasks, isAllPagesFull = false }) => {
    setTaskStyles((prevStyle) => {
      const prevTaskStyle = [...prevStyle];
      if (isAllPagesFull) {
        prevTaskStyle[pages + 1].push(tasks);
      } else {
        prevTaskStyle[pages].push(tasks);
      }
      return prevTaskStyle;
    });
  };
  // Delete Todo from task styles array
  const deleteStyle = (tasks) => {
    setTaskStyles((prevStyle) => {
      const prevTaskStyle = [...prevStyle];
      prevTaskStyle[currentPage] = prevTaskStyle[currentPage].filter(
        (item) => JSON.stringify(item) !== JSON.stringify(tasks)
      );
      // Check if current page doesnt equal to first page and delete it
      if (taskStyles[currentPage].length === 1 && currentPage !== 0) {
        prevTaskStyle.splice(currentPage, 1);
        addCurrentPage(-1);
        addPages(-1);
      }
      return prevTaskStyle;
    });
  };
  // Sorting Todo
  const setFilteredTasks = (id) => {
    setTaskStyles([...filterTasks(pages, currentPage, taskStyles, id)]);
  };
  // Returning the Todo order to its original appearance when changing the current page
  useEffect(() => {
    setTaskStyles([...filterTasks(pages, currentPage, taskStyles)]);
  }, [currentPage]);
  // Keybinds
  useEffect(() => {
    const handleKeyShortcuts = binds(
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
      <Filter filterState={filterState} filterTasks={setFilteredTasks} />
      <ToDoMain taskStyles={taskStyles} deleteStyle={deleteStyle} />
      <Modal visible={modal} setVisible={setModal}>
        <CreateForm forwardStyles={forwardStyles} />
      </Modal>
    </div>
  );
};

export default TodoList;
