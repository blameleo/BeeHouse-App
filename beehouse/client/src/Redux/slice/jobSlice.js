import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filteredJobs: [],
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
    searchJobs: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredJobs = state.jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
  searchJobs,
} = jobSlice.actions;

export default jobSlice.reducer;
