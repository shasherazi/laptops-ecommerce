import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Main from "./pages/MainContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;