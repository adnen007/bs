import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBuildings,
  createBuilding,
  deleteBuilding,
  editBuilding,
} from "./buildingsAsync";

const initialState = {
  loading: true,
  buildings_list: [],
  filtered_buildings_list: [],
  error: null,
  create_building: {
    loading: false,
    created_building: {},
    error: null,
  },
  delete_building: {
    loading: false,
    error: null,
  },
  edit_building: {
    loading: false,
    edited_building: {},
    error: null,
  },
};

const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {
    filter_buildings: (state, { payload }) => {
      const filterdBuildings = state.buildings_list.filter((el) => {
        return el.nom.includes(payload);
      });

      state.filtered_buildings_list = filterdBuildings;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuildings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBuildings.fulfilled, (state, { payload }) => {
        state.buildings_list = [...payload];
        state.filtered_buildings_list = [...payload];
        state.loading = false;
      })
      .addCase(fetchBuildings.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(createBuilding.pending, (state) => {
        state.create_building.loading = true;
      })
      .addCase(createBuilding.fulfilled, (state, { payload }) => {
        state.create_building.loading = false;
        state.create_building.created_building = payload;
      })
      .addCase(createBuilding.rejected, (state, { payload }) => {
        state.create_building.loading = false;
        state.create_building.error = payload;
      })
      .addCase(deleteBuilding.pending, (state) => {
        state.delete_building.loading = true;
      })
      .addCase(deleteBuilding.fulfilled, (state) => {
        state.delete_building.loading = false;
      })
      .addCase(deleteBuilding.rejected, (state, { payload }) => {
        state.delete_building.loading = false;
        state.delete_building.error = payload;
      })
      .addCase(editBuilding.pending, (state) => {
        state.edit_building.loading = true;
      })
      .addCase(editBuilding.fulfilled, (state, { payload }) => {
        state.edit_building.loading = false;
        state.edit_building.edited_building = payload;
      })
      .addCase(editBuilding.rejected, (state, { payload }) => {
        state.edit_building.loading = false;
        state.edit_building.error = payload;
      });
  },
});

export default buildingsSlice.reducer;
export const buildingsActions = buildingsSlice.actions;

// first option I'll get all the list and do the filtering in there,
// second on every change i should show loading, then dispatch the filtered

// so what should happen
// frist you type something
// this mean the input will change
// this will trigger callback fn wich by its turn will triger a dispatch function, that dispatch function
// will get the main list and filter it in each type
// something else
