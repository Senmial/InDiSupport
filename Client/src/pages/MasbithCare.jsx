import React from "react";

import Navbar from "../components/Navbar.jsx";
import masbithImg from "../assets/images/masbithImg.jpg";
import disability1 from "../assets/images/disability1.jpg";
import disability2 from "../assets/images/disability2.jpg";
import disability4 from "../assets/images/disability4.jpg";
import disability5 from "../assets/images/disability5.jpg";
import disability6 from "../assets/images/disability6.jpg";
import disability7 from "../assets/images/disability7.jpg";
import disability8 from "../assets/images/disability8.jpg";
import map from "../assets/images/map.jpg";
import faceBookIcon from "../assets/images/faceBookIcon.svg";
import twitterIcon from "../assets/images/twitterIcon.svg";
import instagramIcon from "../assets/images/instagramIcon.svg";
import youtubeIcon from "../assets/images/youtubeIcon.svg";
import Location from "../assets/images/location.svg";

const MasbithCare = () => {
  return (
    <div className="">
      <Navbar />
      <section className="flex p-20 gap-10 ">
        <div className="h-full w-3/4">
          <div>          <p className="text-[#380445] text-3xl  mt-10 mb-5">Masbith Care</p>
</div>
          <img src={masbithImg} className="rounded-2xl" alt="" />

        </div>
        <article className="w-1/2 h-1/2 p-10 bg-[#380445] rounded-2xl mt-24 ">
          <img src={map} className=" " alt="" />
          
          <div className=" rounded-md bg-[#FFFFFF] mt-5 p-3 flex gap-">
            <img src={Location} alt="" />
              <p className=" items-center  text-[#380445]   text-md">
                356 Nnamdi Azikiwe Close, Wuse, Abuja, Nigeria{" "}
              </p>
          </div>
          <button className=" text-[#F7A741]  p-2 hover:text-[#41788E]">
            Get Directions
          </button>
          <br />
          <div className="flex justify-between p-2 ">
            <div className=" text-[#Ffffff] font-thin   ">
              <button className="hover:text-[#F7A741] ">Contact Us</button>
              <br />
              <button className="hover:text-[#F7A741] ">Visit Website</button>
            </div>
            <div className="flex items-center gap-5 mt-3">
              <img src={faceBookIcon} className="hover:outline-[#41788E]" alt="" />
              <img src={twitterIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={youtubeIcon} alt="" />
            </div>
          </div>
        </article>
      </section>

      <section className="flex flex-nowrap p-5 w-full mt-0 ">
        <div className="  overflow-hidden border backdrop-blur-xl  ">
          <div className="p-5">
            <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
              <div className="flex gap-5 flex-col text-justify text-xl">
                <p className="">
                  At Masbith Care, we are committed to providing a safe haven
                  for those facing homelessness or displacement. Our mission
                  goes beyond just offering shelter; we aim to create a
                  supportive environment where individuals can rebuild their
                  lives with dignity and hope. Recognizing the diverse
                  challenges our guests may face, we offer comprehensive
                  Disability Care and Healthcare services to ensure that
                  everyone's unique needs are met. Additionally, we assist with
                  Housing Assistance to help transition our residents to stable,
                  long-term housing solutions. Our dedicated team is passionate
                  about making a difference, working tirelessly to provide not
                  only a roof over their heads but also the necessary resources
                  and support to empower our guests towards a brighter future.
                </p>
                <p>
                  Masbith Care caters exclusively to{" "}
                  <b>people living with disabilities.</b>
                </p>
              </div>
            </div>
            <div className="flex justify-end"></div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-3">
        <p className="text-[#380445]">Book an appointment</p>

        <div>
          {/* Pick a date  */}
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#380445"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#380445] focus:border-[#380445] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#380445] dark:focus:border-[#380445]"
              placeholder="Select date"
            />
          </div>
          {/* Pick a time */}
          <div className="flex items-center gap-3 mt-3">
            <input
              type="time"
              className="max-w-sm px-3 py-2 bg-gray-50  border border-gray-300 rounded-md focus:outline-none focus:ring-[#380445] focus:border-[#380445]"
            />
            <button className="bg-[#F7A741] hover:bg-[#380445] text-white font-thin text-sm py-2 px-4 rounded-full">
              Select Time
            </button>
          </div>
        </div>
      </section>

      {/* 
        <div className="flex  gap-5 p-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
          <img src={disability2} className="w-1/5 h-1/2" alt="" />
          <img src={disability5} className="w-1/5 h-1/2" alt="" />
          <img src={disability1} className="w-1/5 h-1/2" alt="" />
          <img src={disability4} className="w-1/5 h-1/2" alt="" />
          <img src={disability6} className="w-1/5 h-1/2" alt="" />
          <img src={disability7} className="w-1/5 h-1/2" alt="" />
          <img src={disability8} className="w-1/5 h-1/2" alt="" />
        </div>
      */}


      
<section className="p-5">
        <button className=" text-[#F7A741] text-xl  mt-5 mb-5 px-5 hover:text-[#380445]">
          View Gallery and Events
        </button>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    <div>
        <img className="h-auto max-w-full rounded-lg" src={disability2} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={disability5} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={disability1} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={disability8}alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={disability4} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={disability6} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={disability7} alt=""/>
    </div>
</div>
</section> 

    </div>
  );
};

export default MasbithCare;
