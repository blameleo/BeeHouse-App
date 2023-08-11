import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Agency from "./pages/Agency"
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      
      <AuthContextProvider>
      
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Landing />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/home" element={<Home />} />
          <Route path="/agency" element={<Agency />}/>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;