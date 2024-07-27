import { createSlice } from "@reduxjs/toolkit";
import {
  userLogin,
  fetchUsers,
  registerUser,
  editUser,
  resetPassword,
} from "./userAsync";
import axios from "axios";

var initialState = {
  access_token: "",
  user: {},
  loading: false,
  users_list: [],
  users_filtered_list: [],
  error: null,
  register_user: {
    loading: false,
    response: null,
  },
  edit_user: {
    loading: false,
    response: null,
  },
  reset_password: {
    loading: false,
    response: null,
  },
};

// here take from the local storage and save here.
if (localStorage.user) {
  const user = JSON.parse(localStorage.user).user;
  const access_token = JSON.parse(localStorage.user).access_token;
  initialState = {
    ...initialState,
    user,
    access_token,
  };

  axios.defaults.headers.common["Authorization"] = `Bearer ${initialState.access_token}`;
  setTimeout(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjE4MjQzNDAsImV4cCI6MTcyMTgyNzk0MCwibmJmIjoxNzIxODI0MzQwLCJqdGkiOiJXNVNFMjNjU3BFU2tPeWxvIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRi3MmRiN2E1OTc2ZjcifQ.MsZ_9eb_asejZ32NX4q1vm6WrTLyNKhJrvWXteXzwmM`;
  }, 3000);
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return {
        access_token: "",
        user: {},
        loading: false,
        users_list: [],
        users_filtered_list: [],
        error: null,
        register_user: {
          loading: false,
          response: null,
        },
        edit_user: {
          loading: false,
          response: null,
        },
        reset_password: {
          loading: false,
          response: null,
        },
      };
    },
    filterUsers: (state, { payload }) => {
      const filetredUsers = state.users_list.filter((el) => {
        return el.fullname.includes(payload);
      });
      state.users_filtered_list = filetredUsers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.access_token = payload.access_token;
        state.user = payload.user;
        state.loading = false;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users_list = payload;
        state.users_filtered_list = [...payload];
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.register_user.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.register_user.loading = false;
        state.register_user.response = payload;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.register_user.loading = false;
        state.register_user.response = payload;
      })
      .addCase(editUser.pending, (state) => {
        state.edit_user.loading = true;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.edit_user.loading = false;
        state.edit_user.response = payload;
      })
      .addCase(editUser.rejected, (state, { payload }) => {
        console.log(state);
        state.edit_user.loading = false;
        state.edit_user.response = payload;
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.reset_password.loading = action.meta.arg.email;
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.reset_password.loading = false;
        state.reset_password.response = payload;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.reset_password.loading = false;
        state.reset_password.response = payload;
      });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
