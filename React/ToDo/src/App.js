import TodoList from "./TodoList/TodoList";
import PageProvider from "./components/PageContext/PageContext";
import Arrow from "./components/arrow/Arrow";
import "./styles/App.css";

function App() {
  return (
    <PageProvider>
      <div className="bg">
        <div className="container">
          <div className="container__inner">
            <Arrow style={{ rotate: "180deg" }} />
            <TodoList />
            <Arrow />
          </div>
        </div>
      </div>
    </PageProvider>
  );
}
export default App;
