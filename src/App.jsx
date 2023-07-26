import "./App.css";
import Splash from "./pages/Splash";
// import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
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
