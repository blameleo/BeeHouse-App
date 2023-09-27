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
        `http://localhost:4000/jobs/models/getjobs`
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
    <div className="mt-44   grid sm:grid-cols-12 ">
      <div className=" hidden md:block col-span-2">
        {/* <div className="h-[200px] rounded-xl mb-4 bg-[url(${`/img/adpic.jpg`})] bg-contain bg-no-repeat border">
          <img src="/beehouse/client/public/img/adpic.jpg" alt="" />
        </div> */}

        <div className="rounded-xl">
          <Filter />
        </div>

        <img src="beehouse/client/public/img/beeimage.jpg" alt="" />
      </div>
      <div className="col-span-10   ">
        <div className="py-1 pl-4 fixed top-32  z-10 bg-white w-full ">
          <h1 className="text-md font-black pl-8 sm:px-0">Popular Jobs</h1>
        </div>

        {loading ? (
          <Loader loaderStyle="  h-[100vh] grid place-items-center " />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center overflow-scroll overflow-y-scroll">
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
