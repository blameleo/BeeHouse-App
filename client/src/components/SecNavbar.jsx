import React from "react";
import Logo from "./Logo";
import { BsGeoAlt, BsGear, BsBell } from "react-icons/bs";
import { GiTreeBeehive } from "react-icons/gi";
function SecNavbar() {
  return (
    <div className="bg-gray-800 text-yellow-500 flex items-center justify-between p-4 w-full">
      <div className="flex items-center ">
        <Logo />

        <div className="ml-4  w-[300px] md:flex hidden justify-around text-md text-yellow-500">
          <a href="">Find Jobs</a>
          <a href="">Messages</a>
          <a href="">FAQ</a>
        </div>
      </div>

      <div className="sm:flex  hidden w-[400px] justify-between">
        <div className="lg:flex hidden items-center  ">
          <BsGeoAlt className="text-white" />
          <p className="ml-2">Accra,Gh</p>
        </div>

        <div className="flex  w-[140px] justify-around items-center">
          <div className="bg-[url('/img/profilepic.jpeg')] w-7 h-7  rounded-full bg-cover bg-no-repeat"></div>

          <div className="border rounded-full  border-yellow-200 w-7 h-7 grid place-items-center">
            <BsGear />
          </div>
          <div className="border rounded-full  border-yellow-200 w-7 h-7 grid place-items-center">
            <BsBell />
          </div>
        </div>
      </div>
      <GiTreeBeehive className="sm:hidden text-[30px] cursor-pointer" />
    </div>
  );
}

export default SecNavbar;
