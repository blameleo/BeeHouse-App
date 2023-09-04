import React from "react";
import AgencySidebar from "../components/AgencySidebar";

import SecNavbar from "../components/SecNavbar";
import { Outlet } from "react-router";

function Agency() {
  return (
    <div className=" ">
      <SecNavbar/>
  
        <AgencySidebar/>
       
        <Outlet/>
      
       
        
        


     
   
    </div>
  );
}

export default Agency;

