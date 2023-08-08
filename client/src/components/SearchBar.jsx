import React, { useState } from "react";
import { BsSearch, BsGeoAlt } from "react-icons/bs";

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
    <div className="bg-yellow-500 py-10 grid place-items-center px-6">
      <form
        action=""
        className={`flex    ${isInputExpanded("designer") ? "" : ""}`}
      >
        <div
          className={`flex items-center transition-all duration-100 ease-in-out delay-75  w-[200px]   border-gray-800 ${
            isInputExpanded("designer")
              ? " w-[700px]"
              : isInputExpanded("workLocation")
              ? "w-[50px]"
              : isInputExpanded("experience")
              ? "w-[50px]"
              : isInputExpanded("perMonth")
              ? "w-[50px]"
              : ""
          }`}
        >
          <div className="border p-2 rounded-full border-gray-700">
            <BsSearch />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-600 outline-none  bg-yellow-500 h-10 ${
              isInputExpanded("workLocation")
                ? "hidden"
                : isInputExpanded("experience")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            placeholder="Designer"
            onClick={() => handleInputClick("designer")}
            onBlur={() => handleInputBlur("designer")}
          />
        </div>
        <div
          className={`flex pl-4 items-center border-l transition-all delay-75 duration-100 ease-in-out border-gray-800 ${
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
          <div className="border p-2 rounded-full border-gray-700">
            <BsGeoAlt />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-600 outline-none  bg-yellow-500 h-10 ${
              isInputExpanded("designer")
                ? "hidden"
                : isInputExpanded("experience")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            placeholder="work location"
            onClick={() => handleInputClick("workLocation")}
            onBlur={() => handleInputBlur("workLocation")}
          />
        </div>

        <div
          className={`flex pl-4 items-center transition-all delay-75 duration-100 ease-in-out border-l border-gray-800 ${
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
          <div className="border p-2 rounded-full border-gray-700">
            <BsGeoAlt />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-600 outline-none  bg-yellow-500 h-10 ${
              isInputExpanded("designer")
                ? "hidden"
                : isInputExpanded("workLocation")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            placeholder="Experience"
            onClick={() => handleInputClick("experience")}
            onBlur={() => handleInputBlur("experience")}
          />
        </div>

        <div
          className={`flex pl-4 items-center border-l transition-all delay-75 duration-100 ease-in-ou border-gray-800 ${
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
          <div className="border p-2 rounded-full border-gray-700">
            <BsGeoAlt />
          </div>
          <input
            className={`ml-2 placeholder:text-gray-600 outline-none  bg-yellow-500 h-10 ${
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
        </div>

        <div className="flex-col border items-start ">
          <label
            for="small-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
          >
            Pay range
          </label>
          <input
            id="small-range"
            type="range"
            value="50"
            className="w-[200px] ml-4 h-1   bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-800"
          />
        </div>
      </form>
    </div>
  );
}
