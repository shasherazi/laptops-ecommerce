import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import demoData from "../../demo/demo.json";
// import axios from "axios";

const productDetailsUrl = demoData;

const initialState = {
  productDetails: [],
  isLoading: false,
  isError: false,
  fetched: false,
};

export const fetchProductDetails = createAsyncThunk('productDetails/fetchProductDetails', async () => {
  try {
    // const response = await axios.get(productDetailsUrl);
    // const productDetails = await response.data;
    return productDetailsUrl;
  } catch (err) {
    return err.message;
  }
});

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductDetails.pending, (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }))
    .addCase(fetchProductDetails.fulfilled, (state, action) => {
      const newStacks = [];
      action.payload.map((product) => (
        newStacks.push({
          id: product.id,
          name: product.name,
          price: product.price,
          picture: product.picture,
          cpu: product.cpu,
          memory: product.memory,
          storage: product.storage,
        })
      ));
      return ({
        ...state,
        isLoading: false,
        isError: false,
        fetched: true,
        productDetails: newStacks,
      });
    })
    .addCase(fetchProductDetails.rejected, (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }));
  },
});

export default productDetailsSlice.reducer;