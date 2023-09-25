import React from "react";

export default function RegistrationButton({ label, onClick }) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="">
      <button
        className=" w-[200px] md:w-96 flex justify-center rounded  bg-yellow-500 p-3 hover:bg-purple-600 hover:text-white"
        onClick={handleOnClick}
      >
        {label}
      </button>
    </div>
  );
}
