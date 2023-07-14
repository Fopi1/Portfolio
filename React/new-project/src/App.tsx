import React from "react";
import AccordionBody from "./components/Accordion/AccordionBody";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import Star from "./components/Star/Star";
import "./styles/App.module.css";
import cl from "./styles/App.module.css";

function sum(a: number, b: number) {
  console.log(a + b);
}

function App() {
  return (
    <div className={cl.center}>
      <div>
        <Star selected={true} />
        <AccordionTitle />
        <AccordionBody />
      </div>
    </div>
  );
}

export default App;
