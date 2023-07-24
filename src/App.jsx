import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Header from './components/header/Header';
import './style/home.css'
import menu from './assets/menu.png'

function App() {
  return (
    <main>
      <Header />
      <section className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <img src={menu} className='menu' />
      </section>
    </main>
  );
}

export default App;
