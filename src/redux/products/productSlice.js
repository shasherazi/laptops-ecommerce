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

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {
  try {
    // Here, you would make a POST request to your API endpoint to add the new product
    // For now, we'll simulate the addition of a product to the demo data
    // Assume that `newProduct` is an object containing the details of the new product (id, name, price, picture, etc.)
    return newProduct;
  } catch (err) {
    return err;
  }
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
  try {
    // Here, you would make a DELETE request to your API endpoint to delete the product with the given `productId`
    // For now, we'll simulate the deletion of a product from the demo data
    return productId;
  } catch (err) {
    return err;
  }
});



export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
    // fetchProducts start state
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
      }))
      // addProduct start state
      .addCase(addProduct.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
      }))
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }))
      // deleteProduct start state
      .addCase(deleteProduct.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
      }))
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = state.products.filter((product) => product.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export default productSlice.reducer;
