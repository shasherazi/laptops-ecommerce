import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const productUrl = 'http://127.0.0.1:3000/laptops';
const initialState = {
  products: [],
  product: [],
  isLoading: false,
  isError: false,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch(productUrl);

    const products = await response.json();
    return products;
  } catch (err) {
    return err;
  }
});

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {
  try {
    const response = await fetch(productUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('Authorization')}`,
      },
      body: JSON.stringify({
        laptop: newProduct,
      }),
    });
    const addedProduct = await response.json();
    return addedProduct;
  } catch (err) {
    return err;
  }
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
  try {
    const response = await fetch(`${productUrl} / ${productId}`, {
      method: 'DELETE',
    });
    return response;
  } catch (err) {
    return err;
  }
});

export const singleProduct = createAsyncThunk('products/getPruduct', async (productId) => {
  try {
    const response = await fetch(`${productUrl}/${productId}`);
    const product = await response.json();
    return product;
  }
  catch (err) {
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
      }))

      // getProductsingle
      .addCase(singleProduct.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
      }))
      .addCase(singleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.product = [action.payload];
      })
      .addCase(singleProduct.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export default productSlice.reducer;
