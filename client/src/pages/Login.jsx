import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import { useCookies } from "react-cookie";
import Popup from "../components/Popup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  });

  // const { logIn } = UserAuth();

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log(response);
      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.userId);
      setCookie("AuthToken", response.data.token);

      if (response.data.type === "model") {
        navigate("/home");
      } else if (response.data.type === "agency") {
        navigate("/agency");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      {/* {loading ? (
        <div className="flex bg-yellow-500 justify-center h-screen items-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="black"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />{" "}
        </div>
      ) : ( */}
      <div className="grid sm:grid-cols-3 h-screen  ">
        <div className="  h-screen col-span-2 p-2 ">
          <Link to="/">
            <Logo />
          </Link>

          <div className="flex justify-center items-center h-5/6 ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-around h-4/6 w-10/12 sm:w-4/12"
            >
              <div>
                <h1 className="text-left font-bold text-lg mb-2">Login</h1>
                <p className="text-left text-gray-400">
                  Please enter your details
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Email
                </label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name=""
                  className="border rounded pl-3 h-12 placeholder:text-sm "
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Password
                </label>
                <input
                  placeholder="********"
                  type="password"
                  name=""
                  className="border rounded pl-3 h-12 placeholder:text-sm "
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <a href="" className="text-xs text-right text-yellow-500">
                forgot password?
              </a>

              <Button
                name="login"
                loginStyle="bg-yellow-500 w-full rounded text-white font-bold py-2  hover:bg-purple-600"
              />

              {/* <Button
                name="Sign in with google"
                googleLoginStyle=" w-full border rounded py-1 flex justify-center items-center"
              /> */}

              <p className="text-xs text-center">
                Don't have an account?{" "}
                <a
                  onClick={() => setOpenPopup(true)}
                  className="text-yellow-500 cursor-pointer hover:text-purple-600 font-bold text-sm"
                >
                  {" "}
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden sm:block ">
          <img
            src="/img/model1.jpg"
            alt=""
            className="w-full h-full sm:object-contain lg:object-fill "
          />
        </div>
      </div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onClose={handleClosePopup}
      ></Popup>
      {/* )} */}
    </div>
  );
}
