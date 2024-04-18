import React from "react";
import Navbar from "../components/Navbar.jsx";
import masbithImg from "../assets/images/masbithImg.jpg";
import disability1 from "../assets/images/disability1.jpg";
import disability2 from "../assets/images/disability2.jpg";
import disability4 from "../assets/images/disability4.jpg";
import disability5 from "../assets/images/disability5.jpg";
import map from "../assets/images/map.jpg";
import luckycharmTwo from "../assets/images/luckycharmTwo.svg";


const MasbithCare = () => {
  return (
    <div className="">
      <Navbar />
      <section className="flex p-20 gap-10 ">
        <div className="h-full w-3/4">
          <img src={masbithImg} className="rounded-2xl " alt="" />
        </div>
        <article className="w-1/2 h-1/2 p-10 bg-[#380445] rounded-2xl ">
          <img src={map} className=" " alt="" />
            <button className=" text-[#F7A741]  px-2 hover:text-[#380445] focus:ring-2 focus:ring-[#380445]">
              Get Directions
            </button>
          <div className=" rounded-md bg-[#FFFFFF] mt-5 p-3">
          <img
                src={luckycharmTwo}
                className="absolute top-0 right-0"
                alt=""
              />
          <p className="text-[#380445] text-2xl ">Masbith Care</p>

            <p className=" items-center  text-[#380445]  font-thin text-lg">
              356 Nnamdi Azikiwe Close, Wuse, Abuja, Nigeria{" "}
            </p>
          </div>
          <br />
          <div>
          <div className="px-2 text-[#Ffffff] font-thin   ">
            <button className="hover:text-[#F7A741] ">
              Contact Us
            </button>
            <br />
            <button className="hover:text-[#F7A741] ">
              Visit Website
            </button>
            </div>
            {/* <div>
            </div> */}
            </div>
        </article>
      </section>
      <section className="flex flex-nowrap p-10 gap-20 w-full ">
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
                  Masbith Care caters exclusively to <b>people living with disabilities.</b>
                </p>
              </div>
            </div>
            <div className="flex justify-end"></div>
          </div>
        </div>
      </section>
      <section>
        {/* <div>
        <img src={disability1} className="w-1/5" alt="" />
         <img src={disability2} className="w-1/5" alt="" />
         <img src={disability4} className="w-1/5"  alt="" />
         <img src={disability5} className="w-1/5" alt="" />
        </div> */}
      </section>
    </div>
  );
};

export default MasbithCare;
