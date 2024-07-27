import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchBuildings = createAsyncThunk(
  "fetch_buildings",
  async (payload, thunkApi) => {
    try {
      const res = await axios(`/api/immeuble/index/${payload}`);

      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const createBuilding = createAsyncThunk(
  "create_building",
  async (payload, thunkApi) => {
    try {
      // these are extra value asking ghasen to get red of them or atleast make them not required

      const extraValue = {
        code_postal: "2036",
        superficie: 500,
        nombre_etage: 9,
      };

      const {
        name: nom,
        city: ville,
        apartments: nombre_appartement,
        address: adresse,
        user_id,
      } = payload;

      const res = await axios.post("/api/immeuble/create", {
        ...extraValue,
        nom,
        ville,
        nombre_appartement,
        adresse,
        user_id,
      });
      toast.success("building got created");
      payload.navigate("/buildings");
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteBuilding = createAsyncThunk(
  "delete_building",
  async (payload, thunkApi) => {
    try {
      const res = await axios.delete(`/api/immeuble/delete/${payload.id}`);
      toast.success(res.data);
      payload.navigate("/buildings");
      return res.data;
    } catch (err) {
      toast.error(err.message);

      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const editBuilding = createAsyncThunk(
  "edit_building",
  async (payload, thunkApi) => {
    const extraValue = {
      code_postal: "2036",
      superficie: 500,
      nombre_etage: 9,
    };

    const {
      name: nom,
      city: ville,
      apartments: nombre_appartement,
      address: adresse,
      id,
      userId: user_id,
    } = payload;

    try {
      const res = await axios.post(`/api/immeuble/update/${payload.id}`, {
        ...extraValue,
        nom,
        ville,
        nombre_appartement,
        adresse,
        id,
        user_id,
      });

      toast.success("updated successfully");
      payload.navigate("/buildings");
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
