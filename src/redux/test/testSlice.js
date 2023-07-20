import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment, decrement } = testSlice.actions;

export default testSlice.reducer;
