import "./App.css";
import Form from "./component/Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoTask from "./component/TodoTask";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/task" element={<TodoTask />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
