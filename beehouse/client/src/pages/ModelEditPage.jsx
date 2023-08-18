import React, { useState } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export default function ModelEditPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [displayPic, setDisplayPic] = useState(null);
  const [idCardPic, setIdCardPic] = useState(null);
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();
  const [image1, setImage1] = useState(null);

  const [image2, setImage2] = useState(null);

  const [image3, setImage3] = useState(null);
  const [imagePreviews, setImagePreviews] = useState({
    displayPicUrl: null,
    imageUrl1: null,
    imageUrl2: null,
    imageUrl3: null,
  });

  const [formInfo, setFormInfo] = useState({
    user_id: cookies?.UserId,
    firstName: cookies?.userData?.firstName,
    lastName: cookies?.userData?.lastName,
    gender: cookies?.userData?.gender,
    telephone: cookies?.userData?.telephone,
    dob_day: cookies?.userData?.dob_day,
    dob_month: cookies?.userData?.dob_month,
    dob_year: cookies?.userData?.dob_year,
    height: cookies?.userData?.height,
    location: cookies?.userData?.location,
    complexion: cookies?.userData?.complexion,
    stature: cookies?.userData?.stature,
    displayPicUrl: cookies?.userData?.displayPicUrl,
    imageUrl1: cookies?.userData?.imageUrl1,
    imageUrl2: cookies?.userData?.imageUrl2,
    imageUrl3: cookies?.userData?.imageUrl3,
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
  // const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  // const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  // const years = Array.from({ length: 65 }, (_, i) => (2023 - i).toString());

  //   const handleIdCardChange = (event) => {
  //     const selectedFile5 = event.target.files[0];
  //     setIdCardPic(selectedFile5);

  //     setFormInfo((prevData) => ({
  //       ...prevData,
  //       idCardUrl: selectedFile5,
  //     }));

  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setImagePreviews((prevPreviews) => ({
  //         ...prevPreviews,
  //         idCardUrl: e.target.result,
  //       }));
  //     };
  //     reader.readAsDataURL(selectedFile5);
  //   };

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
    const formData = new FormData();
    formData.append("displayPicUrl", displayPic);
    // formData.append("idCardUrl", idCardPic);
    formData.append("imageUrl1", image1);
    formData.append("imageUrl2", image2);
    formData.append("imageUrl3", image3);
    console.log(formInfo);
    try {
      //   const response = await axios.put(
      //     "http://localhost:4000/profile/user",
      //     formInfo,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data", // Important: Set the correct Content-Type header
      //       },
      //     }
      //   );
      //   console.log(response.data.message);
      //   setInfo(response.data.message);
      //   navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  // const newUrl = cookies.userData.displayPicUrl.replace("public/", "");

  return (
    <div className=" font-volkhorn  px-4 pt-">
      <div className="flex justify-center mt-10">
        <h1 className="  text-xl py-4 text-bold">Update user profile</h1>
      </div>
      <form action="" className=" text-white   " onSubmit={handleSubmit}>
        <div className="  flex justify-center mb-4">
          <label
            htmlFor="upload2"
            className="relative rounded-xl p-2 bg-neutral-950  border-4 order  h-40 w-32 flex items-center justify-center cursor-pointer"
          >
            {imagePreviews.displayPicUrl ? (
              <img
                src={imagePreviews.displayPicUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={`http://localhost:4000/${cookies.userData?.displayPicUrl?.replace(
                  "public/",
                  ""
                )}`}
                alt="preview"
                className="w-full h-full object-cover"
              />
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

        <div className="flex flex-col lg:items-center ">
          <label htmlFor="" className="text-black">
            First Name :
          </label>

          <input
            className=" border px-3 border-black outline-none text-black  mt-1  h-14 lg:w-[500px]  rounded-lg "
            type="text"
            onChange={handleInputChange}
            value={formInfo.firstName}
            placeholder="First Name"
            name="firstName"
            id=""
          />
        </div>

        <div className="flex flex-col lg:items-center">
          <label htmlFor="" className="text-black">
            Last Name :
          </label>
          <input
            className=" border px-3 border-black outline-none text-black lg:w-[500px] mt-1  h-14  rounded-lg "
            placeholder="last name"
            type="text"
            onChange={handleInputChange}
            name="lastName"
            value={formInfo.lastName}
            id=""
          />
        </div>

        <div className="flex flex-col lg:items-center">
          <label htmlFor="" className="font-volkhorn text-black">
            Telephone:
          </label>
          <input
            className="border  outline-none px-3 border-black text-black lg:w-[500px] mt-1  h-14  rounded-lg"
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
        </div>

        <div className="flex flex-col lg:items-center">
          <label htmlFor="" className="font-volkhorn text-black">
            Height:
          </label>
          <input
            className=" outline-none border px-3 border-black  text-black lg:w-[500px] mt-1  h-14  rounded-lg "
            type="number"
            placeholder="height"
            onChange={handleInputChange}
            name="height"
            value={formInfo.height}
            id=""
          />
        </div>

        <div className="flex flex-col lg:items-center">
          <label htmlFor="" className="text-black">
            Location:
          </label>
          <input
            className=" outline-none border px-3 border-black mb-3 text-black lg:w-[500px]  mt-1  h-14  rounded-lg "
            type="text"
            placeholder="Location"
            onChange={handleInputChange}
            value={formInfo.location}
            name="location"
            id=""
          />
        </div>

        <div className="flex flex-col lg:items-center mb-4">
          <label htmlFor="stature" className="font-volkhorn text-black">
            Stature :
          </label>
          <ul className="flex justify-between pt-2 lg:w-[500px] ">
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
                className={`flex p-5 text-center bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none ${
                  formInfo.stature === "slim"
                    ? "border-8 border-yellow-500"
                    : "peer-checked:ring-yellow-500 peer-checked:ring-8 peer-checked:border-transparent"
                } `}
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
                className={`flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none ${
                  formInfo.stature === "Average"
                    ? "border-8 border-yellow-500"
                    : "peer-checked:ring-yellow-500 peer-checked:ring-8 peer-checked:border-transparent"
                } `}
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
                className={`flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  ${
                  formInfo.stature === "chubby"
                    ? "border-8 border-yellow-500"
                    : "peer-checked:ring-yellow-500 peer-checked:ring-8 peer-checked:border-transparent"
                } `}
                htmlFor="chubby"
              >
                Chubby
              </label>
            </li>
          </ul>
        </div>

        <div className=" flex flex-col lg:items-center">
          <label htmlFor="" className="text-black">
            Images Upload :
          </label>
          <br></br>
          <div className="  flex flex-col md:flex-row md:justify-between items-center lg:w-[500px]">
            <div className="">
              <label
                htmlFor="upload3"
                className="relative rounded-xl p-2 bg-neutral-950 border-dashed border-4  border-yellow-500 h-32 w-32 mb-4 flex items-center justify-center cursor-pointer"
              >
                {imagePreviews.imageUrl1 ? (
                  <img
                    src={imagePreviews.imageUrl1}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={`http://localhost:4000/${cookies.userData?.imageUrl1?.replace(
                      "public/",
                      ""
                    )}`}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
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

            <div className="">
              <label
                htmlFor="upload4"
                className="relative rounded-xl p-2  bg-neutral-950 border-dashed border-4  border-yellow-500 h-32 w-32 mb-4 flex items-center justify-center cursor-pointer"
              >
                {imagePreviews.imageUrl2 ? (
                  <img
                    src={imagePreviews.imageUrl2}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={`http://localhost:4000/${cookies.userData?.imageUrl2?.replace(
                      "public/",
                      ""
                    )}`}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
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

            <div className="">
              <label
                htmlFor="upload5"
                className="relative rounded-xl p-2 bg-neutral-950 border-dashed border-4  border-yellow-500 h-32 w-32 mb-4 flex items-center justify-center cursor-pointer"
              >
                {imagePreviews.imageUrl3 ? (
                  <img
                    src={imagePreviews.imageUrl3}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={`http://localhost:4000/${cookies.userData?.imageUrl3?.replace(
                      "public/",
                      ""
                    )}`}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
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
        </div>

        <div className="flex border lg:justify-center">
          <button
            onClick={handleSubmit}
            className="mr-5 mt-5 bg-yellow-500 hover:bg-purple-600 border-2 text-black hover:text-white border-black h-[50px] rounded-lg  w-full lg:w-[500px] "
          >
            update
          </button>
        </div>
      </form>

      <div className="flex text-white text-xl hover:text-blue-500 justify-center pb-5">
        <h1>{info}</h1>
      </div>
    </div>
  );
}
