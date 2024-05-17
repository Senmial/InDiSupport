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
    <div className="">
        <img src={bgImg} className="w-full h-screen object-cover absolute " alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-10 rounded-md w-2/4 backdrop-blur-xl ">
            <img src={volunteer4} className="w-3/4 " alt="" />
            <p className=" text-[#FFFFFF] font-extralight">
              Lending a hand today, goes a long way tomorrow.
            </p>
            <p className="pt-10 text-center text-md font-thin text-[#FFFFFF]">
              InDiSupport, a non-governmental organization (NGO), is dedicated
              to addressing the urgent needs of internally displaced Nigerians through the helping hands of volunteers.
            </p>
            <div className="flex justify-center items-center mt-5 pt-10 ">
              
             
              <button
                className="rounded-full text-[#FFFFFF] p-4 bg-[#380445] drop-shadow-md w-40 hover:bg-[#F7A741] focus:ring-2 focus:ring-[#380445]"
                onClick={() => goTo("/login")}
              >
                Proceed
              </button>
            </div>
          </div> 
        </div>
  );
};

export default Home;
