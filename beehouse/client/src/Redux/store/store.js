import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import jobReducer from "../slice/jobSlice";
import applicationsReducer from "../slice/applicationsSlice";
import notificationsReducer from "../slice/notificationsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    application: applicationsReducer,
    notification: notificationsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
