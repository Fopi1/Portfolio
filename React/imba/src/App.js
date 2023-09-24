import TodoList from "./TodoList/TodoList";
import Arrow from "./components/arrow/Arrow";
import Filter from "./components/filter/Filter";
import "./styles/App.css";

function App() {
  return (
    <div className="bg">
      <div className="container">
        <div className="container__inner">
          <Arrow style={{ rotate: "180deg" }} />
          <Filter />
          <TodoList />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default App;
