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
      <nav className="py-3 flex justify-between">
        <Logo />

        <div className="flex items-center  w-40 justify-between">
          <Link to="/login">
            <Button
              name="Sign in"
              joinStyle="bg-purple-500 text-white px-3 py-1 rounded"
            />
          </Link>
          <Button
            name="Join"
            joinStyle="text-white bg-black hover:bg-purple-500 px-3 rounded py-1  hover:border-none hover:text-white font-bold"
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
