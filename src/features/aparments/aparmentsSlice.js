import { createSlice } from "@reduxjs/toolkit";
import { fetchApartments } from "./aparmentsAsync";

const initialState = {
  loading: true,
  apartments_list: [],
  filtered_apartments_list: [],
  error: null,
  create_apartment: {
    loading: false,
    created_apartment: {},
    error: null,
  },
  delete_apartment: {
    loading: false,
    error: null,
  },
  edit_apartment: {
    loading: false,
    edited_apartment: {},
    error: null,
  },
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApartments.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.apartments_list = [...payload];
      })
      .addCase(fetchApartments.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const apartmentsActions = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
