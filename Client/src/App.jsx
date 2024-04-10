import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import NearYou from "./pages/servicesNearYou/NearYou";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/nearyou" element={<NearYou/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
