import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Header from './components/header/Header';
import './style/home.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
