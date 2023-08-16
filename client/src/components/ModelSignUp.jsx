import React, { useState } from "react";
import RegistrationButton from "./RegistrationButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModelSignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(null);
  const [modelSignUpData, setModelSignUpData] = useState({
    type: "model",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setModelSignUpData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        modelSignUpData
      );

      console.log(response);
      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.userId);
      setCookie("AuthToken", response.data.token);
      // alert("User is registered");
      // navigate("/modelonboarding");
      if (response.status === 200) {
        setLoading(false);
        navigate("/modelonboarding");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message, {
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
    <div>
      <form className=" " onSubmit={handleSubmit}>
        {loading ? (
          <Loader loaderStyle="w-[400px] h-[400px] flex justify-center items-center" />
        ) : (
          <div>
            <label className="font-volkhorn" htmlFor="">
              Email:
            </label>
            <br></br>
            <input
              value={modelSignUpData.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="mb-5  border p-2 w-96  border-1 border-black rounded-md  "
            />
            <br></br>

            <label className="font-volkhorn" htmlFor="">
              Password:
            </label>
            <br></br>
            <input
              value={modelSignUpData.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="mb-5  border p-2 w-96  border-1 border-black rounded-md  "
            />

            <br></br>
            <label className="font-volkhorn" htmlFor="">
              Confirm Password:
            </label>
            <br></br>
            <input
              value={modelSignUpData.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              id=""
              placeholder="Confirm Password"
              className=" mb-5  border p-2 w-96  border-1 border-black rounded-md  "
            />
            <br></br>
            {/* <p className="text-center text-xs text-green-500">{info}</p> */}
            <ToastContainer />
            <div className="flex justify-center mt-7">
              <RegistrationButton label="Sign up" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ModelSignUp;
