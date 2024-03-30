import { createSlice } from "@reduxjs/toolkit";

const moviesdataSlice = createSlice({
  name: "movie",
  initialState: {
    trendingmovies: null,
  },
  reducers: {
    addmovies: (state, action) => {
      state.trendingmovies = action.payload;
    },
    removemovies: (state) => {
      state.trendingmovies = null;
    },
  },
});

export const { addmovies, removemovies } = moviesdataSlice.actions;
export default moviesdataSlice.reducer;
