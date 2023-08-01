import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { fetchReservations, removeReservation } from '../redux/reservations/reservationSlice';
import './reservationPage.css';

export default function ReservationPage() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const { reservations, isLoading, isError } = useSelector((state) => state.reservations);

  useEffect(() => {
    if (reservations.length === 0)
   { dispatch(fetchReservations());}
  }, [dispatch, reservations]);

  const handleRemoveReservation = (reservationId) => {
    dispatch(removeReservation(reservationId));
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
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
    {isLogin ? (
      <>
      {reservations.map((reservation) => (
        <div key={reservation.reservation.id} className='reservation-list'>
          <div className='reservation-list-info'>
            <h3>{reservation.laptop.name}</h3>
            <p>City: {reservation.laptop_reservation.city}</p>
            <p>Quantity: {reservation.laptop_reservation.quantity}</p>
            <button type='button' onClick={() => handleRemoveReservation(reservation.reservation.id)}>Remove</button>
          </div>
        </div>
      ))}
      </>
    ) : (
      <h3>Please login to see your reservations</h3>
    )}
    </section>
  );
}
