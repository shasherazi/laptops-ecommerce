import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ReservationPage from "./pages/ReservationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/productdetail/:productId" element={<ProductDetailsPage />} />
        <Route path="/my-reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
