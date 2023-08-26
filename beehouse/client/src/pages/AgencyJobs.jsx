import React, { useState } from "react";
import { RiAdvertisementFill } from "react-icons/ri";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

function AgencyJobs() {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(null);

  // console.log(user);
  const [formInfo, setFormInfo] = React.useState({
    agencyUserId: user?.user_id,
    agencyName: user?.agencyName,
    gender: "",
    complexion: "",
    stature: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(formInfo);

    try {
      const response = await axios.post(
        "http://localhost:4000/jobs/create",
        formInfo
      );

      if (response.status === 201) {
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
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.error, {
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
  };

  return (
    <div className="flex flex-col   items-center ml-20  font-volkhorn bg-[url('/img/beehive-bg1.jpeg')] ">
      <div className="flex">
        <h1 className="mt-20 text-xl ">Post an</h1>
        <RiAdvertisementFill className="mt-12 ml-2 text-6xl text-yellow-500" />
      </div>

      {loading ? (
        <Loader loaderStyle="h-screen flex justify-center mt-64" />
      ) : (
        <form action="">
          <label className="" htmlFor="">
            Gender:
          </label>
          <br></br>

          <ul className="grid grid-cols-3  text-black gap-x-5 mt-3 max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer "
                type="radio"
                onChange={handleInputChange}
                value="male"
                name="gender"
                id="male"
                required
              />
              <label
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="female"
              >
                Female
              </label>
            </li>
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                onChange={handleInputChange}
                value="bothGenders"
                name="gender"
                id="both genders"
              />
              <label
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="both genders"
              >
                Both Genders
              </label>
            </li>
          </ul>

          <label htmlFor="">Complexion:</label>

          <br></br>
          <ul className="grid grid-cols-3 gap-x-5 pb-3 text-white   max-w-md ">
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
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="fair"
              >
                Fair
              </label>
            </li>
          </ul>
          <h1>Stature</h1>
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
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                className="flex p-5 bg-white hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="chubby"
              >
                Chubby
              </label>
            </li>
          </ul>

          <div className="flex flex-col">
            <label htmlFor="">Job description</label>
            <textarea
              className="border border-black rounded rounded-lg"
              name="description"
              id=""
              cols="30"
              rows="10"
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            className="mr-5 mt-5 bg-yellow-500 hover:bg-purple-600 border-2 text-black hover:text-white  h-[50px] rounded-lg w-[340px]  w-full lg:w-[500px] "
            onClick={handleSubmit}
          >
            POST
          </button>
        </form>
      )}

      <ToastContainer />
    </div>
  );
}

export default AgencyJobs;
