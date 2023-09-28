import React, { useEffect } from "react";
import AgencyModelCards from "../components/AgencyModelCards";
import ChatButtonFloater from "../components/ChatButtonFloater";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "./BottomNav";
import { fetchJobsFailure, fetchJobsSuccess } from "../Redux/slice/jobSlice";
import axios from "axios";
import { CiBadgeDollar } from "react-icons/ci";

function AgencyDash() {
  const applications = useSelector((state) => state.application.applications);
  const jobs = useSelector((state) => state.job.jobs);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(applications);

  const auditionsApplications = () => {
    applications.filter((application) => application.status === "Paid");
  };
  console.log(auditionsApplications.length);
  const fetchAgencyJobs = async () => {
    try {
      const response = await axios.get(
        `https://beehouse-backend-api.onrender.com/jobs/getjobs/${user?._id}`
      );
      dispatch(fetchJobsSuccess(response.data));
    } catch (error) {
      console.error("Error fetching jobs:", error);
      dispatch(fetchJobsFailure(error.message));
    }
  };

  useEffect(() => {
    fetchAgencyJobs();
    auditionsApplications();
  }, [user?._id, applications]);
  return (
    <div className="  mt-16   sm:ml-[15%]  ">
      {/* <div className="flex sm:flex-row justify-around flex-wrap">
        <MiniDetailsCard />
        <MiniDetailsCard />
        <MiniDetailsCard />
        <MiniDetailsCard />
      </div> */}
      <h1 className="pl-5 py-2 font-bold text-lg">Applications</h1>
      <div className="flex justify-center md:justify-start gap-x-2">
        <div className="border   flex items-center justify-around   rounded-lg  bg-slate-700 bg-opacity-100 backdrop-blur-sm  drop-shadow-lg p-2 h-[60px]">
          <div className="bg-white  w-[30px]  h-[30px]  rounded flex justify-center items-center">
            <CiBadgeDollar className="text-black text-xl" />
          </div>
          <div className="flex items-center ml-2 ">
            <p className="text-white  font-bold  text-sm mr-1">
              {applications.length}
            </p>
            <p className="text-white text-sm ">Applications</p>
          </div>
        </div>

        <div className="border   flex items-center justify-around   rounded-lg  bg-slate-700 bg-opacity-100 backdrop-blur-sm  drop-shadow-lg p-2 h-[60px]">
          <div className="bg-white  w-[30px]  h-[30px]  rounded flex justify-center items-center">
            <CiBadgeDollar className="text-black text-xl" />
          </div>
          <div className="flex items-center ml-2">
            <p className="text-white  font-bold  text-sm mr-1">{jobs.length}</p>
            <p className="text-white text-sm ">Jobs</p>
          </div>
        </div>
      </div>

      {/* <div className="flex mb-4  justify-center lg:justify-start border ">
        <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  ">
          <h1 className=" font-bold  sm:text-[35px]">{applications.length}</h1>

          <p className="sm:ml-10 font-bold">Applications Received</p>
        </div>

        <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  flex  items-center from-gray-500 via-gray-800 to-black backdrop-blur-sm mr-2 text-white p-2  rounded">
          <h1 className=" font-bold text-[45px]">{jobs.length}</h1>

          <p className="sm:ml-10 font-bold">Jobs posted</p>
        </div>

        {/* <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  flex  items-center from-gray-500 via-gray-800 to-black backdrop-blur-sm mr-2 text-white p-2  rounded">
          <h1 className=" font-bold text-[45px]">
            {auditionsApplications.length}
          </h1>

          <p className="sm:ml-10 font-bold">Auditions</p>
        </div> */}
      {/* </div> */}
      <AgencyModelCards />
      <ChatButtonFloater />
      {/* <BottomNav /> */}
    </div>
  );
}

export default AgencyDash;
