import { createSlice } from "@reduxjs/toolkit";
const Popup = createSlice({
  name: "popup",
  initialState: {
    popupOpen: false,
    popupComponent: null,
    popupCenterOpen: false,
    popupCenterComponent: null,
  },
  reducers: {
    setPopupOpen(state, action) {
      state.popupOpen = action.payload;
    },
    setPopupComponentRender(state, action) {
      state.popupComponent = action.payload;
    },
    setPopupCenterOpen(state, action) {
      state.popupCenterOpen = action.payload;
    },
    setPopupCenterComponentRender(state, action) {
      state.popupCenterComponent = action.payload;
    },
  },
});
export const {
  setPopupCenterComponentRender,
  setPopupComponentRender,
  setPopupCenterOpen,
  setPopupOpen,
} = Popup.actions;
export default Popup.reducer;
