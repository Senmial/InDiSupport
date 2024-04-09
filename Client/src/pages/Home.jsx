import React from "react";
import volunteer4 from "./../assets/images/volunteer4.svg";

const Home = () => {
  return (
    <div className="bg-[#D5CBD8] min-h-screen">
      {/* <img src={helpinghands} className='h-screen w-screen bg-center bg-repeat' alt="" /> */}
      <div className="flex flex-col justify-center items-center pt-20">
        <img src={volunteer4} className="w-3/5 " alt="" />
        <p className="text-[#380445] mt-10 font-medium text-xl uppercase">
          Lending a hand today, goes a long way tomorrow
        </p>
        <p className="text-[#380445] mt-7 font-light text-sm text-justify p-10">
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
        <button className="border rounded text-[#FFFFFF] p-4 bg-[#41788E] drop-shadow-md">LOGIN</button>
        <button className="border rounded text-[#FFFFFF] p-4 bg-[#F7A741] drop-shadow-md">SIGNUP</button>
      </div>
    </div>
  );
};

export default Home;
