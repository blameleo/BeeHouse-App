import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { MdAccessibilityNew } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import RegistrationButton from "../components/RegistrationButton";
import ModelSignUp from "../components/ModelSignUp";
import AgencySignUp from "../components/AgencySignUp";
import Logo from "./Logo";

function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModelSelected, setIsModelSelected] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(
    "Join as a Creative Agency or Model?"
  );

  const handleOptionChange = (event) => {
    if (event.target.value === "model") {
      setIsModelSelected(true);
    } else {
      setIsModelSelected(false);
    }
    setSelectedOption(event.target.value);
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleRegistrationClick = () => {
    setShowSignUpForm(true);
    if (selectedOption === "model") {
      setDialogTitle("Model Registration");
    } else if (selectedOption === "creativeAgency") {
      setDialogTitle("Creative Agency Registration");
    }
  };

  const renderSignUpForm = () => {
    if (selectedOption === "model") {
      return <ModelSignUp />;
    } else if (selectedOption === "creativeAgency") {
      return <AgencySignUp />;
    }
  };

  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      PaperProps={{ sx: { padding: "25px" } }}
    >
      <DialogTitle>
        <div className="flex justify-center mb-10">
          <Logo />
        </div>

        <div>
          <h1 className="font-bold uppercase  text-center">{dialogTitle}</h1>
        </div>
      </DialogTitle>

      <DialogContent className="">
        {!showSignUpForm ? (
          <div className="grid sm:grid-cols-2 place-items-center">
            <button
              className="w-48 bg-white rounded-lg shadow p-6 hover:cursor-pointer mb-8 hover:bg-yellow-500 sm:mr-5"
              onClick={() => {
                setSelectedOption("model");
                setIsModelSelected(true);
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <MdAccessibilityNew size={30} />
                </div>
                <h1 className="uppercase text-blue-darker">Model</h1>

                <div>
                  <input
                    className=""
                    type="radio"
                    name="registration-type"
                    id="registration-type"
                    value="model"
                    onChange={handleOptionChange}
                    checked={selectedOption === "model"}
                  />
                </div>
              </div>
            </button>
            <button
              className="w-48 bg-white rounded-lg shadow p-6 hover:cursor-pointer mb-8 hover:bg-yellow-500"
              onClick={() => {
                setSelectedOption("creativeAgency");
                setIsModelSelected(true);
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <BsBuildingFillCheck size={30} />
                </div>
                <h1 className="uppercase text-blue-darker ">Agency</h1>
                <div>
                  <input
                    className=""
                    type="radio"
                    name="registration-type"
                    id="registration-type-other"
                    value="creativeAgency"
                    onChange={handleOptionChange}
                    checked={selectedOption === "creativeAgency"}
                  />
                </div>
              </div>
            </button>
          </div>
        ) : (
          renderSignUpForm()
        )}

        {!showSignUpForm && selectedOption && (
          <div className="flex justify-center">
            <RegistrationButton
              label={`Register as ${selectedOption}`}
              onClick={handleRegistrationClick}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
