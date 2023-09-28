import React from "react";
import { Card } from "flowbite-react";
import { useSelector } from "react-redux";

export default function Filter() {
  const jobs = useSelector((state) => state.job.jobs);
  console.log(jobs);

  // const pic = () =>{
  //   return
  // }

  return (
    <div className="border-r border-r-black p-4 ">
      <h1 className="font-bold">Ads</h1>
      <div className="grid grid-cols-2">
        <img
          src="https://pbs.twimg.com/media/Ft6z2NPWcAE2F0y.jpg"
          alt=""
          className="w-36 border h-36 rounded-lg  "
        />
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b39e881b-bd4c-4818-86d3-f1f54c88b4b4/d9agqp6-405fbce9-7d4e-468a-920e-b83a1e9015ad.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzOWU4ODFiLWJkNGMtNDgxOC04NmQzLWYxZjU0Yzg4YjRiNFwvZDlhZ3FwNi00MDVmYmNlOS03ZDRlLTQ2OGEtOTIwZS1iODNhMWU5MDE1YWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6rou0yxA5zrepJASlz2m9-5rmyrEQ9f-6QBtEKMEIJA"
          alt=""
          className="w-36 border h-36 rounded-lg  "
        />
      </div>

      <div className="   bg-white rounded-lg  ">
        {/* <h6 className="mb-3  font-medium text-gray-900 ">Filters</h6> */}
        <div class="bg-gradient-to-r from-red-500 to-yellow-500 p-1 mt-8">
          <div className="bg-white p-4 ">
            <h5 className="mb-3 text-base font-semibold text-black  lg:text-xl">
              Top <span className="bg-black text-white text-md px-1">Ad</span>{" "}
              Agencies
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-700">
              <p>Apply to one of these top advertising agencies in Ghana</p>
            </p>
            <ul className="my-4 space-y-3">
              <li>
                <a
                  className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white dark:hover:bg-gray-500"
                  href="#"
                >
                  {/* <SeeSourceCodeForSVG /> */}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Innova Ddb
                  </span>
                  <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-white dark:text-gray-900">
                    <p>Popular</p>
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow bg-gradient-to-r from-purple-500 to-pink-500 dark:text-white dark:hover:bg-gray-500"
                  href="#"
                >
                  {/* <SeeSourceCodeForSVG /> */}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Apex Commercials
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white dark:hover:bg-gray-500"
                  href="#"
                >
                  {/* <SeeSourceCodeForSVG /> */}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Mtn Ghana
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow bg-gradient-to-r from-purple-500 to-pink-500 dark:text-white dark:hover:bg-gray-500"
                  href="#"
                >
                  {/* <SeeSourceCodeForSVG /> */}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Despite Media
                  </span>
                </a>
              </li>
            </ul>
            <div>
              <a
                className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                href="#"
              >
                {/* <SeeSourceCodeForSVG /> */}
                <p>Why these agencies are in the</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
