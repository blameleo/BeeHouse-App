import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="py-3 flex justify-between">
      <Logo />

      <div className="flex items-center  w-40 justify-between">
        <Link to="/login">
          <Button name="Sign in" />
        </Link>
        <Button
          name="Join"
          joinStyle="border border-black px-3 rounded py-1 hover:bg-yellow-700 hover:border-none hover:text-white font-bold"
        />
      </div>
    </nav>
  );
}
