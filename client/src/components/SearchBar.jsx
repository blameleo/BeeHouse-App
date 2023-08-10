import React, { useState } from "react";
import { BsSearch, BsGeoAlt, BsFillFunnelFill } from "react-icons/bs";
import { GiBee } from "react-icons/gi";

export default function SearchBar() {
  const [expandedInputs, setExpandedInputs] = useState({});
  const handleInputClick = (inputKey) => {
    setExpandedInputs((prevExpandedInputs) => ({
      ...prevExpandedInputs,
      [inputKey]: true,
    }));
  };

  const handleInputBlur = (inputKey) => {
    setExpandedInputs((prevExpandedInputs) => ({
      ...prevExpandedInputs,
      [inputKey]: false,
    }));
  };

  const isInputExpanded = (inputKey) => {
    return expandedInputs[inputKey] || false;
  };

  return (
    <div className=" bg-black fixed z-20 w-full top-12 text-yellow-500 py-10 grid place-items-center  px-6">
      <form
        action=""
        className={`flex  items-center  ${
          isInputExpanded("designer") ? "" : ""
        }`}
      >
        <div
          className={`flex  items-center transition-all duration-100 ease-in-out delay-75  w-[200px]   border-gray-800 ${
            isInputExpanded("designer")
              ? " md:w-[700px] w-[250px]"
              : isInputExpanded("workLocation")
              ? "w-[50px]"
              : isInputExpanded("experience")
              ? "w-[50px]"
              : isInputExpanded("perMonth")
              ? "w-[50px]"
              : ""
          }`}
        >
          <div className="border p-2 rounded-full border-yellow-500">
            <BsSearch />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-400 outline-none  bg-black h-10 ${
              isInputExpanded("workLocation")
                ? "hidden"
                : isInputExpanded("experience")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            placeholder="Search gig by title"
            onClick={() => handleInputClick("designer")}
            onBlur={() => handleInputBlur("designer")}
          />
        </div>
        <div
          className={`md:flex hidden pl-4 items-center border-l transition-all delay-75 duration-100 ease-in-out border-gray-400 ${
            isInputExpanded("designer")
              ? "pl-0 border-none"
              : isInputExpanded("workLocation")
              ? "w-[700px] border-none"
              : isInputExpanded("experience")
              ? "pl-0 border-none"
              : isInputExpanded("perMonth")
              ? "pl-0 border-none"
              : ""
          }`}
        >
          <div className="border p-2 rounded-full border-yellow-500">
            <BsGeoAlt />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-400 outline-none  bg-black h-10 ${
              isInputExpanded("designer")
                ? "hidden"
                : isInputExpanded("experience")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            placeholder=" location"
            onClick={() => handleInputClick("workLocation")}
            onBlur={() => handleInputBlur("workLocation")}
          />
        </div>

        <div
          className={`md:flex hidden pl-4 items-center transition-all delay-75 duration-100 ease-in-out border-l border-gray-400 ${
            isInputExpanded("designer")
              ? "pl-2  border-none"
              : isInputExpanded("workLocation")
              ? "pl-2  border-none"
              : isInputExpanded("experience")
              ? "w-[700px] border-none"
              : isInputExpanded("perMonth")
              ? "pl-2 border-none"
              : ""
          }`}
        >
          <div className="border p-2 rounded-full border-yellow-500">
            <BsGeoAlt />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-400 outline-none  bg-black h-10 ${
              isInputExpanded("designer")
                ? "hidden"
                : isInputExpanded("workLocation")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            placeholder="company"
            onClick={() => handleInputClick("experience")}
            onBlur={() => handleInputBlur("experience")}
          />
        </div>

        {/* <div
          className={`md:flex hidden pl-4 items-center border-l transition-all delay-75 duration-100 ease-in-ou border-gray-400 ${
            isInputExpanded("designer")
              ? "pl-2 border-none"
              : isInputExpanded("workLocation")
              ? "pl-2  border-none"
              : isInputExpanded("experience")
              ? "pl-2 border-none"
              : isInputExpanded("perMonth")
              ? "pl-2 border-none w-[700px]"
              : ""
          }`}
        >
          <div className="border p-2 rounded-full border-yellow-500">
            <BsGeoAlt />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-400 outline-none  bg-black h-10 ${
              isInputExpanded("designer")
                ? "hidden"
                : isInputExpanded("workLocation")
                ? "hidden"
                : isInputExpanded("experience")
                ? "hidden"
                : ""
            }`}
            type="text"
            placeholder="Per Month"
            onClick={() => handleInputClick("perMonth")}
            onBlur={() => handleInputBlur("perMonth")}
          />
        </div> */}

        <div className="hidden lg:block mr-6">
          <label
            for="small-range"
            className="block mb-2 ml-4 text-sm font-medium text-gray-400 dark:text-gray-300"
          >
            Pay range
          </label>
          <input
            id="small-range"
            type="range"
            value="50"
            className="w-[170px] ml-4 h-1  bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-800"
          />
        </div>
        <BsFillFunnelFill className="md:hidden block mr-2 text-[20px] text-gray-500" />
        <GiBee className="text-[35px] cursor-pointer hover:text-gray-400" />
      </form>
    </div>
  );
}
