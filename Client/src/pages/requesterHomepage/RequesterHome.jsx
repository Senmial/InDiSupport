import React from "react";
import Navbar from "../../components/Navbar.jsx";
import luckycharm from "../../assets/images/luckycharm.svg";
import shelterImg from "../../assets/images/shelterImg.svg";
import FoodBankImg from "../../assets/images/foodBankImg.svg";
import HealthServicesImg from "../../assets/images/healthServicesImg.svg";

const RequesterHome = () => {
  return (
    <div >
      <Navbar />
      <br />

      <p className="flex flex-col justify-center items-center text-[#380445] font-medium">
        Hi there friend, how may we help you today?
      </p>
      <br />
      <section className="flex flex-col justify-center items-center">
        <div className="bg-[#380445] p-5 rounded-2xl  w-3/4 drop-shadow-md overflow-hidden border-2 flex ">
          <img src={shelterImg} className="p-5" alt="" />
          <div className=" flex-col px-5">
            <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
            <p className="text-[#F7A741] font-bold">Shelter</p>
            <div className="flex flex-col gap-4 text-[#FFFFFF] font-light text-sm mt-4">
              <p className="font-bold">Find available shelters near you. </p>
              <p>
                Find available shelters near you which provide those in need
                with a bed to sleep for a specific number of days.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="bg-[#380445] p-5 rounded-2xl  w-3/4 drop-shadow-md overflow-hidden border-2 flex ">
          <img src={FoodBankImg} className="p-5" alt="" />
          <div className=" flex-col px-5">
            <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
            <p className="text-[#F7A741] font-bold">Food Banks</p>
            <div className="flex flex-col gap-4 text-[#FFFFFF] font-light text-sm mt-4">
              <p className="font-bold">Find available food banks near you.  </p>
              <p>
              Find available food banks near you whcih provides food to those in need at specific times and on specific days. 
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="bg-[#380445] p-5 rounded-2xl  w-3/4 drop-shadow-md overflow-hidden border-2 flex ">
          <img src={HealthServicesImg} className="p-5" alt="" />
          <div className=" flex-col px-5">
            <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
            <p className="text-[#F7A741] font-bold">Health Care</p>
            <div className="flex flex-col gap-4 text-[#FFFFFF] font-light text-sm mt-4">
              <p className="font-bold">Find available healthcare services near you.  </p>
              <p>
              Find available healthcare services near you. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequesterHome;
