/*eslint-disable*/
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReservationPage from '../pages/ReservationPage';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore([]);

describe('ReservationPage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        isLogin: true,
      },
      reservations: {
        reservations: [
          {
            reservation: {
              id: 1,
            },
            laptop: {
              name: 'Laptop 1',
            },
            laptop_reservation: {
              city: 'City 1',
              quantity: 2,
            },
          },
          {
            reservation: {
              id: 2,
            },
            laptop: {
              name: 'Laptop 2',
            },
            laptop_reservation: {
              city: 'City 2',
              quantity: 3,
            },
          },
        ],
        isLoading: false,
        isError: false,
      },
    });
  });

  test('renders reservation list', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ReservationPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Reservation List')).toBeInTheDocument();
    expect(screen.getByText('Laptop 1')).toBeInTheDocument();
    expect(screen.getByText('City: City 1')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    expect(screen.getByText('Laptop 2')).toBeInTheDocument();
    expect(screen.getByText('City: City 2')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 3')).toBeInTheDocument();
  });
});
