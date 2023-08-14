import React from "react";
import Logo from "../components/Logo";
import axios from "axios";
import { useCookies } from "react-cookie";
import { FaForumbee } from "react-icons/fa";

function ModelOnboardingPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [formData, setFormData] = React.useState({
    user_id: cookies.UserId,
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-neutral-950 font-volkhorn ">
      <div className=" px-5 py-5  flex">
        <FaForumbee className="text-yellow-500 mr-1 text-3xl" />
        <h1 className="text-yellow-500 text-3xl">BeeHouse</h1>
      </div>
      <div className="flex justify-center mb-12">
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
            value={formData.firstName}
            placeholder="First Name"
            name="firstName"
            id=""
          />
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
            value={formData.lastName}
            id=""
          />
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
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            id="phoneNumber"
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
              <label>Day:</label>
              <br />
              <input
                className="border outline-none px-3 border-yellow-500 bg-black  mt-1 w-20 h-14 rounded rounded-lg"
                type="number"
                placeholder="DD"
                name="dobDay"
                value={formData.dobDay}
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2">
              <label>Month:</label>
              <br />
              <input
                className="border outline-none px-3 border-yellow-500 bg-black  mt-1 w-20 h-14 rounded rounded-lg"
                type="number"
                placeholder="MM"
                name="dobMonth"
                value={formData.dobMonth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Year:</label>
              <br />
              <input
                className="border px-3 outline-none border-yellow-500 bg-black  mt-1 w-24 h-14 rounded rounded-lg"
                type="number"
                placeholder="YYYY"
                name="dobYear"
                value={formData.dobYear}
                onChange={handleInputChange}
              />
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
            placeholder="height"
            onChange={handleInputChange}
            name="height"
            value={formData.height}
            id=""
          />
          <br></br>

          <label htmlFor="">Location:</label>
          <br></br>
          <input
            className=" outline-none border px-3 border-yellow-500 mb-3 bg-black   mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg "
            type="text"
            placeholder="Location"
            onChange={handleInputChange}
            value={formData.location}
            name="location"
            id=""
          />
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
              htmlFor="upload"
              className="relative rounded bg-neutral-550 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              <span className="text-gray-400 text-3xl">+</span>
            </label>
            <input
              type="file"
              id="upload"
              name="idCardUrl"
              className="hidden"
              onChange={handleInputChange}
            />
          </div>
          <br></br>

          <label htmlFor="">Profile pic:</label>
          <br></br>
          <div className="flex items-center">
            <label
              htmlFor="upload"
              className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              ß<span className="text-gray-400 text-3xl">+</span>
            </label>
            <input
              type="file"
              id="upload"
              className="hidden"
              onChange={handleInputChange}
              name="displayPicUrl"
            />
          </div>

          <br></br>

          <label htmlFor="">Images Upload :</label>
          <br></br>
          <div className="flex ">
            <div className="flex items-center mr-5">
              <label
                htmlFor="upload"
                className="relative rounded bg-neutral-950 border-dashed border-4  border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
              >
                <span className="text-gray-400 text-3xl">+</span>
              </label>
              <input
                type="file"
                id="upload"
                onChange={handleInputChange}
                className="hidden"
                name="imageUrl1"
              />
            </div>

            <div className="flex items-center mr-5">
              <label
                htmlFor="upload"
                className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
              >
                <span className="text-gray-400 text-3xl">+</span>
              </label>
              <input
                type="file"
                id="upload"
                className="hidden"
                onChange={handleInputChange}
                name="imageUrl1"
              />
            </div>

            <div className="flex items-center">
              <label
                htmlFor="upload"
                className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
              >
                <span className="text-gray-400 text-3xl">+</span>
              </label>
              <input
                type="file"
                id="upload"
                className="hidden"
                onChange={handleInputChange}
                name="imageUrl2"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="flex justify-center pb-10">
        <button
          onClick={handleSubmit}
          className="mr-5 mt-5 bg-yellow-500 border border-2 border-black h-[50px] rounded-lg w-[150px]"
        >
          Continue
        </button>
      </div>

      <div className="flex text-white text-xl hover:text-blue-500 justify-center pb-5">
        <h1>Already have an account? Log in</h1>
      </div>
    </div>
  );
}

export default ModelOnboardingPage;
