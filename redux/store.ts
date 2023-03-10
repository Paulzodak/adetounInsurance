import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import utilitySlice from "./slices/utilitySlice";
import productSlice from "./slices/productSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    utilities: utilitySlice,
    products: productSlice,
  },
});
