import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [], // This will hold the job data
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    fetchJobsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchJobsSuccess(state, action) {
      state.loading = false;
      state.jobs = action.payload;
    },
    fetchJobsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers as needed
  },
});

export const {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
  // Add more action creators here
} = jobSlice.actions;

export default jobSlice.reducer;
