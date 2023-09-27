import React, { useState } from "react";
// import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import SecNavbar from "../components/SecNavbar";
import SearchBar from "../components/SearchBar";
import Jobs from "../components/Jobs";
import BottomNav from "../components/BottomNav";

export default function Home() {
  // const { user, logOut } = UserAuth();

  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate('/')
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  return (
    <div>
      <SecNavbar />
      <SearchBar />
      <Jobs />
      <BottomNav />
    </div>
  );
}
