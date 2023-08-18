import React from "react";
import { FaForumbee } from "react-icons/fa";



export default function Logo({agencystyle}) {
  return (
    <div className="flex items-start">
      <FaForumbee className="text-3xl pr-1  " />
      <h1 className="font-volkhorn  text-2xl ">BeeHouse.</h1>
    </div>
  );
}
