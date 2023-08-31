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

function Jobs() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user);
  const getJobs = async () => {
    dispatch(fetchJobsStart());
    try {
      const response = await axios.get("http://localhost:4000/jobs/getjobs");
      dispatch(fetchJobsSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch(fetchJobsFailure(error.message));
    }
  };
  const jobs = useSelector((state) => state.job.jobs);
  const loading = useSelector((state) => state.job.loading);
  const error = useSelector((state) => state.job.error);
  console.log(jobs);

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
      <div className="   md:ml-[400px] md:w-[75%]  ">
        <div className="py-1   fixed top-32 z-10 bg-white w-full  sm:left-[400px]">
          <h1 className="text-md font-black">Popular Jobs</h1>
        </div>

        {loading ? (
          <Loader loaderStyle="  h-[100vh] grid place-items-center yellow-500" />
        ) : jobs == false ? (
          <p className="text-black ">There are no jobs available</p>
        ) : (
          <div className="flex flex-wrap sm:px-8 ">
            {jobs.map((job) => {
              // const randomColor = getRandomColor();

              return <JobCard job={job} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
