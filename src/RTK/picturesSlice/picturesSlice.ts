/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PictureSliceState } from "./types";

const initialState: PictureSliceState = {
  pictures: [],
  authors: [],
  locations: [],
};

export const picturesSlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    setPictures(state, action) {
      state.pictures = action.payload;
    },
    setLocations(state, action) {
      state.locations = action.payload;
    },
    setAuthors(state, action) {
      state.authors = action.payload;
    },
  },
});

export const { setPictures, setLocations, setAuthors } = picturesSlice.actions;
export default picturesSlice.reducer;
