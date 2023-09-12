import React from "react";
import { FaForumbee } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Logo({ agencystyle }) {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Link
        className="flex items-start"
        to={user?.type === "model" ? "/home" : "/agency"}
      >
        <FaForumbee className="text-xl pr-1  " />
        <h1 className="font-volkhorn  text-xl ">BeeHouse.</h1>
      </Link>
    </div>
  );
}
