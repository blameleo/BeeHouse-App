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
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import AgencyDash from "./components/AgencyDash";
import AgencyJobs from "./pages/AgencyJobs";
import AgencyProfile from "./pages/AgencyProfile";
import AgencySecurity from "./pages/AgencySecurity";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="https://beehouse-app-frontend.vercel.app/login"
              element={<Login />}
            />

            <Route element={<PrivateRoutes />}>
              <Route
                path="https://beehouse-app-frontend.vercel.app/home"
                element={<Home />}
              />

              <Route
                path="https://beehouse-app-frontend.vercel.app/agency"
                element={<Agency />}
              >
                <Route index element={<AgencyDash />} />
                <Route path="jobs" element={<AgencyJobs />} />

                <Route path="profile" element={<AgencyProfile />} />
                <Route path="security" element={<AgencySecurity />} />
              </Route>

              <Route
                path="https://beehouse-app-frontend.vercel.app/settings"
                element={<ModelSettings />}
              >
                <Route index element={<ModelEditPage />} />
                <Route path="modeledit" element={<ModelEditPage />} />
                <Route path="changepassword" element={<ChangePasswordPage />} />
              </Route>

              <Route
                path="https://beehouse-app-frontend.vercel.app/agencyonboarding"
                element={<AgencyOnboardingPage />}
              />
              <Route
                path="https://beehouse-app-frontend.vercel.app/modelonboarding"
                element={<ModelOnboardingPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
