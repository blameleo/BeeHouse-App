import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import "./App.css";
import ModelOnboardingPage from "./pages/ModelOnboardingPage";
// import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      {/* <AuthContextProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/modelonboarding" element={<ModelOnboardingPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
