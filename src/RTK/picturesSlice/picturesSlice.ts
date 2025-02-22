/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PictureSliceState } from "./types";

const initialState: PictureSliceState = {
  pictures: [],
};

export const picturesSlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    setPictures(state, action) {
      state.pictures = action.payload;
    },
  },
});

export const { setPictures } = picturesSlice.actions;
export default picturesSlice.reducer;
