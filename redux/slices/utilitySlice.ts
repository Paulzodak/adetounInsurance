import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  utilitySearch: "",
  showSearch: false,
  saveRoute: undefined,
};
export const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    setUtilitySearch: (state: any, action: any) => {
      state.utilitySearch = action.payload;
    },
    // setShowSearch:
    setSaveRoute: (state: any, action) => {
      state.saveRoute = action.payload;
    },
    clearSavedRoute: (state: any) => {
      state.saveRoute = "";
    },
  },
});
export const { setUtilitySearch, setSaveRoute, clearSavedRoute } =
  utilitySlice.actions;
export default utilitySlice.reducer;
