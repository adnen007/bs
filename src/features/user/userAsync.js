import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk("user/login", async (payload, thunkApi) => {
  try {
    const res = await axios.post("api/auth/login", { ...payload });
    localStorage.user = JSON.stringify(res.data);
    toast.success(`welcome ${res.data.user.fullname}`);
    return res.data;
  } catch (err) {
    toast.error(err.response.data.error);
    return thunkApi.rejectWithValue(err.response.data.error);
  }
  // so here because we have try-catch it will catch the error which mean the call back function
  // will compelete its execution and return undefined which mean the promise will get resolved.
});

// createAsyncThunk will return a function that has the action creators as propertyies.
// when you call that function with argument and dispatch the result
// that argument will be the argument of the callback function in the createAsyncThunk.
//
// and the result is a function called thunk. when you dispatch that function the callback funtion will get
// execute. then thunk will dispatch the pending action.
// and will wait the result of the call back if the result (it is a promise) get fullfield it dispatch
// the fullfiled action, if it gets reject, the rejected action will get dispatched
