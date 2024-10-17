import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
export const fetchApartments = createAsyncThunk(
  "fetch/apartments",
  async (payload, thunkApi) => {
    try {
      const res = await axios(`/api/appartement/index/${payload}`);
      // note we will use the payload(or the id) after telling ghasen to fix this
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const createApartment = createAsyncThunk(
  "create/apartment",
  async (payload, thunkApi) => {
    const defaultValues = { parking: 4 };

    const params = {
      description: payload.tenant_name,
      numero: payload.phone,
      prix: payload.rent,
      etage: payload.apartment_address,
      immeubles_id: payload.buildingId,
    };

    try {
      const res = await axios.post("/api/appartement/store", {
        ...defaultValues,
        ...params,
      });
      toast.success("created successfully");
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const editApartment = createAsyncThunk(
  "edit/apartment",
  async (payload, thunkApi) => {
    const defaultValues = { parking: 4 };

    const params = {
      description: payload.tenant_name,
      numero: payload.phone,
      prix: payload.rent,
      etage: payload.apartment_address,
    };
    //   immeuble_id: payload.buildingId, ADD THIS WHEN GHASEN FIX THE API
    try {
      const res = await axios.post(`/api/appartement/update/${payload.id}`, {
        ...defaultValues,
        ...params,
      });
      toast.success("updated successfully");
      payload.navigate("/apartments");
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteApartment = createAsyncThunk(
  "delete/apartment",
  async (payload, thunkApi) => {
    // later I may get the building id too  WHEN GHASEN FIX THE API
    try {
      // this method should be changed from post to delete
      // const res = await axios.post(`/api/appartement/delete/${payload.id}`);
      toast.success("deleted successfully");
      payload.navigate("/apartments");
      return "deleted successfully";
    } catch (err) {
      toast.error(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

// ok again here I used the createAsyncthunk method it helped me to create function and object that
// i will use to run the thunk middleware.

// after giving it the needed input it will return a function.
// that function has action creators at its properties.

// also when you call that function with a argument it will return another function and when
// you dispatch that function it will run the callback fn in the createAsyncThunk with that argument.
// and it will first dispatch the pending action.
// then watch the returned promise and dispatch fullfield or reject depending on the promise state.
