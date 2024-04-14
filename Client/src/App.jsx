import { BrowserRouter, Routes, Route } from "react-router-dom"; // curly brackets are used when there is an array of exports that need to be im ported
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup";
import NearYou from "./pages/NearYou";
import RequesterHome from "./pages/requesterHomepage/RequesterHome";

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
          <Route path="/requesterhome" element={<RequesterHome/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
