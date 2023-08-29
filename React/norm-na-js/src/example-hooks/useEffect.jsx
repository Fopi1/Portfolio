import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");
  const [pizda, setPizda] = useState("pizda");
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };
  // useEffect(() => {
  //   console.log("render");
  // });

  // useEffect(() => {
  //   console.log("pizda");
  // }, [type]);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  });
  return (
    <div>
      <div>
        <h1>Ресурс {type}</h1>
        <button
          onClick={() => {
            setType("users");
          }}
        >
          users
        </button>
        <button
          onClick={() => {
            setType("todo");
          }}
        >
          todo
        </button>
        <button
          onClick={() => {
            setType("posts");
          }}
        >
          posts
        </button>
      </div>
      <div>
        <h1>Ресурс {pizda}</h1>
        <button
          onClick={() => {
            setPizda("hiuy");
          }}
        >
          hiuy
        </button>
      </div>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
