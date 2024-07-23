import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./userAsync";

var initialState = {
  access_token: "",
  user: {},
  loading: false,
};

// here take from the local storage and save here.
if (localStorage.user) {
  initialState = JSON.parse(localStorage.user);
}

const userSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    logout: () => {
      return {
        access_token: "",
        user: {},
        loading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        return { ...action.payload, loading: false };
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
