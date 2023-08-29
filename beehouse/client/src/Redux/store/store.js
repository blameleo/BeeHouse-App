import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import jobReducer from "../slice/jobSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    // ... other reducers
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
