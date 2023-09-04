import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import jobReducer from "../slice/jobSlice";
import applicationsReducer from "../slice/applicationsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    application: applicationsReducer,
    // ... other reducers
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
