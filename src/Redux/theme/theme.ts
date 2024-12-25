/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { Itheme } from "./types";

const initialState: Itheme = {
  theme: "white",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "white" ? "dark" : "white";
    },
  },
});

export const { changeTheme } = themeSlice.actions;
