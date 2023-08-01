import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productDetailsUrl = 'http://127.0.0.1:3000/laptops/';

const initialState = {
  productDetails: [],
  isLoading: false,
  isError: false,
  fetched: false,
};

export const fetchProductDetails = createAsyncThunk('productDetails/fetchProductDetails', async (productId) => {
  try {
    const response = await axios.get(productDetailsUrl + productId);
    const productDetails = await response.data;
    return productDetails;
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
      if (typeof action.payload === 'object') {
        const product = action.payload;
        newStacks.push({
          id: product.id,
          name: product.name,
          price: product.price,
          picture: product.picture,
          cpu: product.cpu,
          memory: product.memory,
          storage: product.storage,
        });
      } else if (Array.isArray(action.payload)) {
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
      }
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