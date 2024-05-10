import React from "react";
import foodBank from "../assets/images/foodBankMan.jpg";
import Navbar from "../components/Navbar.jsx";
import infoIcon from "../assets/images/infoIcon.svg";
import PersonIcon from "../assets/images/personIcon.svg";
import PhoneIcon from "../assets/images/phoneIcon.svg";
import LikeIcon from "../assets/images/likeIcon.svg";
import bottomcircle from "../assets/images/bottomcircle.svg";
import foodBankTile1 from "../assets/images/foodBankTile1.jpg";
import foodBankTile2 from "../assets/images/foodBankTile2.jpg";
import foodBankTile3 from "../assets/images/foodBankTile3.jpg";
import foodBankTile4 from "../assets/images/foodBankTile4.jpg";
import Footer from "../components/Footer.jsx";

const FoodBank = () => {
  return (
    <div className="bg-[#FFfFff] ">
      <Navbar />
      <section
        className="flex justify-center items-center mt-32 p-10 bg-[#EB9C41]
]"
      >
        <img src={foodBank} className=" w-2/4 rounded-md" alt="" />

        <div className="m-20 ">
          <p className="text-3xl font-thin text-[#FFFFFF]">
            Find the nearest food bank
          </p>
          <p className="text-3xl font-thin text-[#FFFFFF]">around you!</p>
          <button className=" rounded-full text-[#FFFFFF] p-4 bg-[#41788E] drop-shadow-md w-40 mt-5 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]">
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
            <p className="font-bold rounded-l-xl bg-[#FFCA86] w-20 h-16 text-center flex items-center justify-center">
              Nearby
            </p>
          </div>
          <div>
            <p className="bg-[#F7A741] w-20 h-16 text-center flex items-center justify-center">
              Visited
            </p>
          </div>
          <div>
            <p className="rounded-r-xl bg-[#F7A741] w-20 h-16 text-center flex items-center justify-center">
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
        <button onClick={() => goTo('/')}>
          <div className="flex items-center">
            <img src={foodBankTile1} className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >Farda Drive-Thru Food Bank</p>
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
                  Weekly drive-thru food bank - from donations we gather ...
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
            <img src={foodBankTile2} className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >Open-Hands </p>
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
                  We collect donations and distribute food items...
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
            <img src={foodBankTile3}  className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >The Distro</p>
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
                  God provides, we distribute...
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
            <img src={foodBankTile4}  className="w-1/4 m-5 rounded-md" alt="" />
            <div className="p-5">
              <div className="flex ">
                <p className="text-[#F7A741] text-2xl font-bold ml-10" >Charity Gate</p>
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
                  Food bank opens 8am every Tuesdays, Wed...
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
      </article>
      <br />

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default FoodBank;
