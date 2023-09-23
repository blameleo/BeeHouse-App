import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobsFailure,
  fetchJobsStart,
  fetchJobsSuccess,
} from "../Redux/slice/jobSlice";
import Loader from "./Loader";
import JobCard from "./JobCard";
import { ToastContainer } from "react-toastify";

function Jobs() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // console.log(user);
  const getJobs = async () => {
    dispatch(fetchJobsStart());
    try {
      const response = await axios.get(
        `https://beehouse-backend-api.onrender.com/jobs/models/getjobs`
      );
      dispatch(fetchJobsSuccess(response.data));
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch(fetchJobsFailure(error.message));
    }
  };
  const jobs = useSelector((state) => state.job.jobs);
  const loading = useSelector((state) => state.job.loading);
  const error = useSelector((state) => state.job.error);
  // console.log(jobs);

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="mt-44    bg-contain bg-no   flex flex-col md:flex-row">
      <div className="  min-w-[350px] hidden md:block h-screen p-5 bg-white fixed left-0 ">
        <div className=" h-[200px] rounded-xl mb-4 bg-[url('/img/adpic.jpg')] bg-cover bg-no-repeat"></div>

        <div className="rounded-xl">
          <Filter />
        </div>
      </div>
      <div className="   md:ml-[250px] md:w-[75%]  ">
        <div className="py-1   fixed top-32 z-10 bg-white w-full  sm:left-[400px]">
          <h1 className="text-md font-black">Popular Jobs</h1>
        </div>

        {loading ? (
          <Loader loaderStyle="  h-[100vh] grid place-items-center yellow-500" />
        ) : (
          <div className="flex flex-wrap justify-center sm:px-8 ">
            {jobs.length === 0 ? (
              <p className="text-black text-[20px]">
                You have no jobs available
              </p>
            ) : (
              jobs.map((job, i) => {
                // const randomColor = getRandomColor();

                return <JobCard key={i} job={job} />;
              })
            )}
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Jobs;
