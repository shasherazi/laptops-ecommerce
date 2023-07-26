import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./test/testSlice";
import userSlice from "./user/userSlice";
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productSlice';
import selectedProductReducer from './products/selectedProductSlice'; 

const store = configureStore({
  reducer: {
    test: testSlice,
    user: userSlice,
    products: productReducer,
    productDetails: selectedProductReducer,
  },
});

export default store;
