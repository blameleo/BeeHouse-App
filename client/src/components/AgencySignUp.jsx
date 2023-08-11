import React from "react";
import RegistrationButton from "../components/RegistrationButton";
import { useNavigate } from "react-router-dom";

function AgencySignUp() {
  const [agencySignUpData, setAgencySignUpData] = React.useState({
    agencyName: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = React.useState("");
  const [info, setInfo] = React.useState("");

  const usersCollectionRef = collection(db, "users");

  const navigate = useNavigate();

  const { createUser } = UserAuth();
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

    setError("");
    try {
      await createUser(agencySignUpData.email, agencySignUpData.password);
      await addDoc(usersCollectionRef, agencySignUpData);
      setAgencySignUpData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setInfo("Agency profile successfully created ");

      navigate("/login");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label className="font-volkhorn" htmlFor="">
          Agency Name:
        </label>
        <br></br>
        <input
          type="text"
          name="agencyName"
          className="mb-5 border p-2 w-96  border-1 border-black rounded-md"
          onChange={handleChange}
          value={agencySignUpData.agencyName}
          placeholder="Agency Name"
        />
        <br></br>

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
          Location:
        </label>
        <br></br>
        <input
          name="location"
          type="text"
          onChange={handleChange}
          value={agencySignUpData.location}
          placeholder="Location"
          className="mb-5  border p-2 w-96  border-1 border-black rounded-md  "
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
