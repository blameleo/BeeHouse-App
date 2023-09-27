import React from "react";
import AgencyModelCards from "../components/AgencyModelCards";
import ChatButtonFloater from "../components/ChatButtonFloater";
import { useSelector } from "react-redux";
import BottomNav from "./BottomNav";

function AgencyDash() {
  return (
    <div className="  mt-16   sm:ml-[15%]  ">
      {/* <div className="flex sm:flex-row justify-around flex-wrap">
        <MiniDetailsCard />
        <MiniDetailsCard />
        <MiniDetailsCard />
        <MiniDetailsCard />
      </div> */}
      <h1 className="pl-5 font-bold">DASHBOARD</h1>
      <AgencyModelCards />

      <ChatButtonFloater />
      {/* <BottomNav /> */}
    </div>
  );
}

export default AgencyDash;
