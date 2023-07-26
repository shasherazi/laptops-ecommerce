import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import "./App.css";
import Splash from "./pages/Splash";
// import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/header/Header";
import Home from './pages/Home'
import menu from './assets/menu.png'
import './style/home.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
      <>
      
      <main>
      <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <section className='main-content'>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <img
          src={menu}
          className='menu'
          onClick={toggleMenu}
        />
      </section>
    </main>
      
      </>
    <BrowserRouter>
        <Routes>
          <Route exact path="/Homepage" element={<HomePage />} />
          <Route path="/Homepage/productdetail/:productId" element={<ProductDetailsPage />} />
          <Route path="/" element={<Splash />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
    </BrowserRouter>
  );
}
export default App;


