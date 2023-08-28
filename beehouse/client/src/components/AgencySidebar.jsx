import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from './Logo'
import {FaForumbee} from 'react-icons/fa'
import {SlBadge} from 'react-icons/sl'
import {GrGroup} from 'react-icons/gr'
import {FiSettings} from 'react-icons/fi'
import { BsFillPersonBadgeFill } from 'react-icons/bs'
import {GiPadlock} from 'react-icons/gi'
import {ImManWoman} from 'react-icons/im'
import {MdBadge} from 'react-icons/md'


function AgencySidebar() {


  return (
    <div className=" mt-16 w-full ">
    <div className="min-w-[17%]  pt-10 sm:pt-0  h-[100vh] bg-yellow-500 fixed left-0">
      {/* <BsGearFill /> */}
      <h1 className="text-center pt-10 font-black mb-10 hidden sm:block">
        
      </h1>
      <Link to="/agency">
        <div
          className={`flex justify-center  cursor-pointer ${
            location.pathname === "/agency" ||
            location.pathname === "/agency"
              ? "bg-purple-600 text-white"
              : " "
          }   font-bold  rounded-xl mx-2 sm:py-6 py-4  items-center`}
        >
          <ImManWoman className="sm:text-[30px] lg:mr-5" />

          <p href="" className="hidden lg:block">
            {" "}
            Models
          </p>
        </div>
      </Link>
      <Link to="/agency/jobs">
        <div
          className={`flex justify-center  cursor-pointer ${
            location.pathname === "/agency/jobs"
              ? "bg-purple-600 text-white"
              : " "
          }   font-bold  rounded-xl mx-2 mt-2 sm:py-6 py-4  items-center`}
        >
          <MdBadge className="sm:text-[30px] lg:mr-5" />
          <p href="" className="hidden lg:block">
            {" "}
            Jobs
          </p>
        </div>
      </Link>
      <Link to="/agency/profile">
        <div
          className={`flex justify-center  cursor-pointer ${
            location.pathname === "/agency/profile" ||
            location.pathname === "/agency/profile"
              ? "bg-purple-600 text-white"
              : " "
          }   font-bold  rounded-xl mx-2 sm:py-6 py-4  items-center`}
        >
          <BsFillPersonBadgeFill className="sm:text-[30px] lg:mr-5" />

          <p href="" className="hidden lg:block">
            {" "}
            Profile
          </p>
        </div>
      </Link>
      <Link to="/agency/security">
        <div
          className={`flex justify-center  cursor-pointer ${
            location.pathname === "/agency/security" ||
            location.pathname === "/agency/security"
              ? "bg-purple-600 text-white"
              : " "
          }   font-bold  rounded-xl mx-2 sm:py-6 py-4  items-center`}
        >
          <GiPadlock className="sm:text-[30px] lg:mr-5" />

          <p href="" className="hidden lg:block">
            {" "}
            Security
          </p>
        </div>
      </Link>
    </div>

   
   
    </div>

  )
}

export default AgencySidebar

