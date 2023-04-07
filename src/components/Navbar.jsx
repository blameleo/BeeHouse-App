import React from "react";
import Button from "./Button";
import { FaForumbee } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="py-3 flex justify-between">
      <div className="flex items-start">
        <FaForumbee className="text-3xl pr-1 "/>
        <h1 className="font-volkhorn bg-yellow-500 text-3xl ">BeeHouse.</h1>
      </div>

      <div className="flex items-center  w-32 justify-between">
        <Button name="Sign in" />
        <Button name="Join" joinStyle="border border-black px-3 rounded py-1 hover:bg-yellow-700 hover:border-none hover:text-white font-bold" />
      </div>
    </nav>
  );
}
