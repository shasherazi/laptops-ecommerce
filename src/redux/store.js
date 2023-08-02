import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./test/testSlice";
import userSlice from "./user/userSlice";
import productReducer from './products/productSlice';
import selectedProductReducer from './products/selectedProductSlice'; 
import reservationReducer from './reservations/reservationSlice';
import LaptopReservations from "./reservations/laptop_reserveSlice";

const store = configureStore({
  reducer: {
    test: testSlice,
    user: userSlice,
    products: productReducer,
    productDetails: selectedProductReducer,
    reservations: reservationReducer,
    laptop_reservations: LaptopReservations,
  },
});

export default store;
