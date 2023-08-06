import React from "react";
import AccordionBody from "./components/Accordion/AccordionBody";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import Rating from "./components/Rating/Rating";
import "./styles/App.module.css";
import cl from "./styles/App.module.css";

function App() {
  return (
    <div className={cl.center}>
      <Rating value={10} />
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}

export default App;
