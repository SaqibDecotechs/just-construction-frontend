import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  allUsers: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setAllUser: (state, action) => {
      state.allUsers = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, clearUser, setAllUser } = authSlice.actions;

export const getUser = (state) => state.auth.user;

export default authSlice.reducer;
