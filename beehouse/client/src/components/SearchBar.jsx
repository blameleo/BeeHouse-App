import React, { useState } from "react";
import { BsSearch, BsGeoAlt, BsFillFunnelFill } from "react-icons/bs";
import { GiBee } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "../Redux/slice/jobSlice";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState({
    title: "",
    location: "",
    company: "",
  });
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.job.jobs);

  const handleSearch = (e) => {
    e.preventDefault();

    const resultsArray = jobs.filter((job) => {
      console.log(job.location);
      return (
        job.description
          .toLowerCase()
          .includes(searchTerm.title.toLowerCase()) &&
        job.location
          .toLowerCase()
          .includes(searchTerm.location.toLowerCase()) &&
        job.agencyName.toLowerCase().includes(searchTerm.company.toLowerCase())
      );
    });
    dispatch(searchResult(resultsArray));

    // console.log(resultsArray);
    setSearchTerm({
      title: "",
      location: "",
      company: "",
    });

    // alert(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

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
    <div className=" bg-black  fixed  w-full top-12 text-yellow-500 py-5 grid place-items-center   px-6">
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
            className={`ml-2 placeholder:text-gray-400 outline-none border-none  bg-black h-10 ${
              isInputExpanded("workLocation")
                ? "hidden"
                : isInputExpanded("experience")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            name="title"
            value={searchTerm.title}
            onChange={handleChange}
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
            className={`ml-2 placeholder:text-gray-400 outline-none border-none  bg-black h-10 ${
              isInputExpanded("designer")
                ? "hidden"
                : isInputExpanded("experience")
                ? "hidden"
                : isInputExpanded("perMonth")
                ? "hidden"
                : ""
            }`}
            type="text"
            name="location"
            value={searchTerm.location}
            onChange={handleChange}
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
            className={`ml-2 placeholder:text-gray-400 outline-none border-none  bg-black h-10 ${
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
            name="company"
            value={searchTerm.company}
            onChange={handleChange}
            onClick={() => handleInputClick("experience")}
            onBlur={() => handleInputBlur("experience")}
          />
        </div>

     
        <BsFillFunnelFill className="md:hidden block mr-2 text-[20px] text-gray-500" />
        <GiBee
          onClick={handleSearch}
          className="text-[35px] cursor-pointer hover:text-purple-600"
        />
      </form>
    </div>
  );
}
