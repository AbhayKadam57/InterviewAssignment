import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: false,
    isLoading: false,
    errorMessage: [],
  },
  reducers: {
    RegisterUserStart: (state, action) => {
      state.isLoading = true;
    },
    RegisterUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
      state.errorMessage = [];
    },
    RegisterUserFailed: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    LoginUserStart: (state, action) => {
      state.isLoading = true;
    },
    LoginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.user = action.payload;
      state.errorMessage = [];
    },
    LoginUserFailed: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  RegisterUserStart,
  RegisterUserSuccess,
  RegisterUserFailed,
  LoginUserStart,
  LoginUserSuccess,
  LoginUserFailed,
} = UserSlice.actions;

export default UserSlice.reducer;
