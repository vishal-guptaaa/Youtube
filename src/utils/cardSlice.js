import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addVideos } = cardSlice.actions;

export default cardSlice.reducer;
