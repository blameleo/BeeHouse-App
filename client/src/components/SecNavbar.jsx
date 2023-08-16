import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { BsGeoAlt, BsGear, BsBell } from "react-icons/bs";
import { GiTreeBeehive } from "react-icons/gi";
import { BsFillChatLeftDotsFill, BsFillCaretDownFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SecNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  console.log(cookies);
  const logOut = () => {
    removeCookie("Email");
    removeCookie("UserId");
    removeCookie("AuthToken");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(()=>{
  // },[])

  useEffect(() => {
    getUser();

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(user);

  const newUrl = user?.displayPicUrl?.replace("public/", "");
  console.log(newUrl);

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
          {user && <p className="ml-2">welcome {user?.firstName}</p>}
        </div>

        <div className="flex  w-[190px] justify-around items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <div className="relative">
              <img
                src={`http://localhost:4000/${newUrl}`}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              {isOpen && (
                <div
                  id="dropdown"
                  className="z-10  bg-white absolute top-12 -left-6 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-yellow-500"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-900"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link to="/settings">
                        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-purple-600 dark:hover:text-white">
                          Settings
                        </a>
                      </Link>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-purple-600 dark:hover:text-white"
                        onClick={logOut}
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <BsFillCaretDownFill className="ml-1 text-xs" />
          </div>

          <div className="border relative rounded-full   border-yellow-500 w-8 h-8 grid place-items-center ">
            <span className="text-white font-black text-[13px] bg-red-500 rounded-full px-[6px] text-center absolute left-5 bottom-4">
              1
            </span>
            <BsFillChatLeftDotsFill className="hover:text-purple-600 cursor-pointer" />
          </div>
          {/* <div className="border rounded-full  border-yellow-500 w-8 h-8 grid place-items-center">
            <BsGear className="hover:text-purple-600 cursor-pointer" />
          </div> */}

          <div className="border rounded-full  border-yellow-500 w-8 h-8 grid place-items-center">
            <BsBell className="hover:text-purple-600 cursor-pointer" />
          </div>
        </div>
      </div>
      <GiTreeBeehive className="sm:hidden text-[30px] cursor-pointer" />
    </div>
  );
}

export default SecNavbar;
