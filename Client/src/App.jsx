import { BrowserRouter, Routes, Route } from "react-router-dom"; // curly brackets are used when there is an array of exports that need to be im ported
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup";
import ShelterHome from "./pages/ShelterHome";
import RequesterHome from "./pages/requesterHomepage/RequesterHome";
import HealthCare from "./pages/HealthCare";
import FoodBank from "./pages/FoodBank";
import MasbithCare from "./pages/MasbithCare";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/indisupport" element={<LandingPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/shelterhome" element={<ShelterHome/>} /> 
          <Route path="/requesterhome" element={<RequesterHome/>} /> 
          <Route path="/healthcare" element={<HealthCare />} /> 
          <Route path="/foodbank" element={<FoodBank />} /> 
          <Route path="/masbithcare" element={<MasbithCare />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
