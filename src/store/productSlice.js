import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: 'idle'
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
    extraReducers : (builder) => {
      builder
      .addCase(getProducts.pending , (state, action) => {
        state.status = 'loading'
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle"
      })
      .addCase(getProducts.rejected , (state, action) => {
        state.status = 'error'
      })
    }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});