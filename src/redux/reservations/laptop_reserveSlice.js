import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const laptop_reservationAllurl = 'http://127.0.0.1:3000/laptop_reservations';
const laptop_reservationAllurl = 'https://laptop-ecommerce-webservice.onrender.com/laptop_reservations';

const initialState = {
  laptop_reservations: [],
  isLoading: false,
  isError: false,
};

export const fetchLaptopReservations = createAsyncThunk('laptop_reservations/fetchLaptopReservations', async () => {
  try {
    const response = await fetch(laptop_reservationAllurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('Authorization')}`,
      },
      body: JSON.stringify(),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch laptop reservations');
    }
    const laptop_reservations = await response.json();
    return laptop_reservations;
  } catch (err) {
    return `Failed to fetch laptop reservations: ${err.message}`;
  }
});


const laptop_reserveSlice = createSlice({
  name: 'laptop_reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaptopReservations.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchLaptopReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.laptop_reservations = action.payload;
      })
      .addCase(fetchLaptopReservations.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default laptop_reserveSlice.reducer;
