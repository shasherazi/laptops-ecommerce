/*eslint-disable*/
import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render /*,fireEvent */} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import ReservationPage from '../pages/ReservationPage';
// import { fetchReservations, removeReservation } from '../redux/reservations/reservationSlice';
import { MemoryRouter } from 'react-router-dom';


const mockStore = configureStore([]);

describe('ReservationPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      reservations: {
        reservations: [
          {
            id: 1,
            productName: 'Product 1',
            city: 'City 1',
            quantity: 2,
          },
          {
            id: 2,
            productName: 'Product 2',
            city: 'City 2',
            quantity: 3,
          },
        ],
        isLoading: false,
        isError: false,
      },
    });

    store.dispatch = jest.fn();

    component = render(
      
      <Provider store={store}>
          <MemoryRouter>
        <ReservationPage />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should dispatch fetchReservations action on mount', () => {
    expect(store.dispatch).toHaveBeenCalledWith(fetchReservations());
  });

  it('should display reservation list', () => {
    expect(component.getByText('Product 1')).toBeInTheDocument();
    expect(component.getByText('City: City 1')).toBeInTheDocument();
    expect(component.getByText('Quantity: 2')).toBeInTheDocument();
    expect(component.getByText('Product 2')).toBeInTheDocument();
    expect(component.getByText('City: City 2')).toBeInTheDocument();
    expect(component.getByText('Quantity: 3')).toBeInTheDocument();
  });

  it('should dispatch removeReservation action on remove button click', () => {
    fireEvent.click(component.getAllByText('Remove')[0]);
    expect(store.dispatch).toHaveBeenCalledWith(removeReservation(1));
  });
});