import React, { useState } from "react";
import RegistrationButton from "./RegistrationButton";
import { UserAuth } from "../context/AuthContext";
import  { useNavigate} from "react-router-dom"
import { db } from "../firebase";
import { collection,addDoc } from "firebase/firestore";





function ModelSignUp() {
  const [modelSignUpData, setModelSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [info, setInfo] = useState("")


  const usersCollectionRef = collection(db, "users")

const navigate = useNavigate()



  const { createUser } = UserAuth();
  const handleChange = (e) => {
    setModelSignUpData((prev) => {
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
      await createUser(modelSignUpData.email, modelSignUpData.password);
      await addDoc(usersCollectionRef,modelSignUpData)
      setModelSignUpData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setInfo('user created succesfully')

      navigate('/login')
 
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };
  return (
    <form className=" " onSubmit={handleSubmit}>
      <label className="font-volkhorn" htmlFor="">
        Firstname:
      </label>
      <br></br>
      <input
        value={modelSignUpData.firstName}
        name="firstName"
        onChange={handleChange}
        type="text"
        className="mb-5 border p-2 w-96  border-1 border-black rounded-md  "
        placeholder="Firstname"
      />
      <br></br>

      <label className="font-volkhorn" htmlFor="">
        Lastname:
      </label>
      <br></br>
      <input
        value={modelSignUpData.lastName}
        name="lastName"
        onChange={handleChange}
        type="text"
        className="mb-5  border p-2 w-96  border-1 border-black rounded-md  "
        placeholder="Lastname"
      />
      <br></br>

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
      <p className="text-center text-xs text-green-500">{info}</p>

      <div className="flex justify-center mt-7">
        <RegistrationButton label="Sign up" />
      </div>
    </form>
  );
}

export default ModelSignUp;
