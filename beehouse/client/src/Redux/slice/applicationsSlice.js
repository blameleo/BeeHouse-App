import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [], // This will hold the job data
  loading: false,
  error: null,
};

const applicationsSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    fetchApplicationStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchApplicationSuccess(state, action) {
      state.loading = false;
      state.applications = action.payload;
    },
    fetchApplicationFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers as needed
  },
});

export const {
  fetchApplicationStart,
  fetchApplicationSuccess,
  fetchApplicationFailure,
  // Add more action creators here
} = applicationsSlice.actions;

export default applicationsSlice.reducer;
