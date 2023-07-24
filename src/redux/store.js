import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./test/testSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    test: testSlice,
    user: userSlice,
  },
});

export default store;
