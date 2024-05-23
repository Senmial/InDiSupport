import React from "react";
import Navbar from "../../components/Navbar.jsx";
import luckycharm from "../../assets/images/luckycharm.svg";
import shelterImg from "../../assets/images/shelterImg.svg";
import FoodBankImg from "../../assets/images/foodBankImg.svg";
import HealthServicesImg from "../../assets/images/healthServicesImg.svg";
import bgImg from "../../assets/images/bgHelpingHand.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const RequesterHome = () => {
  const navigate = useNavigate();

  // function that navigates to a defined route
  // path is the define route e.g. '/shelterhome'
  const goTo = (path) => {
    navigate(path)
  }

  return (
    <div
      className="bg-cover bg-center min-h-screen"
    >
      <Navbar />
      <br />
      <p className=" text-[#380445] font-thin text-2xl  mt-32 flex justify-center items-center">
        Hi there friend, how may we help you today?
      </p>
      <br />
      <section className="flex justify-center items-center gap-5 mt-10 mb-24 lg:flex-row sm:flex-col ">
        <button
          className="backdrop-blur-xl p-5 rounded-tl-3xl rounded-br-3xl  w-1/4  shadow-md overflow-hidden border flex flex-col justify-center hover:scale-110"
          onClick={() => goTo('/shelterhome')}
        >
            <img src={shelterImg} className="p-5 w-full" alt="" />
          <div className="flex">
            <div className=" flex-col px-5">
              
              <p className="text-[#F7A741] font-md font-bold text-2xl ">Shelter</p>
                <p className=" text-md font-extralight text-[#380445] mt-4">
                  Find available shelter near you which provide those in need
                  with a bed to sleep for a specific number of days.
                </p>
            </div>
          </div>
        </button>

        <br />
        <button
          className="backdrop-blur-xl p-5 rounded-tr-3xl rounded-bl-3xl  w-1/4 shadow-md overflow-hidden border hover:scale-110"
          onClick={() => goTo('/foodbank')}
        >
          <img src={FoodBankImg} className="p-5 w-full" alt="" />
        <div className="flex ">
          <div className=" flex-col px-5">
            
            <p className="text-[#F7A741] font-md font-bold text-2xl">Food Banks</p>
            <p className=" text-md font-extralight text-[#380445] mt-4">

                Find available food banks near you which provides food to those
                in need at specific times and on specific days.
              </p>
          </div>
        </div>
        </button>
        <br />
        <button
          className="backdrop-blur-xl p-5 rounded-tl-3xl rounded-br-3xl  w-1/4 shadow-md overflow-hidden border hover:scale-110 "
          onClick={() => goTo('/healthcare')}
        >
          <img src={HealthServicesImg} className="p-5 w-full " alt="" />
        <div className="flex">
          <div className=" flex-col px-2">
            
            <p className="text-[#F7A741] font-md font-bold text-2xl">Health Care</p>
              
            <p className=" text-md font-extralight text-[#380445] mt-4">
Find available healthcare, counselling, therapy, medical professionals and emergency services near you.</p>
          </div>
        </div>
        </button>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default RequesterHome;
