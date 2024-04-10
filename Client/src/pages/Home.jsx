import React from "react";
import volunteer4 from "./../assets/images/volunteer4.svg";
import luckycharm from "./../assets/images/luckycharm.svg";
import bottomcircle from "./../assets/images/bottomcircle.svg";



const Home = () => {
  return (
    <div className="bg-[#D5CBD8] min-h-screen flex justify-center items-center">
      {/* <img src={helpinghands} className='h-screen w-screen bg-center bg-repeat' alt="" /> */}
      <div className="bg-[#ffffff] border  p-10">
      <div className="flex flex-col justify-center items-center pt-10">
      <img src={luckycharm} className=" absolute top-14 right-0" alt="" />
        <img src={volunteer4} className="w-3/5 " alt="" />
        <p className="text-[#380445] mt-10 font-medium text-xl uppercase">
          Lending a hand today, goes a long way tomorrow
        </p>
        <p className="text-[#380445] mt-3 font-light text-sm text-justify p-10">
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
        <button className="border rounded-full text-[#FFFFFF] p-4 bg-[#41788E] drop-shadow-md w-60 hover:bg-[#F7A741] focus:ring-2 focus:ring-[#41788E] ">LOGIN</button>
        <button className="border rounded-full text-[#FFFFFF] p-4 bg-[#F7A741] drop-shadow-md w-60 hover:bg-[#41788E] focus:ring-2 focus:ring-[#F7A741]">SIGNUP</button>
      </div>
      <img src={bottomcircle} className="overflow-hidden absolute bottom-0 left-0 rounded-bl-lg" alt="" />

      </div>
    </div>
  );
};

export default Home;
