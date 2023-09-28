import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

import { AiFillCamera } from "react-icons/ai";
import { clearUser, setUser } from "../Redux/slice/userSlice";

export default function AgencyProfile() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [displayPic, setDisplayPic] = useState(null);
  const [idCardPic, setIdCardPic] = useState(null);
  const [loading, setLoading] = useState(null);

  const [info, setInfo] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [imagePreviews, setImagePreviews] = useState({
    displayPicUrl: null,
  });

  const [formInfo, setFormInfo] = useState({
    _id: "",
    agencyName: "",
    telephone: "",
    location: "",
    displayPicUrl: "",
    about: "",
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

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("displayPicUrl", displayPic);
    // formData.append("idCardUrl", idCardPic);
    console.log(formInfo);

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

      console.log(formInfo);

      console.log(response.data.data);
      // dispatch(clearUser());
      if (response.data.data) {
        dispatch(setUser(response.data.data));

        setInfo(response.data.message);
        // window.location.reload();

        setLoading(false);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      setFormInfo({
        _id: cookies.UserId,
        agencyName: user.agencyName,
        telephone: user.telephone,
        location: user.location,
        displayPicUrl: user?.displayPicUrl,
        about: user.about,
      });
    }
  }, [user]);

  console.log("formInfo.displayPicUrl:", formInfo.displayPicUrl);

  let newUrl = "";
  if (typeof formInfo.displayPicUrl === "string") {
    newUrl = formInfo.displayPicUrl.replace("public/", "");
    console.log(newUrl);
  }
  return (
    <div className=" mt-16 sm:ml-[15%] ">
      {loading ? (
        <Loader loaderStyle=" grid place-items-center h-[100vh]" />
      ) : (
        <div className=" font-volkhorn  px-4 pt-">
          <div className="flex justify-center mt-">
            <h1 className="  text-xl py-4 text-bold">Agency profile</h1>
          </div>
          <form
            action=""
            className=" text-white  pb-20"
            onSubmit={handleSubmit}
          >
            <div className="  flex justify-center mb-4">
              <label
                htmlFor="upload2"
                className="relative rounded-full p-1 border-2 border-gray-300     h-32 w-32 flex items-center justify-center cursor-pointer"
              >
                {imagePreviews.displayPicUrl ? (
                  <img
                    src={imagePreviews.displayPicUrl}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <img
                    src={`https://beehouse-backend-api.onrender.com/${newUrl}`}
                    alt="preview"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}

                <AiFillCamera className="text-gray-500 text-2xl absolute right-0 bottom-2" />
              </label>

              <input
                type="file"
                id="upload2"
                className="hidden"
                onChange={handleDisplayPicChange}
                name="displayPicUrl"
              />
            </div>

            <div className="flex flex-col items-center ">
              <label htmlFor="" className="text-black">
                Agency Name:
              </label>

              <input
                className=" border px-3 border-gray-400 outline-none text-black  mt-1  h-14  sm:ml-[0px] w-[280px] sm:w-[350px]   lg:w-[500px]  rounded-lg "
                type="text"
                onChange={handleInputChange}
                value={formInfo.agencyName}
                placeholder="Agency Name"
                name="agencyName"
                id=""
              />
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="" className="font-volkhorn text-black">
                Telephone:
              </label>
              <input
                className="border  outline-none px-3 border-gray-400 text-black  sm:ml-[0px] w-[280px] sm:w-[350px]  lg:w-[500px] mt-1  h-14  rounded-lg"
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

            <div className="flex flex-col items-center">
              <label htmlFor="" className="text-black">
                Location:
              </label>
              <input
                className=" outline-none border px-3 border-gray-400 mb-3 text-black  sm:ml-[0px] w-[280px] sm:w-[350px] lg:w-[500px]  mt-1  h-14  rounded-lg "
                type="text"
                placeholder="Location"
                onChange={handleInputChange}
                value={formInfo.location}
                name="location"
                id=""
              />
            </div>

            <div className="flex flex-col items-center text-black">
              <label htmlFor="">About</label>
              <textarea
                className="outline-none border px-3 border-gray-400 mb-3 text-black  sm:ml-[0px] w-[280px]  sm:w-[350px] lg:w-[500px] mt-1 h-48 rounded-lg"
                placeholder="About"
                onChange={handleInputChange}
                value={formInfo.about}
                name="about"
              />
            </div>

            <div className="flex  justify-center">
              <button
                onClick={handleSubmit}
                className="mr-5 mt-5 bg-yellow-500 hover:bg-purple-600 border-2 text-black hover:text-white  h-[50px] rounded-lg ml-[30px] sm:ml-[0px] w-[280px] sm:w-[350px]   lg:w-[500px] "
              >
                update
              </button>
            </div>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
