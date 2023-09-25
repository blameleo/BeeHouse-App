import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";

export default function Navbar() {
  const [openPopup, setOpenPopup] = useState(false);

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <nav className="py-3 flex justify-between w-full ">
        
        <Logo />
        

        <div className="flex items-center ml-37  justify-between w-40 ">
          <Link to="/login">
            <Button name="Sign in" />
          </Link>
          <Button
            name="Join"
            joinStyle="border border-black px-3 rounded py-1 hover:bg-yellow-700 hover:border-none hover:text-white font-bold"
            onClick={() => setOpenPopup(true)}
          />
        </div>
      </nav>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onClose={handleClosePopup}
      ></Popup>
    </>
  );
}
