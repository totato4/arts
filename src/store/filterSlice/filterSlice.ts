/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  q: "",
  locationId: null,
  authorId: null,
  created_gte: "",
  created_lte: "",
  page: 1,
  limit: 6,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQ(state, action) {
      state.q = action.payload;
      state.page = 1;
    },
    setFilter(state, action) {
      Object.assign(state, action.payload);
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setQ, setFilter, setPage } = filterSlice.actions;
export default filterSlice.reducer;
