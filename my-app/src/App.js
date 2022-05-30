import "./App.css";
import Main from "./Main";
import Login from "./Login";
import { Register } from "./register";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/log" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
