import React from "react";
import Logo from "./Logo";
import { BsGeoAlt, BsGear, BsBell } from "react-icons/bs";
function SecNavbar() {
  return (
    <div className="bg-yellow-500 flex items-center justify-between p-4">
      <div className="flex items-center">
        <Logo />

        <div className="ml-4  w-[300px] flex justify-around text-md text-gray-700">
          <a href="">Find Jobs</a>
          <a href="">Messages</a>
          <a href="">FAQ</a>
        </div>
      </div>

      <div className="flex  w-[400px] justify-between">
        <div className="flex items-center">
          <BsGeoAlt className="text-gray-700" />
          <p className="ml-2">Accra,Gh</p>
        </div>

        <div className="flex  w-[140px] justify-around items-center">
          <div className="bg-[url('/img/profilepic.jpeg')] w-7 h-7  rounded-full bg-cover bg-no-repeat"></div>

          <div className="border rounded-full  border-gray-700 w-7 h-7 grid place-items-center">
            <BsGear />
          </div>
          <div className="border rounded-full  border-gray-700 w-7 h-7 grid place-items-center">
            <BsBell />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecNavbar;
