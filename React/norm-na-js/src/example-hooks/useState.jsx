import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState({
    title: "Da",
    date: Date.now(),
  });
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: "Net",
      };
    });
  };
  return (
    <div>
      <h1>Счётчик: {counter}</h1>
      <button style={{ backgroundColor: "green" }} onClick={increment}>
        Добавить
      </button>
      <button style={{ backgroundColor: "red" }} onClick={decrement}>
        Убавить
      </button>
      <h1>{JSON.stringify(state)}</h1>
      <button style={{ backgroundColor: "blue" }} onClick={updateTitle}>
        Изменить название
      </button>
    </div>
  );
}

export default App;
