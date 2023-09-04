import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { GiBee, GiCheckMark, GiHourglass } from "react-icons/gi";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function JobCard({ job }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const user = useSelector((state) => state.user);

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

  const applyToJob = async (modelUserId, jobId) => {
    if (isLoading || isApplied) return;
    setIsLoading(true);
    const params = {
      modelUserId,
      jobId,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/jobs/apply",
        params
      );

      console.log(response);
      if (response.status === 201) {
        // setIsLoading(false);

        setIsApplied(true);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div
        key={job._id}
        className="  w-[250px] mr-5 border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500  mb-10"
      >
        <div
          className=" bg-blue-100 rounded-[20px] m-2 p-2"
          style={{ backgroundColor: job.color }}
        >
          <p className="bg-white rounded-lg flex justify-center w-24 py-1 px-8 text-[10px]">
            {`${day},${month},${year}`}
          </p>

          <div className="pt-6 flex items-center">
            <h1 className=" text-gray-700 text-[70%]">{job.agencyName}</h1>
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
          {/* <GiBee
        onClick={}
        className="text-black text-[32px]  rounded-full cursor-pointer  h-10 w-10"
      /> */}

          <div onClick={() => applyToJob(user?._id, job._id)}>
            {isLoading ? (
              <GiHourglass className="text-[12px] rounded-full cursor-pointer h-10 w-10" />
            ) : isApplied ? (
              <GiCheckMark className="text-green-500 text-[12px] rounded-full  cursor-not-allowed h-10 w-10" />
            ) : (
              <button className="border rounded px-5 hover:bg-purple-600 bg-yellow-500 text-white font-bold">
                apply
              </button>
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
