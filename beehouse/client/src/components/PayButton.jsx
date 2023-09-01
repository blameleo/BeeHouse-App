import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";

export default function PayButton({ updatedStep, status, buttonAvailability }) {
  console.log(updatedStep);
  return (
    <div
      className={`rounded p-2 text-sm ${
        buttonAvailability || status === "Approved"
          ? "bg-yellow-500 text-white font-bold flex items-center cursor-pointer hover:bg-purple-600"
          : "bg-gray-200 text-gray-400 hover:cursor-not-allowed flex items-center"
      }`}
      disabled={updatedStep !== "Approved" || buttonAvailability}
    >
      <GiTakeMyMoney className="mr-1 text-xl" /> <p>Pay via momo</p>
    </div>
  );
}
