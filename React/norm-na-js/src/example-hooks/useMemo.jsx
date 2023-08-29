import React, { useState, useEffect, useRef, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(20);
  const [colored, setColored] = useState(false);
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);
  const styles = useMemo(() => {
    return {
      color: colored ? "darkRed" : "black",
    };
  }, [colored]);
  function complexCompute(a) {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return a * 2;
  }
  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);
  return (
    <div>
      <h1 style={styles}>Число: {computed}</h1>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        Добавить
      </button>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          setNumber((prev) => prev - 1);
        }}
      >
        Убавить
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => {
          setColored((prev) => !prev);
        }}
      >
        Изменить цвет
      </button>
    </div>
  );
}

export default App;
