import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchReservationsAPI = async () => {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const demoReservations = [
    {
      id: 1,
      productName: 'Product A',
      city: 'New York',
      quantity: 2,
    },
    {
      id: 2,
      productName: 'Product B',
      city: 'Los Angeles',
      quantity: 1,
    },
    {
      id: 3,
      productName: 'Product C',
      city: 'Chicago',
      quantity: 3,
    },
  ];

  return demoReservations;
};

const addReservationAPI = async (newReservation) => {

  await new Promise((resolve) => setTimeout(resolve, 1000));


  const newReservationId = Math.floor(Math.random() * 1000);


  const addedReservation = {
    ...newReservation,
    id: newReservationId,
  };

  return addedReservation;
};


const removeReservationAPI = async (reservationId) => {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return reservationId;
};


export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  const response = await fetchReservationsAPI();
  return response;
});

export const addReservation = createAsyncThunk('reservations/addReservation', async (newReservation) => {
  const response = await addReservationAPI(newReservation);
  return response;
});

export const removeReservation = createAsyncThunk('reservations/removeReservation', async (reservationId) => {
  await removeReservationAPI(reservationId);
  return reservationId;
});


const initialState = {
  reservations: [],
  isLoading: false,
  isError: false,
};

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
        state.reservations = state.reservations.filter((reservation) => reservation.id !== action.payload);
      })
      .addCase(removeReservation.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default reservationSlice.reducer;
