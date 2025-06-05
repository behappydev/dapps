import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/productService";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const data = await fetchProducts();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => { state.status = "loading"; })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state) => { state.status = "failed"; });
  }
});
export default productsSlice.reducer;
