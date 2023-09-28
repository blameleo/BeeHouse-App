import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
  filteredJobs: [],
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

    searchResult(state, action) {
      state.filteredJobs = action.payload;
    },
  },
});

export const {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
  searchResult,
} = jobSlice.actions;

export default jobSlice.reducer;
