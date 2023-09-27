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
        className="sm:w-96   rounded  bg-yellow-500 p-3 hover:bg-purple-600 hover:text-white"
        onClick={handleOnClick}
      >
        {label}
      </button>
    </div>
  );
}
