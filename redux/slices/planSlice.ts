import { createSlice } from "@reduxjs/toolkit";
const text = "Select a suitable plan for your health insurance today";
const initialState = {
  propertyInsurance: {
    type: "Basic",
    text,
    price: 50.0,
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state: any, action: any) => {
      state.products = action.payload;
    },
  },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
