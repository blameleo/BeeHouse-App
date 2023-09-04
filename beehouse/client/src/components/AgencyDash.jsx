import React from "react";
import { GiWaspSting } from "react-icons/gi";
import AgencyModelCards from "../components/AgencyModelCards";
import MiniDetailsCard from "../components/MiniDetailsCard";
import { FaForumbee } from "react-icons/fa";
import ChatButtonFloater from "../components/ChatButtonFloater";
import { useSelector } from "react-redux";
import Loader from "./Loader";

function AgencyDash() {
  const applications = useSelector((state) => state.application.applications);

  return (
    <div className="  mt-[50px] ml-[17%]  ">
      {/* <div className="flex sm:flex-row justify-around flex-wrap">
        <MiniDetailsCard />
        <MiniDetailsCard />
        <MiniDetailsCard />
        <MiniDetailsCard />
      </div> */}

      <div className="    ">
        <AgencyModelCards />
      </div>

      <ChatButtonFloater />
    </div>
  );
}

export default AgencyDash;
