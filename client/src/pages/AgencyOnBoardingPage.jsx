import React, { useState } from "react";
import { FaForumbee } from "react-icons/fa";
import axios from "axios";
import { useCookies } from "react-cookie";
import SecNavbar from "../components/SecNavbar";
import { useNavigate } from "react-router-dom";

export default function AgencyOnBoardingPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [businessCer, setBusinessCer] = React.useState(null);
  const [displayPic, setDisplayPic] = React.useState(null);
  const [info, setInfo] = React.useState(null);
  const navigate = useNavigate();

  const [imagePreviews, setImagePreviews] = useState({
    displayPicUrl: null,
    businessCerUrl: null,
  });

  const [formInfo, setFormInfo] = React.useState({
    user_id: cookies.UserId,
    agencyName: "",
    about: "",
    location: "",
    telephone: "",
    displayPicUrl: "",
    businessCerUrl: "",
  });
  const [errors, setErrors] = useState({
    agencyName: "",
    about: "",
    location: "",
    telephone: "",
    displayPicUrl: "",
    businessCerUrl: "",
  });

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDisplayPicChange = (event) => {
    const selectedFile2 = event.target.files[0];
    setDisplayPic(selectedFile2);

    setFormInfo((prevData) => ({
      ...prevData,
      displayPicUrl: selectedFile2,
    }));

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        displayPicUrl: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile2);
  };

  const handleBusinessCerChange = (event) => {
    const selectedFile1 = event.target.files[0];
    setBusinessCer(selectedFile1);

    setFormInfo((prevData) => ({
      ...prevData,
      businessCerUrl: selectedFile1,
    }));

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        businessCerUrl: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const field in formInfo) {
      if (formInfo[field] === "") {
        newErrors[field] = "This field is required";
      } else {
        newErrors[field] = "";
      }
    }
    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      return; // Exit if there are errors
    }

    const formData = new FormData();
    formData.append("displayPicUrl", displayPic);
    formData.append("businessCerUrl", businessCer);
    console.log(formInfo);
    try {
      const response = await axios.put(
        "http://localhost:4000/profile/user",
        formInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important: Set the correct Content-Type header
          },
        }
      );

      console.log(response.data.message);
      setInfo(response.data.message);
      navigate("/agency");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black font-volkhorn ">
      <SecNavbar />
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl text-yellow-500 mt-40 text-bold">
          Create Account
        </h1>
      </div>
      <form
        action=""
        className="px-20 text-white flex flex-col md:flex-row  justify-between "
      >
        <div>
          <label htmlFor="">Agency Name :</label>
          <br />
          <input
            className=" border px-3 mb-3 border-yellow-500 outline-none bg-black  mt-1 w-[400px]  md:w-[500px] h-14 rounded rounded-lg "
            type="text"
            value={formInfo.agencyName}
            onChange={handleInputChange}
            placeholder="Agency Name"
            name="agencyName"
            id=""
            required
          />
          {errors.agencyName && <div className="text-red-500">{errors.agencyName}</div>}
          <br />
          <label htmlFor="">About :</label>
          <br />
          <input
            className=" border px-3 border-yellow-500 outline-none bg-black  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg "
            placeholder="About"
            type="textarea"
            onChange={handleInputChange}
            value={formInfo.about}
            name="about"
            id=""
            required
          />
            {errors.about && <div className="text-red-500">{errors.about}</div>}
          <br />
          <br />
          <label className="" htmlFor="">
            Location :
          </label>
          <br />
          <input
            className=" border px-3 border-yellow-500 mb-3 outline-none bg-black  mt-1 w-[400px]  md:w-[500px] h-14 rounded rounded-lg "
            type="text"
            onChange={handleInputChange}
            value={formInfo.location}
            placeholder="location"
            name="location"
            id=""
            required
          />
            {errors.location && <div className="text-red-500">{errors.location}</div>}

          <br />
          <label htmlFor="" className="font-volkhorn">
            Telephone Number:
          </label>
          <br></br>
          <input
            className="border mb-5 outline-none px-3 border-yellow-500 bg-black  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg"
            type="tel"
            placeholder="+233 Phone Number"
            name="telephone"
            onChange={handleInputChange}
            value={formInfo.telephone}
            id="phoneNumber"
            pattern="[0-9]*"
            minLength="10"
            maxLength="15"
            required
          />
            {errors.telephone && <div className="text-red-500">{errors.telephone}</div>}
        </div>

        <div>
          <label htmlFor="">Profile Picture :</label>
          <br />
          <div className="">
            <label
              htmlFor="upload1"
              className="relative rounded-xl p-2 bg-neutral-550 border-dashed border-4  border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              {imagePreviews.displayPicUrl ? (
                <img
                  src={imagePreviews.displayPicUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-3xl">+</span>
              )}{" "}
            </label>
            <input
              type="file"
              id="upload1"
              name="displayPicUrl"
              className="hidden"
              onChange={handleDisplayPicChange}
              //value="displayPicUrl"
              required
            />
          </div>
          {errors.displayPicUrl && <div className="text-red-500">{errors.displayPicUrl}</div>}
          <br />
          <label htmlFor="">Business Certificate:</label>
          <br></br>
          <div className="flex items-center">
            <label
              htmlFor="upload2"
              className="relative rounded-xl p-2 bg-neutral-950 border-dashed border-4  border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              {imagePreviews.businessCerUrl ? (
                <img
                  src={imagePreviews.businessCerUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-3xl">+</span>
              )}{" "}
            </label>
            <input
              type="file"
              id="upload2"
              className="hidden"
              name="businessCerUrl"
              onChange={handleBusinessCerChange}
              //value='businessCerUrl'
              required
            />
             
          </div>
          {errors.businessCerUrl && <div className="text-red-500">{errors.businessCerUrl}</div>}
        </div>
      </form>

      <div className="flex justify-center pb-10">
        <button
          onClick={handleSubmit}
          className="mr-5 mt-5 bg-yellow-500  border-2 border-black h-[50px] rounded-lg w-[150px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}