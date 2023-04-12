import { createSlice } from "@reduxjs/toolkit";
const Files = createSlice({
  name: "files",
  initialState: {
    downloading: false,
    loading: false,
    files: [],
  },
  reducers: {
    setFiles(state, action) {
      state.files = action.payload;
    },
    setFilesLoading(state, action) {
      state.loading = action.payload;
    },
    setFileDownloading(state, action) {
      state.downloading = action.payload;
    },
  },
});
export const { setFiles, setFilesLoading, setFileDownloading } = Files.actions;
export default Files.reducer;
