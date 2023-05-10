import React from 'react'
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="grid place-items-center">
    <h1 className="text-green-700 text-center py-5">
      you logged in succesfully
    </h1>
    <p>User Email: {user?.email} </p>
    <button onClick={handleLogout} className="border p-2 border-black w-32 ">
      log out{" "}
    </button>
  </div>
);
  
}
