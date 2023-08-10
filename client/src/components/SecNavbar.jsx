import React from "react";
import Logo from "./Logo";
import { BsGeoAlt, BsGear, BsBell } from "react-icons/bs";
import { GiTreeBeehive } from "react-icons/gi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

function SecNavbar() {
  return (
    <div className="bg-black fixed top-0 z-30 text-yellow-500 flex items-center justify-between p-4 w-full">
      <div className=" ">
        <Logo />

        {/* <div className="ml-4  w-[300px] md:flex hidden  text-md text-yellow-500">
          <a href="">Messages</a>
        </div> */}
      </div>

      <div className="sm:flex  hidden w-[400px] justify-between">
        <div className="lg:flex hidden items-center  ">
          <BsGeoAlt className="text-white" />
          <p className="ml-2">Accra,Gh</p>
        </div>

        <div className="flex  w-[190px] justify-around items-center">
          <div className="bg-[url('/img/profilepic.jpeg')] w-8 h-8  rounded-full bg-cover bg-no-repeat"></div>
          <div className="border relative rounded-full  border-yellow-500 w-8 h-8 grid place-items-center">
            <span className="text-white font-black text-[13px] bg-red-500 rounded-full px-[6px] text-center absolute left-5 bottom-4">
              1
            </span>
            <BsFillChatLeftDotsFill />
          </div>
          <div className="border rounded-full  border-yellow-500 w-8 h-8 grid place-items-center">
            <BsGear />
          </div>

          <div className="border rounded-full  border-yellow-500 w-8 h-8 grid place-items-center">
            <BsBell />
          </div>
        </div>
      </div>
      <GiTreeBeehive className="sm:hidden text-[30px] cursor-pointer" />
    </div>
  );
}

export default SecNavbar;
