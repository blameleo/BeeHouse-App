import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // ... other reducers
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
