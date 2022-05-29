import "./App.css";
import Main from "./Main";
import Login from "./Login";
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
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
