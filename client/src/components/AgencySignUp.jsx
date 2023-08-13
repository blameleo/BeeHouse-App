import React from "react";
import RegistrationButton from "../components/RegistrationButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function AgencySignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [agencySignUpData, setAgencySignUpData] = React.useState({
    email: "",
    type: "agency",

    password: "",
    confirmPassword: "",
  });

  const [error, setError] = React.useState("");

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

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        agencySignUpData
      );
      alert("User is registered");
      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.userId);
      setCookie("AuthToken", response.data.token);
      navigate("/agencyonboarding");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <div className="flex justify-center mt-7">
          <RegistrationButton label="Sign up" />
        </div>
      </div>
    </form>
  );
}

export default AgencySignUp;
