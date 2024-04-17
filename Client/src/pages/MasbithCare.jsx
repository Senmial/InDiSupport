import React from "react";
import Navbar from "../components/Navbar.jsx";
import PersonIcon from "../assets/images/personIcon.svg";
import PhoneIcon from "../assets/images/phoneIcon.svg";
import LikeIcon from "../assets/images/likeIcon.svg";
import bottomcircle from "../assets/images/bottomcircle.svg";
import masbithImg from "../assets/images/masbithImg.jpg";
import infoIcon from "../assets/images/infoIcon.svg";

const MasbithCare = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-nowrap p-10 gap-20 w-full ">
        <div className=" rounded-2xl  overflow-hidden border backdrop-blur-xl  ">
          <img src={masbithImg} className="" alt="" />
          <div className="p-5">
            <p className="text-[#F7A741] text-2xl">Masbith Care</p>
            <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
              <div className="flex gap-5 flex-col text-justify text-xl">
                <p className="">
                  At Masbith Care, we are committed to providing a safe haven for
                  those facing homelessness or displacement. Our mission goes
                  beyond just offering shelter; we aim to create a supportive
                  environment where individuals can rebuild their lives with
                  dignity and hope. Recognizing the diverse challenges our
                  guests may face, we offer comprehensive Disability Care and
                  Healthcare services to ensure that everyone's unique needs are
                  met. Additionally, we assist with Housing Assistance to help
                  transition our residents to stable, long-term housing
                  solutions. Our dedicated team is passionate about making a
                  difference, working tirelessly to provide not only a roof over
                  their heads but also the necessary resources and support to
                  empower our guests towards a brighter future.
                </p>
                <p>Masbith Care caters exclusively to <b>Disabled Persons</b></p>
                <p className="mb-10">(+234) 75838593</p>
            </div>
            </div>
            <div className="flex justify-end">
              <img
                src={bottomcircle}
                className=" absolute bottom-0.5 left-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasbithCare;
