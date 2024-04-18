import React from "react";
import volunteer4 from "./../assets/images/volunteer4.svg";
import bgImg from "../assets/images/bgHelpingHand.jpg";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path)
  }
  return (
    <div className="flex justify-center items-center bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${bgImg})`}}> 
      <div className=" w-3/4  p-12  drop-shadow bg-[#FFFFFF] rounded-md backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center pt-10 ">
        <img src={volunteer4} className="w-3/5 " alt="" />
        <p className="text-[#380445] mt-10 font-medium text-xl uppercase">
          Lending a hand today, goes a long way tomorrow
        </p>
        <p className="text-[#380445] mt-3 font-light text-md text-center p-16 ">
          InDiSupport, a non-governmental organization (NGO), is dedicated to
          addressing the urgent needs of internally displaced Nigerians. With a
          mission centered on compassion and empowerment, InDiSupport focuses on
          providing essential support in various critical areas. From ensuring
          access to safe housing and nutritious food to providing clothing and
          educational opportunities, the organization strives to uplift
          displaced individuals and families.
        </p>
      </div>
      <div className="flex justify-center gap-10 pt-10 px-40">
        <button className=" rounded-full text-[#FFFFFF] p-4 bg-[#41788E] drop-shadow-md w-60 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]" onClick={() => goTo('/login')}>LOGIN</button>
        <button className="rounded-full text-[#FFFFFF] p-4 bg-[#F7A741] drop-shadow-md w-60 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]" onClick={() => goTo('/signup')}>SIGNUP</button>
      </div>

      </div>
    </div>
  );
};

export default Home;