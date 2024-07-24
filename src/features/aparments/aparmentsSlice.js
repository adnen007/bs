import { createSlice } from "@reduxjs/toolkit";
import {
  fetchApartments,
  createApartment,
  editApartment,
  deleteApartment,
} from "./aparmentsAsync";

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
  current_building: null,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    currentBuilding: (state, { payload }) => {
      state.current_building = payload;
    },
    filter_apartments: (state, { payload }) => {
      const filterdApartments = state.apartments_list.filter((el) => {
        return el.description.includes(payload);
      });

      state.filtered_apartments_list = [...filterdApartments];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApartments.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.apartments_list = [...payload];
        state.filtered_apartments_list = [...payload];
      })
      .addCase(fetchApartments.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createApartment.pending, (state) => {
        state.create_apartment.loading = true;
      })
      .addCase(createApartment.fulfilled, (state, { payload }) => {
        state.create_apartment.loading = false;
        state.create_apartment.created_apartment = { ...payload };
      })
      .addCase(createApartment.rejected, (state, { payload }) => {
        state.create_apartment.loading = false;
        state.create_apartment.error = payload;
      })
      .addCase(editApartment.pending, (state) => {
        state.edit_apartment.loading = true;
      })
      .addCase(editApartment.fulfilled, (state, { payload }) => {
        state.edit_apartment.loading = false;
        state.edit_apartment.edited_apartment = { ...payload };
      })
      .addCase(editApartment.rejected, (state, { payload }) => {
        state.edit_apartment.loading = false;
        state.edit_apartment.error = payload;
      })
      .addCase(deleteApartment.pending, (state) => {
        state.delete_apartment.loading = true;
      })
      .addCase(deleteApartment.fulfilled, (state) => {
        state.delete_apartment.loading = false;
      })
      .addCase(deleteApartment.rejected, (state, { payload }) => {
        state.delete_apartment.loading = false;
        state.delete_apartment.error = payload;
      });
  },
});

export const apartmentsActions = apartmentsSlice.actions;
export default apartmentsSlice.reducer;
