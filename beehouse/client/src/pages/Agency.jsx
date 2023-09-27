import React from "react";
import AgencySidebar from "../components/AgencySidebar";

import SecNavbar from "../components/SecNavbar";
import { Outlet } from "react-router";
import AgencyBottomNav from "../components/AgencyBottomNav";

function Agency() {
  return (
    <div className=" ">
      <SecNavbar />

      <AgencySidebar />

      <Outlet />
      <AgencyBottomNav />
    </div>
  );
}

export default Agency;
