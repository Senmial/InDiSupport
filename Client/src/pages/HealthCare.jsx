import React from "react";
import healthcareNurse from "../assets/images/healthcareNurse.jpg";
import Navbar from "../components/Navbar.jsx";
import infoIcon from "../assets/images/infoIcon.svg";
import PersonIcon from "../assets/images/personIcon.svg";
import PhoneIcon from "../assets/images/phoneIcon.svg";
import LikeIcon from "../assets/images/likeIcon.svg";
import bottomcircle from "../assets/images/bottomcircle.svg";
import masbithImg from "../assets/images/masbithImg.jpg";
import healthFrame1 from "../assets/images/healthFrame1.jpg";
import healthFrame2 from "../assets/images/healthFrame2.jpg";
import healthFrame3 from "../assets/images/healthFrame3.jpg";

const ShelterHome = () => {
  return (
    <div className="bg-[#FFfFff] ">
      <Navbar />
      <section
        className="flex justify-center items-center mt-10 p-10 bg-[#41788E]
]"
      >
        <img src={healthcareNurse} className=" w-2/4 rounded-md" alt="" />

        <div className="m-20 ">
          <p className="text-3xl font-thin text-[#FFFFFF]">
            Find the nearest healthcare center
          </p>
          <p className="text-3xl font-thin text-[#FFFFFF]">around you!</p>
          <button className=" rounded-full text-[#FFFFFF] p-4 bg-[#F7A741] drop-shadow-md w-40 mt-5 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]">
            Search now
          </button>
        </div>
      </section>
      <section className="text-3xl font-thin text-[#380445] p-12 text-center">
        <p>Browse through some of the facilities </p>
        <p>and services available...</p>
      </section>

      <section className="flex flex-col justify-center items-center">
        <div className="flex  justify-center items-center gap-0.5  text-[#FFFFFF]  font-thin m-5 mt-10 text-center ">
          <div>
            <p className="font-bold rounded-l-xl bg-[#5A99B2] w-20 h-16 text-center flex items-center justify-center">
              Nearby
            </p>
          </div>
          <div>
            <p className="bg-[#41788E] w-20 h-16 text-center flex items-center justify-center">
              Visited
            </p>
          </div>
          <div>
            <p className="rounded-r-xl bg-[#41788E] w-20 h-16 text-center flex items-center justify-center">
              New
            </p>
          </div>
        </div>
        <div className=" font-light text-sm text-[#41788E]">
          <select name="Sort" id="Sort" className="rounded-full bg-inherit">
            Sort By
            <option value="">Sort by</option>
            <option value="">Services</option>
            <option value="">Location</option>
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </section>
      <br />
      <article className="">
        <section className="flex flex-nowrap p-10 gap-20">
          <div className="  rounded-2xl  w-3/6 overflow-hidden border backdrop-blur-xl">
            <img src={masbithImg} className="" alt="" />
            <div className="p-5">
              <p className="text-[#F7A741]">Masbith Care</p>
              <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
                <div className="flex gap-5">
                  <img src={infoIcon} alt="" />
                  <p>
                    Disability Care, Housing Assistance, Shelter, Healthcare...
                  </p>
                </div>
                <div className="flex gap-5 ">
                  <img src={PersonIcon} alt="" />
                  <p>Disabled Persons</p>
                </div>
                <div className="flex gap-5">
                  <img src={PhoneIcon} alt="" />
                  <p>(+234) 75838593</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={LikeIcon} className="hover:bg-[#F7A741]" alt="" />
                <img
                  src={bottomcircle}
                  className=" absolute bottom left-0 rounded-bl-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl  w-3/6 overflow-hidden border backdrop-blur-xl ">
            <img src={healthFrame1} alt="" />
            <div className="p-5">
              <p className="text-[#F7A741]">Angeles Children Hospital</p>
              <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
                <div className="flex gap-5">
                  <img src={infoIcon} alt="" />
                  <p>
                    Children Care, Pediatrician, Babysitting, Creche...
                  </p>
                </div>
                <div className="flex gap-5 ">
                  <img src={PersonIcon} alt="" />
                  <p>Kids - Teens (0yrs - 18yrs)</p>
                </div>
                <div className="flex gap-5">
                  <img src={PhoneIcon} alt="" />
                  <p>(+234) 75838593</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={LikeIcon} alt="" />
                <img
                  src={bottomcircle}
                  className=" absolute bottom left-0 rounded-bl-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="flex flex-nowrap p-10 gap-20">
          <div className="rounded-2xl  w-3/5 overflow-hidden border backdrop-blur-xl">
            <img src={healthFrame2} alt="" />
            <div className="p-5">
              <p className="text-[#F7A741]">Tomahawk Family Care</p>
              <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
                <div className="flex gap-5">
                  <img src={infoIcon} alt="" />
                  <p>
                    General Practitioner, Family Care, Walk-in Clinic...
                  </p>
                </div>
                <div className="flex gap-5 ">
                  <img src={PersonIcon} alt="" />
                  <p>Anyone</p>
                </div>
                <div className="flex gap-5">
                  <img src={PhoneIcon} alt="" />
                  <p>(+234) 75838593</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={LikeIcon} alt="" />
                <img
                  src={bottomcircle}
                  className=" absolute bottom left-0 rounded-bl-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
          
          <div className=" rounded-2xl  w-3/6 overflow-hidden border backdrop-blur-xl">
            <img src={healthFrame3} alt="" />
            <div className="p-5">
              <p className="text-[#F7A741]">Vidici Women's Hospital</p>
              <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
                <div className="flex gap-5">
                  <img src={infoIcon} alt="" />
                  <p>
                    Maternity Care, Walk-in Clinic, Family Planning, Counselling, Cancer Prevention ...
                  </p>
                </div>
                <div className="flex gap-5 ">
                  <img src={PersonIcon} alt="" />
                  <p>Internally Displaced Women</p>
                </div>
                <div className="flex gap-5">
                  <img src={PhoneIcon} alt="" />
                  <p>(+234) 75838593</p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={LikeIcon} alt="" />
                <img
                  src={bottomcircle}
                  className=" absolute bottom left-0 rounded-bl-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </article>
      <br />
    </div>
  );
};

export default ShelterHome;