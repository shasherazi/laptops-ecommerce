import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from "./pages/Splash";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
