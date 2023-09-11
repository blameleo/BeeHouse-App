import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { MdVerified } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { fetchJobsFailure, fetchJobsSuccess } from "../Redux/slice/jobSlice";

function AgencyJobs() {
  const [tags, setTags] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tagInput, setTagInput] = useState("");
  const user = useSelector((state) => state.user);
  const jobs = useSelector((state) => state.job.jobs);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

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
      color: getRandomColor(),
    };

    console.log(formWithTags);

    try {
      const response = await axios.post(
        "http://localhost:4000/jobs/create",
        formWithTags
      );

      if (response.status === 201) {
        setLoading(false);
        fetchAgencyJobs();
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
        handleClose();
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
    if (user && user._id && user.agencyName) {
      setFormInfo({
        _id: user._id,
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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const fetchAgencyJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/jobs/getjobs/${user._id}`
      );
      dispatch(fetchJobsSuccess(response.data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      dispatch(fetchJobsFailure(error.message));
    }
  };

  useEffect(() => {
    fetchAgencyJobs();
  }, [user?._id]);

  function getRandomColor() {
    const base = 200; //
    const variance = 55;
    const red = base + Math.floor(Math.random() * variance);
    const green = base + Math.floor(Math.random() * variance);
    const blue = base + Math.floor(Math.random() * variance);
    const yellow = base + Math.floor(Math.random() * variance);
    const purple = base + Math.floor(Math.random() * variance);
    const violet = base + Math.floor(Math.random() * variance);
    const pink = base + Math.floor(Math.random() * variance);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const deleteJob = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:4000/jobs/deletejob/${id}`
      );

      if (response.status === 200) {
        fetchAgencyJobs();

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
      }

      setLoading(false);
    } catch (error) {
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

  return (
    <div className="flex flex-col   ml-20 lg:ml-60  items-center     ">
      {/* <div className="flex">
        <h1 className="mt-20 text-xl ">Post an</h1>
        <RiAdvertisementFill className="mt-12 ml-2 text-6xl text-yellow-500" />
      </div> */}
      <button
        className="mt-5 px-2 py-1 bg-yellow-500 absolute cursor-pointer hover:bg-purple-600 hover:text-white"
        onClick={handleOpen}
      >
        Post a job
      </button>

      {loading ? (
        <Loader loaderStyle="mt-44" />
      ) : (
        <div className="flex flex-wrap sm:px-8 mt-20 ">
          {jobs.map((job) => {
            const date = new Date(job.createdAt);

            const day = date.getDate();

            const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const month = monthNames[date.getMonth()];

            const year = date.getFullYear();

            console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
            return (
              <div className=" h-[20%] w-[250px] sm:ml-[20px] mr-5 border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500  mb-10">
                <div
                  className=" bg-blue-100 rounded-[20px] m-2 p-2"
                  style={{ backgroundColor: job.color }}
                >
                  <p className="bg-white rounded-lg flex justify-center w-24 py-1 px-8 text-[10px]">
                    {`${day},${month},${year}`}
                  </p>

                  <div className="pt-6 flex items-center">
                    <h1 className=" text-gray-700 text-[70%]">
                      {job.agencyName}
                    </h1>
                    <MdVerified className="ml-1 text-yellow-500 text-[90%]" />
                  </div>

                  <div className="py-2">
                    <h1 className="font-black text-md">{job.description}</h1>
                  </div>
                  <div className="flex flex-wrap">
                    {Object.values(job.tags).map((tag, i) => (
                      <p
                        key={i}
                        className="border border-gray-400 mr-2 text-gray-600 text-[14px] rounded-xl px-[5px] my-1"
                      >
                        {tag}
                      </p>
                    ))}
                    {/* // .join(",")} */}
                  </div>
                </div>
                <div className="px-4 pt-2 flex  pb-1 justify-between items-center">
                  <div>
                    <p className="font-black text-md">₵{job.price}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <RiDeleteBin2Fill
                    className="text-2xl text-red-500 cursor-pointer"
                    onClick={() => deleteJob(job._id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <AiOutlineCloseCircle
        className="absolute top-2 right-5 text-red-500 text-[25px] cursor-pointer"
        onClick={handleClose}
      >
        close
      </AiOutlineCloseCircle>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {loading ? (
              <Loader loaderStyle=" flex justify-center p-20 " />
            ) : (
              <form action="" className="relative">
                <label className="" htmlFor="">
                  Gender:
                </label>
                <br></br>

                <ul className="grid grid-cols-3 mb-2  text-black gap-x-5 mt-2 max-w-md ">
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
                      className="flex px-1  justify-center hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                      className="flex px-1  justify-center  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                      className="flex px-1  justify-center   hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                      htmlFor="both genders"
                    >
                      Unisex
                    </label>
                  </li>
                </ul>

                <label htmlFor="">Complexion:</label>

                <br></br>
                <ul className="grid grid-cols-3 gap-x-5 pb-2 text-white    max-w-md ">
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
                      className="flex px-1  justify-center  hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                      className="flex px-1  justify-center  hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                      htmlFor="fair"
                    >
                      Fair
                    </label>
                  </li>
                </ul>
                <h1>Stature</h1>
                <ul className="grid grid-cols-3 gap-x-5 pb-5  max-w-md ">
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
                      className="flex px-1  justify-center  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                      className="flex px-1  justify-center  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
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
                      className="flex px-1  justify-center  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                      htmlFor="chubby"
                    >
                      Chubby
                    </label>
                  </li>
                </ul>

                <div className="tag-input">
                  <input
                    className="border border-black border-outline-none h-[40px] p-3 mb-3 rounded-lg"
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
                <div className="mt-3">
                  <label htmlFor="price">Price(₵): </label>
                  <input
                    type="number"
                    className="border border-black ml-5 p-1 rounded-lg"
                    onChange={handleInputChange}
                    value={formInfo.price}
                    name="price"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="price">Location: </label>
                  <input
                    type="text"
                    className="border border-black ml-5 p-1 rounded-lg"
                    onChange={handleInputChange}
                    value={formInfo.location}
                    name="location"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="">Job description</label>
                  <textarea
                    className="border border-black  rounded-lg min-h-[40px]"
                    name="description"
                    id=""
                    cols="30"
                    rows="3"
                    onChange={handleInputChange}
                    value={formInfo.description}
                    required
                  />
                </div>

                <button
                  className="mr-5 mt-5 bg-yellow-500 hover:bg-purple-600 border-2 text-black hover:text-white  py-2 rounded-lg   w-full  "
                  onClick={handleSubmit}
                >
                  POST
                </button>
              </form>
            )}
          </Box>
        </Modal>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AgencyJobs;
