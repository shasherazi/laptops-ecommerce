import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/reservation.css';
import { useParams } from 'react-router-dom';
import { addReservation } from '../redux/reservations/reservationSlice';
import { singleProduct  } from '../redux/products/productSlice';

const Reservation = () => {
  const { productId } = useParams();
  const laptop_id = productId;
  const newProductId = parseInt(productId, 10);

  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.reservations.isLoading);
  const isError = useSelector((state) => state.reservations.isError);

  const productSingle = useSelector((state) => state.products.product[0] || {});

  useEffect(() => {
    // Fetch product details based on productId
    dispatch(singleProduct(newProductId))
      .catch((error) => console.error(error));
  }, [dispatch, newProductId]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newReservation = { city, quantity, laptop_id };
      await dispatch(addReservation(newReservation));

      toast.success('Reservation added successfully!');
      setCity('');
      setQuantity(0); 
    } catch (err) {
      // Error handling
    }
  };

  return (
    <div className='reserve-section'>
      <h1>Reserve a Laptop Of {productSingle.name}</h1>
      <hr />
      <p>This {productSingle.name} cost ${productSingle.price} and Have memory of {productSingle.memory} also with disk of {productSingle.storage}</p>
      <div className="button-container">
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter city' value={city} onChange={handleCityChange} />
          <input type='number' placeholder='Enter quantity' min="1" value={quantity} onChange={handleQuantityChange} />
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Reserve'}
          </button>
        </form>
        {isError && <p className="error-message">Error occurred while adding reservation.</p>}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Reservation;
