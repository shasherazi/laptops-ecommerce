import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, removeReservation } from '../redux/reservations/reservationSlice';
import './ReservationPage.css';

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
        <button type='button'> Abb New Reservation</button>
      </div>
      {reservations.map((reservation) => (
        <div key={reservation.id} className='reservation-list'>
          <div className='reservation-list-info'>
            <h3>{reservation.productName}</h3>
            <p>City: {reservation.city}</p>
            <p>Quantity: {reservation.quantity}</p>
            <button type='button' onClick={() => handleRemoveReservation(reservation.id)}>Remove</button>
          </div>
        </div>
      ))}
    </section>
  );
}
