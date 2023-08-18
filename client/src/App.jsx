import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import "./App.css";
import ModelSettings from "./pages/ModelSettings";
import ModelOnboardingPage from "./pages/ModelOnboardingPage";
import AgencyOnboardingPage from "./pages/AgencyOnBoardingPage";
import ModelEditPage from "./pages/ModelEditPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import PrivateRoutes from "./utils/PrivateRoutes";

// import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      {/* <AuthContextProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/agency" element={<Agency />} />
            <Route path="/settings" element={<ModelSettings />}>
              <Route index element={<ModelEditPage />} />
              <Route path="/settings/modeledit" element={<ModelEditPage />} />
              <Route
                path="/settings/changepassword"
                element={<ChangePasswordPage />}
              />
            </Route>
            <Route
              path="/agencyonboarding"
              element={<AgencyOnboardingPage />}
            />
            <Route path="/modelonboarding" element={<ModelOnboardingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
