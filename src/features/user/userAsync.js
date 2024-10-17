import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk("user/login", async (payload, thunkApi) => {
  try {
    const res = await axios.post("api/auth/login", { ...payload });
    localStorage.user = JSON.stringify(res.data);

    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access_token}`;
    toast.success(`welcome ${res.data.user.fullname}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    toast.error("wrong email or password");
    return thunkApi.rejectWithValue("wrong email or password");
  }
});

export const fetchUsers = createAsyncThunk("users/fetch", async (_payload, thunkApi) => {
  try {
    const res = await axios("/api/auth/getAllUsers");
    return res.data.filter((el) => el.role === "client");
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

export const editUser = createAsyncThunk("edit/user", async (payload, thunkApi) => {
  const params = {
    phonenumber: payload.phonenumber,
    address: payload.address,
    email: payload.email,
    fullname: payload.fullname,
  };

  try {
    const res = await axios.post(`/api/auth/updateUser/${payload.id}`, params);
    toast.success("edit successfully");
    payload.navigate("/dashboard");
    return res.data;
  } catch (err) {
    toast.error("something went wrong");

    payload.navigate("/dashboard");
    return thunkApi.rejectWithValue(err.message);
  }
});

export const resetPassword = createAsyncThunk(
  "reset_password",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post("/api/auth/resetPassword", payload);
      toast.success("the client got his new password ");
      return { ...res.data, email: payload.email };
    } catch (err) {
      toast.error("something went wrong");
      return thunkApi.rejectWithValue({ email: payload.email, error: err.message });
    }
  }
);

export const deleteUser = createAsyncThunk("delete_user", async (payload) => {
  try {
    // const res = await axios.delete(`/api/auth/deleteUser/${payload}`);
    toast.success("deleted successfully ");
    console.log(payload);
    return "deleted successfully";
  } catch (err) {
    toast.error("something went wrong");
    return "something went wrong";
  }
});
