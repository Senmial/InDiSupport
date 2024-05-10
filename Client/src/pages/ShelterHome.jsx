import React from "react";
import welcomeShelter from "../assets/images/welcomeShelter.jpg";
import Navbar from "../components/Navbar.jsx";
import PersonIcon from "../assets/images/personIcon.svg";
import PhoneIcon from "../assets/images/phoneIcon.svg";
import LikeIcon from "../assets/images/likeIcon.svg";
import bottomcircle from "../assets/images/bottomcircle.svg";
import masbithImg from "../assets/images/masbithImg.jpg";
import lewanImg from "../assets/images/lewanImg.jpg";
import alliantImg from "../assets/images/alliantImg.jpg";
import armTCImg from "../assets/images/armTCImg.jpg";
import infoIcon from "../assets/images/infoIcon.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const ShelterHome = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <div className="bg-[#FFfFff] ">
      <Navbar />
      <section
        className="flex justify-center items-center mt-32 p-10 bg-[#380445]
]"
      >
        <img src={welcomeShelter} className=" w-2/4 rounded-md" alt="" />

        <div className="m-20 ">
          <p className="text-3xl font-thin text-[#FFFFFF]">
            Find the nearest shelter
          </p>
          <p className="text-3xl font-thin text-[#FFFFFF]">around you!</p>
          <button className="rounded-full text-[#FFFFFF] p-4 bg-[#F7A741] drop-shadow-md w-40 mt-5 hover:bg-[#41788E] focus:ring-2 focus:ring-[#380445]">
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
            <p className="font-bold rounded-l-xl bg-[#744F7D] w-20 h-16 text-center flex items-center justify-center">
              Nearby
            </p>
          </div>
          <div>
            <p className="bg-[#380445] w-20 h-16 text-center flex items-center justify-center">
              Visited
            </p>
          </div>
          <div>
            <p className="rounded-r-xl bg-[#380445] w-20 h-16 text-center flex items-center justify-center">
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
      <hr className="m-5" />
      <article className="ml-10">
        <button onClick={() => goTo('/masbithcare')}>
          <div className="flex items-center">
            <img src={masbithImg} className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >Masbith Care</p>
                {/* <img
                  src={LikeIcon}
                  className="hover:bg-[#F7A741] flex  mr-10 "
                  alt=""
                /> */}
              </div>
              <div className="flex flex-col  gap-4 text-[#380445] font-semibold text-lg mt-4">
                <div className="flex gap-5 ">
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
            </div>
          </div>
        </button>
        <hr className="m-5" />
        <button onClick={() => goTo('/')}>
          <div className="flex items-center">
            <img src={lewanImg} className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >Lewan Training Institute</p>
                {/* <img
                  src={LikeIcon}
                  className="hover:bg-[#F7A741] flex  mr-10 "
                  alt=""
                /> */}
              </div>
              <div className="flex flex-col  gap-4 text-[#380445] font-semibold text-lg mt-4">
                <div className="flex gap-5 ">
                  <img src={infoIcon} alt="" />
                  <p>
                  Foster Care Assist, Education, Counselling, Healthcare...
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
            </div>
          </div>
        </button>
        <hr className="m-5" />
        <button onClick={() => goTo('/')}>
          <div className="flex items-center">
            <img src={alliantImg}  className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >Alliant Union Services</p>
                {/* <img
                  src={LikeIcon}
                  className="hover:bg-[#F7A741] flex  mr-10 "
                  alt=""
                /> */}
              </div>
              <div className="flex flex-col  gap-4 text-[#380445] font-semibold text-lg mt-4">
                <div className="flex gap-5 ">
                  <img src={infoIcon} alt="" />
                  <p>
                  Permanent Housing Assist, Transportation, Counselling...
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
            </div>
          </div>
        </button>
        <hr className="m-5" />
        
        <button onClick={() => goTo('/')}>
          <div className="flex items-center">
            <img src={armTCImg}  className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >Arm The Child Foundation</p>
                {/* <img
                  src={LikeIcon}
                  className="hover:bg-[#F7A741] flex  mr-10 "
                  alt=""
                /> */}
              </div>
              <div className="flex flex-col  gap-4 text-[#380445] font-semibold text-lg mt-4">
                <div className="flex gap-5 ">
                  <img src={infoIcon} alt="" />
                  <p>
                  Permanent Housing, Temporary Housing, Education, Counselling...
                  </p>
                </div>
                <div className="flex gap-5 ">
                  <img src={PersonIcon} alt="" />
                  <p>Internally Displaced Women and Children</p>
                </div>
                <div className="flex gap-5">
                  <img src={PhoneIcon} alt="" />
                  <p>(+234) 75838593</p>
                </div>
              </div>
            </div>
          </div>
        </button>
        <hr className="m-5" />
      </article>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ShelterHome;
