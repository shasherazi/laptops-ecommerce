import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice';
import selectedProductReducer from './products/selectedProductSlice'; 

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetails: selectedProductReducer,
  },
});

export default store;
