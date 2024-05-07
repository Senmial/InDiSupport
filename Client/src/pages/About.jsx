import React from "react";
import bgImg from "../assets/images/bgHelpingHand.jpg";
import missionImg from "../assets/images/MissionImg.svg";
import visionImg from "../assets/images/VisionImg.png";
import valuesImg from "../assets/images/ValuesImg.svg";
import luckycharmTwo from "../assets/images/luckycharmTwo.svg";
import Footer from "../components/Footer.jsx";


const About = () => {
  return (
    <div
      className=" bg-cover min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col justify-center self-center gap-3 p-3  w-5/6 h-3/4 mb-5 ">
        
        <div className="relative flex flex-col p-10  rounded-t-lg w-ful">

          <p className="text-[#FFFFFF] font-med text-3xl text-center  ">
            About Us 
          </p>

          
          <p className="text-[#FFFFFF] bg-[#380445] rounded-b-lg w-full font-thin mt-5 p-5 text-lg text-justify  drop-shadow-2xl">
            InDiSupport, a non-governmental organization (NGO), is dedicated to
            addressing the urgent needs of internally displaced Nigerians. With
            a mission centered on compassion and empowerment, InDiSupport
            focuses on providing essential support in various critical areas.
            From ensuring access to safe housing and nutritious food to
            providing clothing and educational opportunities, the organization
            strives to uplift displaced individuals and families. Additionally,
            InDiSupport recognizes the significance of resources like books in
            fostering learning and personal development, actively working to
            make these resources available to those in need. Through its
            unwavering commitment, InDiSupport aims to make a meaningful
            difference in the lives of internally displaced Nigerians, offering
            hope and assistance during times of hardship.
<br />
<br />
            Our Motto: <span className="italic">"Lending a hand today, goes a long way tomorrow."</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          {/* Our Mission Card */}
          <section className="relative bg-white p-2  border shadow-2xl ">

            <div className="flex justify-center items-center pt-10  ">
              <img src={missionImg} className="w-3/5 " alt="" />
            </div>
            <h1 className="text-[#41788E]  font-lg text-3xl px-5 pt-5 text-center">
              Our Mission
            </h1>
            <p className="text-[#41788E]  font-light text-md px-5 pt-2 text-justify">
              At InDiSupport, our mission is to address the urgent and essential
              needs of internally displaced Nigerians. We are committed to
              providing holistic support, encompassing housing, food, clothing,
              and education, to uplift and empower displaced individuals and
              families during times of hardship.
            </p>
          </section>

          {/* Our Values Card */}
          <section className="relative bg-white  p-2 border shadow-2xl   ">

            <div className="flex justify-center">
              <img src={valuesImg} className="w-2/4" alt="" />
            </div>
            <h1 className="text-[#380445] font-lg text-3xl px-5 pt-5 text-center">
              Our Values
            </h1>
            <div>
              <p className="text-[#380445] font-light text-md px-5 pb-5 pt-2 text-justify">
                We approach our work with empathy and understanding, recognizing
                the inherent dignity and worth of every individual we serve. We
                believe in empowering displaced Nigerians by providing them with
                the tools, resources, and opportunities they need to rebuild
                their lives and regain self-sufficiency. We uphold the highest
                standards of honesty, transparency, and accountability in all
                our actions and interactions, ensuring that our donors and
                beneficiaries trust us implicitly. We value partnerships and
                collaboration, working closely with local communities,
                government agencies, and other organizations to maximize our
                impact and reach those in need more effectively.
              </p>
            </div>
          </section>
        </div>
        <div className="flex justify-center">
          {/* Our Vision Card */}
          <section className="relative w-2/4 bg-white  p-2 border shadow-2xl ">

            <div className="flex justify-center mt-5 ">
              <img src={visionImg} className="w-3/4" alt="" />
            </div>
            <h1 className="text-[#F7A741] font-lg text-3xl px-5 pt-5 text-center">
              Our Vision
            </h1>
            <p className="text-[#F7A741] font-light text-md px-5 pb-5 pt-2 text-justify">
              Our vision is to create a society where every internally displaced
              Nigerian has access to the necessary resources and opportunities
              to rebuild their lives with dignity and hope. We aspire to be a
              beacon of support and compassion, making a lasting impact on the
              lives of those affected by displacement.
              <br />
              <br />
              By embracing these values and working towards our mission and
              vision, InDiSupport is committed to making a meaningful difference
              in the lives of internally displaced Nigerians, offering them
              hope, support, and a pathway to a brighter future.
            </p>
          </section>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
