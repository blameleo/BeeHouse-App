import React from "react";
import SecNavbar from "../components/SecNavbar";
import { BsFillPersonBadgeFill, BsGearFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { Link, Routes, Route, Outlet, useLocation } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function ModelSettings() {
  const location = useLocation();
  return (
    <div>
      <SecNavbar />
      <div className=" mt-16 w-full ">
        <div className="min-w-[17%] hidden sm:block  pt-10 sm:pt-0  h-[100vh] bg-yellow-500 fixed left-0 ">
          {/* <BsGearFill /> */}
          <h1 className="text-center pt-10 font-black mb-10 hidden sm:block">
            Account Settings
          </h1>
          <Link to="/settings/modeledit">
            <div
              className={`flex justify-center  cursor-pointer ${
                location.pathname === "/settings/modeledit" ||
                location.pathname === "/settings"
                  ? "bg-purple-600 text-white"
                  : " "
              }   font-bold  rounded-xl mx-2 sm:py-6 py-4  items-center`}
            >
              <BsFillPersonBadgeFill className="sm:text-[30px] lg:mr-5" />

              <p href="" className="hidden lg:block">
                {" "}
                profile
              </p>
            </div>
          </Link>
          <Link to="/settings/changepassword">
            <div
              className={`flex justify-center  cursor-pointer ${
                location.pathname === "/settings/changepassword"
                  ? "bg-purple-600 text-white"
                  : " "
              }   font-bold  rounded-xl mx-2 mt-2 sm:py-6 py-4  items-center`}
            >
              <GiPadlock className="sm:text-[30px] lg:mr-5" />
              <p href="" className="hidden lg:block">
                {" "}
                security
              </p>
            </div>
          </Link>
        </div>

        <div className="sm:ml-20 md:ml-48 lg:ml-64 xl:ml-[21em] ">
          <Outlet />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
