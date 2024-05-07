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
    <div className="flex">
      <div>
        <img src={bgImg} className="min-h-screen" alt="" />
      </div>
          {/* <nav className="flex justify-end  py-10">
            <ul>
              <a href="/about" className="text-[#000000] text-sm">
                About InDiSupport
              </a>
            </ul>
          </nav> */}
          <div className="flex flex-col justify-center items-center p-10 ">
            <img src={volunteer4} className="w-3/4 " alt="" />
            <p className="italic text-[#380445]">
              Lending a hand today, goes a long way tomorrow.
            </p>
            <p className="pt-10 text-center text-md">
              InDiSupport, a non-governmental organization (NGO), is dedicated
              to addressing the urgent needs of internally displaced Nigerians.
            </p>
            <div className="flex justify-center mt-5 gap-10 pt-10">
              <button
                className=" rounded-full text-[#FFFFFF] p-4 bg-[#41788E] drop-shadow-md w-40 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]"
                onClick={() => goTo("/login")}
              >
                LOGIN
              </button>
              <button
                className="rounded-full text-[#FFFFFF] p-4 bg-[#F7A741] drop-shadow-md w-40 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]"
                onClick={() => goTo("/signup")}
              >
                SIGNUP
              </button>
            </div>
          </div>
        </div>
  );
};

export default Home;
