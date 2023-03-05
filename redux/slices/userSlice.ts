import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "Paul",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: () => {},
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
