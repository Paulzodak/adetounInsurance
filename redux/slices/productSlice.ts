import { createSlice } from "@reduxjs/toolkit";
import deodorant from "../../assets/products/deodorant.jpeg";
import beardoil from "../../assets/products/nora_beard_oil.jpeg";
import beardoil2 from "../../assets/products/nora_beard_oil_2.jpeg";
import perfume from "../../assets/products/nora_perfume.jpeg";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "@/utils/global";
const initialState = {
  products: undefined,
};
export const getProducts: any = createAsyncThunk("product/getProducts", () => {
  return axios
    .get(`${BASEURL}/product/fetchAllProducts`)
    .then((res) => {
      console.log(res);
      return res.data.products;
    })
    .catch((err) => console.log(err));
});
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state: any, action: any) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state: any) => {
      // state.loading = true;
    },
    [getProducts.fulfilled]: (state: any, action: any) => {
      state.products = action.payload;
      // state.loading = false;
    },
    [getProducts.pending]: (state: any) => {
      // state.loading = false;
    },
  },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
