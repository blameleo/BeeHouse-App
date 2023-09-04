import React, { useState } from "react";

function Notification({ isVisible, toggleNotification }) {
  return (
    <div className="absolute border border-black">
      {/* <button
        onClick={toggleNotification}
        className="bg-blue-500 text-white px-4 py-2 rounded border"
      >
        Show Notification
      </button> */}

      {isVisible && (
        <div
          className={`${
            isVisible ? "right-0 " : "-right-full "
          } fixed top-0 w-72 h-screen bg-white bg-opacity-40 backdrop-blur-md shadow-md transition ease transform duration-300`}
        >
          <div className="flex items-center justify-between px-5">
            {/* Your notification content goes here */}

            <p className="text-lg font-bold text-black text-center">
              notifications
            </p>

            <p
              className=" text-red-600 cursor-pointer text-lg"
              onClick={toggleNotification}
            >
              x
            </p>
          </div>
          <ul className="">
            <li className=" h-24">my name ius lep</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notification;
