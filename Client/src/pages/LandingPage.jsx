import React from "react";
import volunteer4 from "./../assets/images/volunteer4.svg";
import bgImg from "../assets/images/bgHelpingHand.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className=" w-full min-h-screen  backdrop-blur-md">
<nav className="flex justify-end px-20 py-10">
  <ul>
    <a href="/about" className="text-[#380445]">About Us</a>
  </ul>
</nav>
        <div className="flex flex-col justify-center items-center pt-10 ">
          <img src={volunteer4} className="w-2/5 " alt="" />
            <p className="text-[#FFFFFF]   p-1 rounded-md font-light text-xl ">
              Lending a hand today, goes a long way tomorrow
            </p>
          


          
          <div className="flex justify-center mt-52 gap-10 pt-10 px-40">
            <button
              className=" rounded-full text-[#FFFFFF] p-4 bg-[#41788E] drop-shadow-md w-60 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]"
              onClick={() => goTo("/login")}
            >
              LOGIN
            </button>
            <button
              className="rounded-full text-[#FFFFFF] p-4 bg-[#F7A741] drop-shadow-md w-60 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]"
              onClick={() => goTo("/signup")}
            >
              SIGNUP
            </button>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Home;
