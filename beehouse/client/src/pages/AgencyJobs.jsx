import React, { useState } from "react";
import { RiAdvertisementFill } from "react-icons/ri";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { useEffect } from "react";

function AgencyJobs() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(null);

  const [formInfo, setFormInfo] = useState({
    gender: "",
    complexion: "",
    stature: "",
    description: "",
    price: "",
    location: "",
  });
  console.log(user);
  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleButtonInputs = () => {};

  const handleTagInputKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const newTag = tagInput.trim();
      if (newTag !== "" && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      setFormInfo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else
      setFormInfo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    // Include the current tags in the formInfo object

    const formWithTags = {
      ...formInfo,
      tags: tags,
    };

    console.log(formWithTags);

    try {
      const response = await axios.post(
        "http://localhost:4000/jobs/create",
        formWithTags
      );

      if (response.status === 201) {
        setLoading(false);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setFormInfo({
          ...formInfo,
          gender: "",
          complexion: "",
          stature: "",
          description: "",
          price: "",
          location: "",
        });
        setTags([]);
      }
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    if (user && user.user_id && user.agencyName) {
      setFormInfo({
        agencyUserId: user.user_id,
        agencyName: user.agencyName,
        gender: "",
        complexion: "",
        stature: "",
        description: "",
        price: "",
        location: "",
      });
    }
  }, [user]);

  return (
    <div className="flex flex-col ml-20 lg:ml-60  items-center   font-volkhorn bg-[url('/img/beehive-bg1.jpeg')] ">
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

          <ul className="grid grid-cols-3 mb-5  text-black gap-x-5 mt-3 max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer "
                type="radio"
                onChange={handleInputChange}
                value="male"
                checked={formInfo.gender === "male"}
                name="gender"
                id="male"
                required
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                checked={formInfo.gender === "female"}
                value="female"
                name="gender"
                id="female"
              />
              <label
                className="flex p-4  w-[100px] hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                checked={formInfo.gender === "unisex"}
                value="unisex"
                name="gender"
                id="both genders"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="both genders"
              >
                Unisex
              </label>
            </li>
          </ul>

          <label htmlFor="">Complexion:</label>

          <br></br>
          <ul className="grid grid-cols-3 gap-x-5 pb-3 text-white    max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer"
                onChange={handleInputChange}
                type="radio"
                checked={formInfo.complexion === "dark"}
                value="dark"
                name="complexion"
                id="dark"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                checked={formInfo.complexion === "fair"}
                onChange={handleInputChange}
                name="complexion"
                id="fair"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="fair"
              >
                Fair
              </label>
            </li>
          </ul>
          <h1>Stature</h1>
          <ul className="grid grid-cols-3 gap-x-5 pb-10  max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer"
                onChange={handleInputChange}
                type="radio"
                checked={formInfo.stature === "slim"}
                value="slim"
                name="stature"
                id="slim"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                checked={formInfo.stature === "Average"}
                onChange={handleInputChange}
                name="stature"
                id="Average"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="Average"
              >
                Average
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                checked={formInfo.stature === "chubby"}
                value="chubby"
                onChange={handleInputChange}
                name="stature"
                id="chubby"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="chubby"
              >
                Chubby
              </label>
            </li>
          </ul>

          <div className="tag-input">
            <input
              className="border border-black border-outline-none h-[40px] p-3 mb-3"
              type="text"
              placeholder="Enter tags..."
              value={tagInput}
              onChange={handleTagInputChange}
              onKeyDown={handleTagInputKeyDown}
            />
            <div className=" flex">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="border flex justify-around  w-[80px]  rounded-full mr-3"
                >
                  {tag}
                  <button
                    className="text-red-500"
                    onClick={() => removeTag(tag)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <label htmlFor="price">Price(₵): </label>
            <input
              type="number"
              className="border border-black ml-5 p-2"
              onChange={handleInputChange}
              value={formInfo.price}
              name="price"
            />
          </div>

          <div className="mt-10">
            <label htmlFor="price">Location: </label>
            <input
              type="text"
              className="border border-black ml-5 p-2"
              onChange={handleInputChange}
              value={formInfo.location}
              name="location"
            />
          </div>

          <div className="flex flex-col mt-10">
            <label htmlFor="">Job description</label>
            <textarea
              className="border border-black  rounded-lg"
              name="description"
              id=""
              cols="30"
              rows="10"
              onChange={handleInputChange}
              value={formInfo.description}
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
