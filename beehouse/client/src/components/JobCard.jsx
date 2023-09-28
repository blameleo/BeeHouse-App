import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { GiBee, GiCheckMark, GiHourglass } from "react-icons/gi";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function JobCard({ job }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const user = useSelector((state) => state.user);

  const date = new Date(job.createdAt);

  // console.log(user);

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

  // console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

  const applyToJob = async (modelUserId, jobId) => {
    if (isLoading || isApplied) return;
    setIsLoading(true);
    const params = {
      modelUserId,
      jobId,
    };
    try {
      const response = await axios.post(
        "https://beehouse-backend-api.onrender.com/jobs/apply",
        params
      );

      // console.log(response);
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

  //bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-sky-400 to-cyan-600
  //bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500 via-violet-500 to-sky-500
  //bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600
  //bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400
  //bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500
  //bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500
  // bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500
  console.log(job);
  const newUrl = job?.agencyPic?.replace("public/", "");
  return (
    <div
      key={job._id}
      className={`w-[370px] sm:w-[300px] text-white p-4  ${job.color}  shadow-2xl rounded-[20px] bg-white hover:scale-105 transition duration-500  mb-10`}
    >
      <div className="flex">
        <div className="col-span-1   rounded-lg">
          <div className="bg-white w-12 grid place-items-center py-2 rounded-lg">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={`https://beehouse-backend-api.onrender.com/${newUrl}`}
              alt=""
            />
          </div>
        </div>
        <div className=" w-full pl-2">
          <h1 className="font-bold text-[14px]">{job.description}</h1>
          <div className="flex items-center">
            <h1 className="text-white/75 text-[12px]">{job.agencyName}</h1>
            <MdVerified className="ml-1 text-blue-700 text-[14px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap my-2 ">
        {Object.values(job.tags).map((tag, i) => (
          <p
            key={i}
            className="bg-white/25 px-3 rounded-[12px] text-white/60 mr-2"
          >
            {tag}
          </p>
        ))}
        {/* // .join(",")} */}
      </div>

      {/* <div
        className=""
        // style={{ backgroundColor: job.color }}
      >
        <p className="">{`${day},${month},${year}`}</p>
      </div> */}

      <div className="flex justify-between items-center my-2">
        <p className="text-sm">₵{job.price}</p>
        <p className="text-sm">{job.location}</p>
      </div>
      {/* <GiBee
        onClick={}
        className="text-black text-[32px]  rounded-full cursor-pointer  h-10 w-10"
      /> */}

      <div
        className="flex justify-center mt-4"
        onClick={() => applyToJob(user?._id, job._id)}
      >
        {isLoading ? (
          <GiHourglass className="text-[12px] rounded-full cursor-pointer h-10 w-6" />
        ) : isApplied ? (
          <GiCheckMark className="text-green-500 text-[12px] rounded-full  cursor-not-allowed h-10 w-10" />
        ) : (
          <button className=" rounded-lg px-5 hover:bg-purple-600 flex text-gray-100  items-center text-sm bg-black/70 py-1  font-bold">
            <BsFillLightningChargeFill className="mr-2 text-gray-100" /> swift
            apply
          </button>
        )}
      </div>
    </div>
  );
}
