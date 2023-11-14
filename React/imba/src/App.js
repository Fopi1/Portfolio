import TodoList from "./TodoList/TodoList";
import Arrow from "./components/arrow/Arrow";
import "./styles/App.css";

function App() {
  return (
    <div className="bg">
      <div className="container">
        <div className="container__inner">
          <Arrow style={{ rotate: "180deg" }} />
          РЕАЛИЗОВАТЬ ДОБАВЛЕНИЕ ПОСТОВ ПО КЛИКУ В МОДУЛЕ И СДЕЛАТЬ САМ МОДУЛЬ
          <TodoList />
          <Arrow />
        </div>
      </div>
    </div>
  );
}
export default App;
