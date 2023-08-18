import React from "react";

export default function Filter() {
  return (
    <div className="border-r border-r-black">
      <div className=" w-full p-3 bg-white rounded-lg  ">
        <h6 className="mb-3  font-medium text-gray-900 ">Filters</h6>
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          <li className="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="apple" className="ml-2 text-sm font-medium ">
              Tall (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="fitbit"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="fitbit" className="ml-2 text-sm font-medium ">
              Dark (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="dell"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="dell" className="ml-2 text-sm font-medium ">
              Male (56)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="asus"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="asus" className="ml-2 text-sm font-medium ">
              Female (97)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="logitech"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="logitech" className="ml-2 text-sm font-medium ">
              Chubby (97)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="msi"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="msi" className="ml-2 text-sm font-medium ">
              Slim (97)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="bosch"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="bosch" className="ml-2 text-sm font-medium ">
              Short (176)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="sony"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="sony" className="ml-2 text-sm font-medium ">
              Beard (234)
            </label>
          </li>

          <li className="flex items-center">
            <input
              id="samsung"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label htmlFor="samsung" className="ml-2 text-sm font-medium ">
              Muscular (76)
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
