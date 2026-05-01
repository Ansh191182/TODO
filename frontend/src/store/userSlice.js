import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const userSlilce = createSlice({
  name: "user",
  initialState,

  reducers: {
    userData: (state, action) => {
      return [action.payload, ...state];
    },
  },
});
export const { userData } = userSlilce.actions;
export default userSlilce.reducer;
