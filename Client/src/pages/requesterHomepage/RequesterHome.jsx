import React from "react";
import Navbar from "../../components/Navbar.jsx";
import luckycharmTwo from "../../assets/images/luckycharmTwo.svg";
import shelterImg from "../../assets/images/shelterImg.svg";
import FoodBankImg from "../../assets/images/foodBankImg.svg";
import HealthServicesImg from "../../assets/images/healthServicesImg.svg";
import bgImg from "../../assets/images/bgHelpingHand.jpg";
import { useNavigate } from "react-router-dom";

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
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navbar />
      <br />
      <p className=" text-[#380445] font-thin text-2xl mr-48 mt-16 flex justify-end">
        Hi there friend, how may we help you today?
      </p>
      <br />
      <section className="flex flex-col justify-center items-end gap-3">
        <button
          className="backdrop-blur-xl p-5 rounded-2xl  w-2/5 shadow-md overflow-hidden border flex mr-10"
          onClick={() => goTo('/shelterhome')}
        >
          <div className="flex text-justify">
            <img src={shelterImg} className="p-5" alt="" />
            <div className=" flex-col px-5">
              <img
                src={luckycharmTwo}
                className=" absolute top-0 right-0"
                alt=""
              />
              <p className="text-[#F7A741] font-bold text-lg">Shelter</p>
              <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
                <p className="font-bold">Find available shelter near you. </p>
                <p>
                  Find available shelter near you which provide those in need
                  with a bed to sleep for a specific number of days.
                </p>
              </div>
            </div>
          </div>
        </button>

        <br />
        <button
          className="backdrop-blur-xl p-5 rounded-2xl  w-2/5 shadow-md overflow-hidden border flex mr-10"
          onClick={() => goTo('/foodbank')}
        >
        <div className="flex text-justify">
          <img src={FoodBankImg} className="p-5" alt="" />
          <div className=" flex-col px-5">
            <img
              src={luckycharmTwo}
              className=" absolute top-0 right-0"
              alt=""
            />
            <p className="text-[#F7A741] font-bold text-lg">Food Banks</p>
            <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
              <p className="font-bold">Find available food banks near you. </p>
              <p>
                Find available food banks near you whichh provides food to those
                in need at specific times and on specific days.
              </p>
            </div>
          </div>
        </div>
        </button>
        <br />
        <button
          className="backdrop-blur-xl p-5 rounded-2xl  w-2/5 shadow-md overflow-hidden border flex mr-10"
          onClick={() => goTo('/healthcare')}
        >
        <div className="flex text-justify">
          <img src={HealthServicesImg} className="p-5" alt="" />
          <div className=" flex-col px-5">
            <img
              src={luckycharmTwo}
              className=" absolute top-0 right-0"
              alt=""
            />
            <p className="text-[#F7A741] font-bold text-lg">Health Care</p>
            <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
              <p className="font-bold">
                Find available healthcare services near you.{" "}
              </p>
              <p>Find available healthcare and emergency services near you.</p>
            </div>
          </div>
        </div>
        </button>
      </section>
    </div>
  );
};

export default RequesterHome;
