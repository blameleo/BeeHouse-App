import React, { useState } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import { useCookies } from "react-cookie";
import { FaForumbee } from "react-icons/fa";
import SecNavbar from "../components/SecNavbar";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function ModelOnboardingPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [displayPic, setDisplayPic] = useState(null);
  const [idCardPic, setIdCardPic] = useState(null);
  const [info, setInfo] = useState(null);

  const [image1, setImage1] = useState(null);

  const [image2, setImage2] = useState(null);

  const [image3, setImage3] = useState(null);
  const [imagePreviews, setImagePreviews] = useState({
    displayPicUrl: null,
    idCardUrl: null,
    imageUrl1: null,
    imageUrl2: null,
    imageUrl3: null,
  });

  const [formInfo, setFormInfo] = useState({
    user_id: cookies.UserId,
    firstName: "",
    lastName: "",
    gender: "",
    telephone: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    height: "",
    location: "",
    complexion: "",
    stature: "",
    idCardUrl: "",
    displayPicUrl: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    telephone: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    height: "",
    location: "",
    complexion: "",
    stature: "",
    idCardUrl: "",
    displayPicUrl: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
  });

  const handleSelectChange = (name, value) => {
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 65 }, (_, i) => (2023 - i).toString());

  const handleIdCardChange = (event) => {
    const selectedFile5 = event.target.files[0];
    setIdCardPic(selectedFile5);

    setFormInfo((prevData) => ({
      ...prevData,
      idCardUrl: selectedFile5,
    }));

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        idCardUrl: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile5);
  };

  const handleDisplayPicChange = (event) => {
    const selectedFile4 = event.target.files[0];
    setDisplayPic(selectedFile4);
    setFormInfo((prevData) => ({
      ...prevData,
      displayPicUrl: selectedFile4,
    }));
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        displayPicUrl: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile4);
  };

  const handleImage1Change = (event) => {
    const selectedFile1 = event.target.files[0];
    setImage1(selectedFile1);
    setFormInfo((prevData) => ({
      ...prevData,
      imageUrl1: selectedFile1,
    }));

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        imageUrl1: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile1);
  };

  const handleImage2Change = (event) => {
    const selectedFile2 = event.target.files[0];
    setImage2(selectedFile2);
    setFormInfo((prevData) => ({
      ...prevData,
      imageUrl2: selectedFile2,
    }));
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        imageUrl2: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile2);
  };

  const handleImage3Change = (event) => {
    const selectedFile3 = event.target.files[0];
    setImage3(selectedFile3);
    setFormInfo((prevData) => ({
      ...prevData,
      imageUrl3: selectedFile3,
    }));
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        imageUrl3: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile3);
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
    formData.append("idCardUrl", idCardPic);
    formData.append("imageUrl1", image1);
    formData.append("imageUrl2", image2);
    formData.append("imageUrl3", image3);
    console.log(formInfo);
    try {
      const response = await axios.put("http://localhost:4000/user", formInfo, {
        headers: {
          "Content-Type": "multipart/form-data", // Important: Set the correct Content-Type header
        },
      });

      console.log(response.data.message);
      setInfo(response.data.message);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-black font-volkhorn ">
      {/* <div className=" px-5 py-5  flex">
        <FaForumbee className="text-yellow-500 mr-1 text-3xl" />
        <h1 className="text-yellow-500 text-3xl">BeeHouse</h1>
      </div> */}
      <SecNavbar />
      <div className="flex justify-center mt-10">
        <h1 className=" font-volkhorn text-4xl text-yellow-500 mt-12 text-bold">
          Create Account{" "}
        </h1>
      </div>
      <form
        action=""
        className="px-20 text-white flex flex-col md:flex-row justify-between "
        onSubmit={handleSubmit}
      >
        <div className="">
          <label htmlFor="" className="mb">
            First Name :
          </label>
          <br></br>

          <input
            className=" border px-3 border-yellow-500 outline-none bg-black  mt-1 w-[400px]  md:w-[500px] h-14 rounded rounded-lg "
            type="text"
            onChange={handleInputChange}
            value={formInfo.firstName}
            placeholder="First Name"
            name="firstName"
            id=""
          />
           {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
          <br></br>
          <br />
          <label htmlFor="">Last Name :</label>
          <br />
          <input
            className=" border px-3 border-yellow-500 outline-none bg-black  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg "
            placeholder="last name"
            type="text"
            onChange={handleInputChange}
            name="lastName"
            value={formInfo.lastName}
            id=""
          />
           {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
          <br></br>
          <br />

          <label className="" htmlFor="">
            Gender:
          </label>
          <br></br>

          <ul className="grid grid-cols-3 gap-x-5 mt-3 max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                onChange={handleInputChange}
                value="male"
                name="gender"
                id="male"
              />
              <label
                className="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                htmlFor="male"
              >
                Male
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                onChange={handleInputChange}
                value="female"
                name="gender"
                id="female"
              />
              <label
                className="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                htmlFor="female"
              >
                Female
              </label>
            </li>
          </ul>
          <br></br>

          <label htmlFor="" className="font-volkhorn">
            Telephone Number:
          </label>
          <br></br>
          <input
            className="border mb-5 outline-none px-3 border-yellow-500 bg-black  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg"
            type="tel"
            placeholder="+233 Phone Number"
            name="telephone"
            value={formInfo.telephone}
            onChange={handleInputChange}
            id="telephone"
            pattern="[0-9]*"
            minLength="10"
            maxLength="15"
          />

          <br></br>

          <label className="mt-5" htmlFor="">
            Date of Birth:
          </label>
          <br></br>
          <div className="flex">
            <div className="mr-2">
              <select
                className="border outline-none px-3 border-yellow-500 bg-black  mt-1 w-20 h-14 rounded rounded-lg"
                type="date"
                placeholder="DD"
                name="dob_day"
                onChange={(e) => handleSelectChange("dob_day", e.target.value)}
              >
                <option className="h-40" value="">
                  DD
                </option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="mr-2">
              <select
                className="border outline-none px-3 border-yellow-500 bg-black  mt-1 w-20 h-14 rounded rounded-lg"
                type="date"
                placeholder="MM"
                name="dob_month"
                value={formInfo.dob_month}
                onChange={(e) =>
                  handleSelectChange("dob_month", e.target.value)
                }
              >
                <option value="">MM</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                className="border px-2 py-1 outline-none border-yellow-500 bg-black select-dropdown  mt-1 w-24 h-14 rounded rounded-lg"
                type="date"
                placeholder="YYYY"
                name="dob_year"
                value={formInfo.dob_year}
                onChange={(e) => handleSelectChange("dob_year", e.target.value)}
              >
                <option value="" className="h-14">
                  YYYY
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br></br>

          <label htmlFor="" className="font-volkhorn">
            Height:
          </label>
          <br></br>
          <input
            className=" outline-none border px-3 border-yellow-500 bg-black   mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg "
            type="number"
            placeholder="height (cm)"
            onChange={handleInputChange}
            name="height"
            value={formInfo.height}
            id=""
          />
           {errors.height && <div className="text-red-500">{errors.height}</div>}
          <br></br>

          <label htmlFor="">Location:</label>
          <br></br>
          <input
            className=" outline-none border px-3 border-yellow-500 mb-3 bg-black   mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg "
            type="text"
            placeholder="Location"
            onChange={handleInputChange}
            value={formInfo.location}
            name="location"
            id=""
          />
           {errors.location && <div className="text-red-500">{errors.location}</div>}
          <br></br>

          <label htmlFor="">Complexion:</label>

          <br></br>
          <ul className="grid grid-cols-3 gap-x-5 pb-5  max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer"
                onChange={handleInputChange}
                type="radio"
                value="dark"
                name="complexion"
                id="dark"
              />
              <label
                className="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                htmlFor="dark"
              >
                Dark
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="fair"
                onChange={handleInputChange}
                name="complexion"
                id="fair"
              />
              <label
                className="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                htmlFor="fair"
              >
                Fair
              </label>
            </li>
          </ul>

          <label htmlFor="stature" className="font-volkhorn">
            Stature :
          </label>
          <ul className="grid grid-cols-3 gap-x-5 pb-20  max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer"
                onChange={handleInputChange}
                type="radio"
                value="slim"
                name="stature"
                id="slim"
              />
              <label
                className="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                htmlFor="slim"
              >
                Slim
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="Average"
                onChange={handleInputChange}
                name="stature"
                id="Average"
              />
              <label
                className="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                htmlFor="Average"
              >
                Average
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="chubby"
                onChange={handleInputChange}
                name="stature"
                id="chubby"
              />
              <label
                className="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
                htmlFor="chubby"
              >
                Chubby
              </label>
            </li>
          </ul>
        </div>

        <br></br>
        <div>
          <label htmlFor="">Identification Card :</label>
          <br></br>
          <div className="flex items-center">
            <label
              htmlFor="upload1"
              className="relative rounded-xl p-2 bg-neutral-550 border-dashed border-4  border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              {imagePreviews.idCardUrl ? (
                <img
                  src={imagePreviews.idCardUrl}
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
              name="idCardUrl"
              className="hidden"
              onChange={handleIdCardChange}
            />
          </div>
          {errors.idCardUrl && <div className="text-red-500">{errors.idCardUrl}</div>}
          <br></br>

          <label htmlFor="">Profile pic:</label>
          <br></br>
          <div className="flex items-center">
            <label
              htmlFor="upload2"
              className="relative rounded-xl p-2 bg-neutral-950 border-dashed border-4 order border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              {imagePreviews.displayPicUrl ? (
                <img
                  src={imagePreviews.displayPicUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-3xl">+</span>
              )}
            </label>
            <input
              type="file"
              id="upload2"
              className="hidden"
              onChange={handleDisplayPicChange}
              name="displayPicUrl"
            />
            
          </div>
          {errors.displayPicUrl && <div className="text-red-500">{errors.displayPicUrl}</div>}

          <br></br>

          <label htmlFor="">Images Upload :</label>
          <br></br>
          <div className="flex ">
            <div className="flex items-center mr-5">
              <label
                htmlFor="upload3"
                className="relative rounded-xl p-2 bg-neutral-950 border-dashed border-4  border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
              >
                {imagePreviews.imageUrl1 ? (
                  <img
                    src={imagePreviews.imageUrl1}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-3xl">+</span>
                )}{" "}
              </label>
              <input
                type="file"
                id="upload3"
                onChange={handleImage1Change}
                className="hidden"
                name="imageUrl1"
              />
               
            </div>
            

            <div className="flex items-center mr-5">
              <label
                htmlFor="upload4"
                className="relative rounded-xl p-2  bg-neutral-950 border-dashed border-4  border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
              >
                {imagePreviews.imageUrl2 ? (
                  <img
                    src={imagePreviews.imageUrl2}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-3xl">+</span>
                )}
              </label>
              <input
                type="file"
                id="upload4"
                className="hidden"
                onChange={handleImage2Change}
                name="imageUrl1"
              />

            </div>
           

            <div className="flex items-center">
              <label
                htmlFor="upload5"
                className="relative rounded-xl p-2 bg-neutral-950 border-dashed border-4  border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
              >
                {imagePreviews.imageUrl3 ? (
                  <img
                    src={imagePreviews.imageUrl3}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-3xl">+</span>
                )}{" "}
              </label>
              <input
                type="file"
                id="upload5"
                className="hidden"
                onChange={handleImage3Change}
                name="imageUrl2"
              />
            </div>
           
          </div>
          <div className="flex mt-2 justify-around">
        {errors.imageUrl1 && <div className="text-red-500">required</div>}
        {errors.imageUrl2 && <div className="text-red-500">required</div>}
        {errors.imageUrl3 && <div className="text-red-500">required</div>}
        </div>
         
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

      <div className="flex text-white text-xl hover:text-blue-500 justify-center pb-5">
        <h1>{info}</h1>
      </div>
    </div>
  );
}

export default ModelOnboardingPage;