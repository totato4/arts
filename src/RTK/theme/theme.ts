/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { Itheme } from "./types";

const initialState: Itheme = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
