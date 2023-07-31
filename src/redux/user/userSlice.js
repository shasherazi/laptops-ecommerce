import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  Authorization: localStorage.getItem("Authorization") || "",
  isAdmin: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload.email,
      };
    },
    setName: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
      };
    },
    logout: (state) => {
      localStorage.removeItem("Authorization");
      return {
        ...state,
        email: "",
        Authorization: "",
        isAdmin: false,
      };
    },
    setToken: (state, action) => {
      localStorage.setItem("Authorization", action.payload);
      return {
        ...state,
        Authorization: action.payload,
      };
    },
    setIsAdmin: (state, action) => {
      return {
        ...state,
        isAdmin: action.payload,
      };
    },
  },
});

export const { setEmail, setName, logout, setToken, setIsAdmin } = usersSlice.actions;

export default usersSlice.reducer;
