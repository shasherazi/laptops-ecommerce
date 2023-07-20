import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./test/testSlice";

const store = configureStore({
  reducer: {
    test: testSlice,
  },
});

export default store;
