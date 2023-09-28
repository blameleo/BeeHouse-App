import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobsFailure,
  fetchJobsStart,
  fetchJobsSuccess,
  searchResult,
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
        `https://beehouse-backend-api.onrender.com/models/getjobs`
      );
      dispatch(fetchJobsSuccess(response.data));
      // console.log(response.data);
      dispatch(searchResult(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchJobsFailure(error.message));
    }
  };
  const jobs = useSelector((state) => state.job.jobs);
  const searchedJobs = useSelector((state) => state.job.filteredJobs);

  const loading = useSelector((state) => state.job.loading);
  const error = useSelector((state) => state.job.error);
  console.log(searchedJobs);

  useEffect(() => {
    getJobs();
  }, []);

  console.log(user);

  return (
    <div className="mt-40  fixed w-full   grid sm:grid-cols-12 ">
      <div className=" hidden lg:block col-span-3 ">
        {/* <div className="h-[200px] rounded-xl mb-4 bg-[url(${`/img/adpic.jpg`})] bg-contain bg-no-repeat border">
          <img src="/beehouse/client/public/img/adpic.jpg" alt="" />
        </div> */}

        <div className="rounded-xl">
          <Filter />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-9   ">
        <div className="py-1 pl-4 fixed top-32  z-30 bg-white w-full ">
          <ToastContainer />

          <h1 className="text-md font-black pl-8 sm:px-0 ">Popular Jobs</h1>
        </div>
        {/* <div className="  ">
          <div className="flex     ">
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
            <div className="border-2 border-purple-500 text-sm p-2 px-3 rounded-lg mr-4">
              family
            </div>
          </div>
        </div> */}

        {loading ? (
          <Loader loaderStyle="  h-[100vh] grid place-items-center " />
        ) : (
          <div className="grid sm:grid-cols-2  lg:grid-cols-3 place-items-center  w-full overflow-y-auto max-h-[80vh]  py-10">
            {searchedJobs.length === 0 ? (
              <p className="text-black text-[20px]">
                You have no jobs available
              </p>
            ) : (
              searchedJobs.map((job, i) => {
                return <JobCard key={i} job={job} />;
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
