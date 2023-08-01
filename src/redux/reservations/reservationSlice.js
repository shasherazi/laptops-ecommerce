import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const reservationAllurl = 'http://127.0.0.1:3000/reservations';
const initialState = {
  reservations: [],
  isLoading: false,
  isError: false,
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  try {
    const response = await fetch(reservationAllurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('Authorization')}`,
      },
      body: JSON.stringify(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch reservations');
    }
    const reservations = await response.json();
    return reservations;
  } catch (err) {
    return `Failed to fetch reservations: ${err.message}`;
  }
});

export const addReservation = createAsyncThunk('reservations/addReservation', async (newReservation) => {
  try {
    const response = await fetch(reservationAllurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('Authorization')}`,
      },
      body: JSON.stringify({
        reservation: newReservation,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to add reservation');
    }
    const addedReservation = await response.json();
    return addedReservation;
  } catch (err) {
    return `Failed to fetch reservations: ${err.message}`;
  }
});

export const removeReservation = createAsyncThunk('reservations/removeReservation', async (reservationId) => {
  try {
    const response = await fetch(`${reservationAllurl}/${reservationId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('Authorization')}`,
      },
      body: JSON.stringify(),
    });
    if (!response.ok) {
      throw new Error('Failed to remove reservation');
    }
    return reservationId;
  } catch (err) {
    return `Failed to fetch reservations: ${err.message}`;
  }
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addReservation.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.reservations.push(action.payload);
      })
      .addCase(addReservation.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(removeReservation.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.reservations = state.reservations.filter((reservation) => reservation.reservation.id !== action.payload);
      })
      .addCase(removeReservation.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default reservationSlice.reducer;
