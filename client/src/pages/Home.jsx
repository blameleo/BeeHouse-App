import React from "react";
// import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SecNavbar from "../components/SecNavbar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  // const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate('/')
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  return (
    <div className="">
      <SecNavbar />
      <SearchBar />
    </div>
  );
}
