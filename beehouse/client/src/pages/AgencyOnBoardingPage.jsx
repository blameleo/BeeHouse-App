import React, { useState } from "react";
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
    _id: cookies.UserId,
    agencyName: "",
    about: "",
    location: "",
    countryCode: "+",
    telephone: "",
    displayPicUrl: "",
    businessCerUrl: "",
  });
  const [errors, setErrors] = useState({
    agencyName: "",
    about: "",
    location: "",
    telephone: "",
    countryCode: "",

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

  const handleCountryCodeChange = (event) => {
    const selectedCountryCode = event.target.value;
    console.log(selectedCountryCode);
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      countryCode: selectedCountryCode,
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

    console.log(formInfo);

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

    console.log("Submitting form data...");
    try {
      const response = await axios.put(
        "https://beehouse-backend-api.onrender.com/profile/user",
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
    <div className="bg-black font-volkhorn sm:h-full md:h-screen lg:h-full  ">
      <SecNavbar />
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl text-yellow-500 mt-40 text-bold">
          Create Account
        </h1>
      </div>
      <form
        action=""
        className=" text-white flex flex-col md:flex-row  place-items-center justify-between "
      >
        <div>

          <div className="mb-5">
          <label htmlFor="">Agency Name :</label>
          <br />
          <input
            className={`border px-3  outline-none  w-[300px] md:w-[500px]  h-14 rounded-lg ${
              errors.agencyName ? "border-red-500" : "border-yellow-500"
            } bg-black`}
            type="text"
            value={formInfo.agencyName}
            onChange={handleInputChange}
            placeholder="Agency Name"
            name="agencyName"
            id=""
            required
          />
          {errors.agencyName && (
            <div className="text-red-500 mb-5 mt-1 text-xs">{errors.agencyName}</div>
          )}
          </div>
          <br />
          <div>
          <label htmlFor="" className="">About :</label>
          <br />
          <textarea
            className={`border px-3 outline-none   w-[300px] md:w-[500px] h-14 rounded-lg ${
              errors.about ? "border-red-500" : "border-yellow-500"
            } bg-black`}
            placeholder="About"
            onChange={handleInputChange}
            value={formInfo.about}
            name="about"
            id=""
            required
          />

          {errors.about && (
            <div className="text-red-500 text-xs">{errors.about}</div>
          )}
          </div>
          <br />
          <div className="mb-5">
          <label className="" htmlFor="">
            Location :
          </label>
          <br />
          <input
            className={`border px-3  outline-none  w-[300px] md:w-[500px] h-14 rounded-lg ${
              errors.location ? "border-red-500" : "border-yellow-500"
            } bg-black`}
            type="text"
            onChange={handleInputChange}
            value={formInfo.location}
            placeholder="Location"
            name="location"
            id=""
            required
          />

          {errors.location && (
            <div className="text-red-500 text-xs mt-1">{errors.location}</div>
          )}
          </div>

          <br />
          <label htmlFor="" className="font-volkhorn">
            Telephone Number:
          </label>
          <br></br>
          <div className="mb-5">
          <div className="flex justify-center sm:justify-start  ">
            <div className="relative   ">
            <select
                  className="border border-yellow-500 mr-2  w-[100px] mr-2 h-14 rounded outline-none pr-8 bg-black  h-14 rounded-l rounded-lg appearance-none"
                  id="countryCode"
                  name="countryCode"
                  value={formInfo.countryCode}
                  onChange={handleCountryCodeChange}
                >
                  <option value="+233">+233(Gh)</option>{" "}
                  {/* You can add more country options here */}
                </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <input
              className={`border outline-none px-3 border-yellow-500 bg-black  w-[200px] h-14 rounded-r rounded-lg ${
                errors.telephone ? "border-red-500" : ""
              }`}
              type="tel"
              placeholder="Phone Number"
              name="telephone"
              value={formInfo.telephone}
              onChange={handleInputChange}
              id="telephone"
              pattern="[0-9]*"
              minLength="10"
              maxLength="15"
            />
          </div>
          {errors.telephone && (
            <div className="text-red-500 text-xs mt-1 mb-5">{errors.telephone}</div>
          )}
        </div>
        </div>

        <div>
          <label htmlFor="">Profile Picture :</label>
          <br />
          <div className="">
            <label
              htmlFor="upload1"
              className={`relative rounded-xl p-2 bg-neutral-550 border-dashed border-4 ${
                errors.displayPicUrl ? "border-red-500" : "border-yellow-500"
              } h-40 w-32 flex items-center justify-center cursor-pointer`}
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
              required
            />
          </div>
          {errors.displayPicUrl && (
            <div className="text-red-500 text-xs mt-2">
              {errors.displayPicUrl}
            </div>
          )}
          <br />
          <label htmlFor="">Business Certificate:</label>
          <br></br>
          <div className="flex items-center">
            <label
              htmlFor="upload2"
              className={`relative rounded-xl p-2 bg-neutral-950 border-dashed border-4 ${
                errors.businessCerUrl ? "border-red-500" : "border-yellow-500"
              } h-40 w-32 flex items-center justify-center cursor-pointer`}
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
              required
            />
          </div>

          {errors.businessCerUrl && (
            <div className="text-red-500 text-xs mt-2">
              {errors.businessCerUrl}
            </div>
          )}
        </div>
      </form>

      <div className="flex justify-center mt-5 pb-10">
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
