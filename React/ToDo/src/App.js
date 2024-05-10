import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageProvider from "./Context/PageContext";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import BindsPage from "./pages/BindsPage/BindsPage";

function App() {
  return (
    <PageProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/binds"} element={<BindsPage />} />
        </Routes>
      </BrowserRouter>
    </PageProvider>
  );
}
export default App;
