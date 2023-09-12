import React from "react";
import AgencyModelCards from "../components/AgencyModelCards";
import ChatButtonFloater from "../components/ChatButtonFloater";
import { useSelector } from "react-redux";

function AgencyDash() {
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
