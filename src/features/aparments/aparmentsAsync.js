import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApartments = createAsyncThunk(
  "fetch/apartments",
  async (payload, thunkApi) => {
    try {
      const res = await axios("/api/appartement/index");
      // note we will use the payload(or the id) after telling ghasen to fix this
      return res.data;
    } catch (err) {
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
