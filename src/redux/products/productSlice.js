import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import demoData from '../../demo/demo.json';

const productUrl = demoData;
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    // const response = await fetch(productUrl);
    // const products = await response.json();
    return productUrl;
  } catch (err) {
    return err;
  }
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
      }))
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const newStacks = [];
        action.payload.map((product) => (
          newStacks.push({
            id: product.id,
            name: product.name,
            price: product.price,
            picture: product.picture,
          })
        ));
        return ({
          ...state,
          isLoading: false,
          isError: false,
          products: newStacks,
        });
      })
      .addCase(fetchProducts.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export default productSlice.reducer;
