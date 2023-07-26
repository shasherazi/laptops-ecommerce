import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice';
import selectedProductReducer from './products/selectedProductSlice'; 
import reservationReducer from './reservations/reservationSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: selectedProductReducer,
    reservations: reservationReducer,
  },
});

export default store;
