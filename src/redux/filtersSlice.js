import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
