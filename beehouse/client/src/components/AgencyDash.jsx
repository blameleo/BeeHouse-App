import React, { useEffect } from "react";
import AgencyModelCards from "../components/AgencyModelCards";
import ChatButtonFloater from "../components/ChatButtonFloater";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "./BottomNav";
import { fetchJobsFailure, fetchJobsSuccess } from "../Redux/slice/jobSlice";
import axios from "axios";

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
        `http://localhost:4000/jobs/getjobs/${user?._id}`
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
      <div className="flex mb-4  justify-center lg:justify-start px-2 sm:px-0">
        <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  flex  items-center from-gray-500 via-gray-800 to-black backdrop-blur-sm mr-2 text-white p-2  rounded">
          <h1 className=" font-bold text-[45px]">{applications.length}</h1>

          <p className="sm:ml-10 font-bold">Applications Received</p>
        </div>

        <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  flex  items-center from-gray-500 via-gray-800 to-black backdrop-blur-sm mr-2 text-white p-2  rounded">
          <h1 className=" font-bold text-[45px]">{jobs.length}</h1>

          <p className="sm:ml-10 font-bold">Jobs posted</p>
        </div>

        <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]  flex  items-center from-gray-500 via-gray-800 to-black backdrop-blur-sm mr-2 text-white p-2  rounded">
          <h1 className=" font-bold text-[45px]">
            {auditionsApplications.length}
          </h1>

          <p className="sm:ml-10 font-bold">Auditions</p>
        </div>
      </div>
      <AgencyModelCards />

      <ChatButtonFloater />
      {/* <BottomNav /> */}
    </div>
  );
}

export default AgencyDash;
