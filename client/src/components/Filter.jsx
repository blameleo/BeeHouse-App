import React from "react";

export default function Filter() {
  return (
    <div className="border-r border-r-black">
      <div class=" w-full p-3 bg-white rounded-lg  ">
        <h6 class="mb-3  font-medium text-gray-900 ">Filters</h6>
        <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          <li class="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="apple" class="ml-2 text-sm font-medium ">
              Tall (56)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="fitbit"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="fitbit" class="ml-2 text-sm font-medium ">
              Dark (56)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="dell"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="dell" class="ml-2 text-sm font-medium ">
              Male (56)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="asus"
              type="checkbox"
              value=""
              checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="asus" class="ml-2 text-sm font-medium ">
              Female (97)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="logitech"
              type="checkbox"
              value=""
              checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="logitech" class="ml-2 text-sm font-medium ">
              Chubby (97)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="msi"
              type="checkbox"
              value=""
              checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="msi" class="ml-2 text-sm font-medium ">
              Slim (97)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="bosch"
              type="checkbox"
              value=""
              checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="bosch" class="ml-2 text-sm font-medium ">
              Short (176)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="sony"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="sony" class="ml-2 text-sm font-medium ">
              Beard (234)
            </label>
          </li>

          <li class="flex items-center">
            <input
              id="samsung"
              type="checkbox"
              value=""
              checked
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />

            <label for="samsung" class="ml-2 text-sm font-medium ">
              Muscular (76)
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
