import "./App.css";
import Main from "./Main";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/log" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
