import React, { useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { GiBee } from "react-icons/gi";
import Filter from "./Filter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobsFailure,
  fetchJobsStart,
  fetchJobsSuccess,
} from "../Redux/slice/jobSlice";
import Loader from "./Loader";

function Jobs() {
  const dispatch = useDispatch();

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
    <div className="mt-44   bg-[url('/img/beehive-bg1.jpeg')] bg-contain bg-no   flex flex-col md:flex-row">
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
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="flex flex-wrap sm:px-8 ">
            {jobs.map((job) => {
              // const randomColor = getRandomColor();

              const date = new Date(job.createdAt);

              const day = date.getDate();

              const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              const month = monthNames[date.getMonth()];

              const year = date.getFullYear();

              console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
              return (
                <div
                  key={job._id}
                  className=" h-[20%] w-[250px] mr-5 border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500  mb-10"
                >
                  <div
                    className=" bg-blue-100 rounded-[20px] m-2 p-2"
                    style={{ backgroundColor: job.color }}
                  >
                    <p className="bg-white rounded-lg flex justify-center w-24 py-1 px-8 text-[10px]">
                      {`${day},${month},${year}`}
                    </p>

                    <div className="pt-6 flex items-center">
                      <h1 className=" text-gray-700 text-[70%]">
                        {job.agencyName}
                      </h1>
                      <MdVerified className="ml-1 text-yellow-500 text-[90%]" />
                    </div>

                    <div className="py-2">
                      <h1 className="font-black text-md">{job.description}</h1>
                    </div>
                    <div className="flex flex-wrap">
                      {Object.values(job.tags).map((tag, i) => (
                        <p
                          key={i}
                          className="border border-gray-400 mr-2 text-gray-600 text-[14px] rounded-xl px-[5px] my-1"
                        >
                          {tag}
                        </p>
                      ))}
                      {/* // .join(",")} */}
                    </div>
                  </div>
                  <div className="px-4 pt-2 flex  pb-1 justify-between items-center">
                    <div>
                      <p className="font-black text-md">₵{job.price}</p>
                      <p className="text-gray-500 text-sm">{job.location}</p>
                    </div>
                    <GiBee className="text-black text-[32px]  rounded-full cursor-pointer  h-10 w-10" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
