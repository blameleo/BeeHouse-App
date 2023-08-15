import React, { useState } from "react";
import RegistrationButton from "../components/RegistrationButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import Loader from "./Loader";

function AgencySignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(null);

  const [agencySignUpData, setAgencySignUpData] = React.useState({
    email: "",
    type: "agency",

    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAgencySignUpData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        agencySignUpData
      );

      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.userId);
      setCookie("AuthToken", response.data.token);

      if (response.status === 200) {
        setLoading(false);
        navigate("/agencyonboarding");
      }
    } catch (error) {
      setLoading(false);

      setInfo(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {loading ? (
          <Loader loaderStyle="w-[400px] h-[400px] flex justify-center items-center" />
        ) : (
          <div className="">
            <label className="font-volkhorn" htmlFor="">
              Email:
            </label>
            <br></br>
            <input
              type="email"
              name="email"
              className="mb-5  border p-2 w-96  border-1 border-black rounded-md   "
              onChange={handleChange}
              value={agencySignUpData.email}
              placeholder="Email"
            />

            <br></br>

            <label className="font-volkhorn" htmlFor="">
              Password:
            </label>
            <br></br>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={agencySignUpData.password}
              placeholder="Password"
              className="mb-5  border p-2 w-96  border-1 border-black rounded-md  "
            />

            <br></br>
            <label className="font-volkhorn" htmlFor="">
              Confirm Password:
            </label>
            <br></br>
            <input
              name="confirmPassword"
              type="password"
              id=""
              onChange={handleChange}
              value={agencySignUpData.confirmPassword}
              placeholder="Confirm Password"
              className=" mb-5  border p-2 w-96  border-1 border-black rounded-md  "
            />
            <br></br>
            <p className="text-red-500">{info}</p>

            <div className="flex justify-center mt-7">
              <RegistrationButton label="Sign up" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default AgencySignUp;
