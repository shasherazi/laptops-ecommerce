import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/header/Header";
import menu from './assets/menu.png'
import './style/home.css'
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ReservationPage from "./pages/ReservationPage";

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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/productdetail/:productId" element={<ProductDetailsPage />} />
          </Routes>
          <img
            src={menu}
            className='menu'
            onClick={toggleMenu} />
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
          <Route path="/my-reservation" element={<ReservationPage />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;


