import { createSlice } from "@reduxjs/toolkit";
const User = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setUser } = User.actions;
export default User.reducer;
