import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk("user/login", async (payload, thunkApi) => {
  try {
    const res = await axios.post("api/auth/login", { ...payload });
    localStorage.user = JSON.stringify(res.data);

    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access_token}`;
    toast.success(`welcome ${res.data.user.fullname}`);

    return res.data;
  } catch (err) {
    toast.error("wrong email or password");
    return thunkApi.rejectWithValue("wrong email or password");
  }
});

export const fetchUsers = createAsyncThunk("users/fetch", async (_payload, thunkApi) => {
  try {
    const res = await axios("/api/auth/getAllUsers");
    return res.data;
  } catch (err) {
    toast.error(err.message);
    return thunkApi.rejectWithValue(err.message);
  }
});

export const registerUser = createAsyncThunk(
  "user/register",
  async (payload, thunkApi) => {
    try {
      const params = {
        fullname: payload.name,
        address: payload.address,
        email: payload.email,
        phonenumber: payload.phone,
        role: "client",
      };
      const res = await axios.post("/api/auth/register", params);
      toast.success("registered successfully");
      payload.navigate("/dashboard");

      return res.data;
    } catch (err) {
      if (err.response.data === '{"email":["The email has already been taken."]}') {
        toast.error("The email has already been taken");
        return thunkApi.rejectWithValue("The email has already been taken");
      }
      toast.error("something went wrong");
      return thunkApi.rejectWithValue("something went wrong");
    }
  }
);
