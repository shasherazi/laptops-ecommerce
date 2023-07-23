import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
