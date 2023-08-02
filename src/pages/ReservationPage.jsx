/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchReservations, removeReservation } from '../redux/reservations/reservationSlice';
import './reservationPage.css';

const ReservationPage = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const { reservations, isLoading, isError } = useSelector((state) => state.reservations);
  const [resFetched, setresFetched] = useState(false);

  useEffect(() => {
    if (!resFetched) {
      dispatch(fetchReservations());
      setresFetched(true);
    }  
  }, [dispatch, resFetched]);
  
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
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div key={reservation.reservation.id} className='reservation-list'>
                <div className='reservation-list-info'>
                  {reservation.laptop ? (
                    <>
                      <h3>{reservation.laptop.name}</h3>
                      {reservation.laptop_reservation ? (
                        <>
                          <p>City: {reservation.laptop_reservation.city}</p>
                          <p>Quantity: {reservation.laptop_reservation.quantity}</p>
                        </>
                      ) : (
                        <p>Laptop reservation data not available</p>
                      )}
                    </>
                  ) : (
                    <p>Laptop data not available</p>
                  )}
                  <button type='button' onClick={() => handleRemoveReservation(reservation.reservation.id)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p>No reservations found.</p>
          )}
        </>
      ) : (
        <h3>Please login to see your reservations</h3>
      )}
    </section>
  );
}

export default ReservationPage;
