import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReservations, removeReservation } from '../redux/reservations/reservationSlice';
// import { fetchProducts } from '../redux/products/productSlice';
// import laptop_reserveSlice, { fetchLaptopReservations } from '../redux/reservations/laptop_reserveSlice';
import './reservationPage.css';

export default function ReservationPage() {
  const dispatch = useDispatch();
  const { reservations, isLoading, isError } = useSelector((store) => store.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleRemoveReservation = (reservationId) => {
    dispatch(removeReservation(reservationId));
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  } if (isError) {
    return <h3>Something went wrong...</h3>;
  }

  return (
    <section className='reservation'>
      <h1>Reservation List</h1>
      <div className='reservation-new'>
        <Link to="/">
              <button type='button'>Add Reservation</button>
        </Link>
      </div>
      {reservations.map((reservation) => (
        <div key={reservation.id} className='reservation-list'>
          <div className='reservation-list-info'>
            <p>ID: {reservation.id}</p>
            <button type='button' onClick={() => handleRemoveReservation(reservation.id)}>Remove</button>
          </div>
        </div>
      ))}
    </section>
  );
}
