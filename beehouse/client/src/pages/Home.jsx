import React, { useState } from "react";
// import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import SecNavbar from "../components/SecNavbar";
import SearchBar from "../components/SearchBar";
import Jobs from "../components/Jobs";
import BottomNav from "../components/BottomNav";

export default function Home() {

  return (
    <div>
      <SecNavbar />
      <SearchBar />
      <Jobs />
      <BottomNav />
    </div>
  );
}
