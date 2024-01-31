import { createSlice, current } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: JSON.parse(localStorage.getItem("products"))
    ? JSON.parse(localStorage.getItem("products"))
    : [],
};

export const fetchProductData = createAsyncThunk(
  "fetchProductData",
  async () => {
    const result = await axios.get("https://v1.nocodeapi.com/oyinda/google_sheets/rZkUYyHuNZRYNTyE?tabId=products");
    console.log(result.data.data);
    let productData = JSON.stringify(result.data.data);
    localStorage.setItem("products", productData);
    return result.data.data;
  }
);

const productSlice = createSlice({
  name: "getProductSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      console.log("reducer", action);

      (state.loading = false),(state.products = action.payload);
    });
  },
});

export default productSlice.reducer;
