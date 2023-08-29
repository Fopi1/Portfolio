import React, { useState, useEffect, useRef } from "react";

function App() {
  const render = useRef(1);
  const [value, setValue] = useState("da");
  const inputRef = useRef(null);
  const prevValue = useRef("");
  useEffect(() => {
    render.current++;
    console.log(inputRef.current.value);
  });
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  const focus = () => inputRef.current.focus();
  return (
    <div>
      <h1>Рендеры: {render.current}</h1>
      <h2>Прошлое состояние:{prevValue.current}</h2>
      <button onClick={focus}>Фокус</button>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default App;
