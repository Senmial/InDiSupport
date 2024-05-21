import React from "react";
import login1 from "../assets/images/login1.svg";
import bgImg from "../assets/images/bgHelpingHand.jpg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="w-full lg:w-1/2">
        <img src={bgImg} className="w-full h-auto lg:h-screen object-cover" alt="" />
      </div>
      <div className=" w-full lg:w-1/2  flex justify-center items-center">
        <div className="max-h-screen overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <img src={login1} className="w-2/5 pt-2" alt="" />
            <p className="font-small text-[#380445] text-[1rem]  ">
              Welcome to InDiSupport
            </p>

            <div className="w-3/5 flex justify-center p-4 font-medium">
              <p className="font-medium  text-[#41788E] uppercase  ">Sign Up</p>
            </div>

            {/* Forms */}
            <form action="signup" className="w-3/4 bg-inherit">
              {/* First Name */}
              <div className=" border  border-[#41788E]  rounded-md py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex gap-2 overflow-hidden">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className=" border  border-[#41788E]  rounded-md mt-2 py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex  gap-2 overflow-hidden">
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                </div>
              </div>
              {/* Email */}
              <div className=" border  border-[#41788E]  rounded-md mt-2 py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex  gap-2 overflow-hidden">
                  <input
                    type="text"
                    required
                    placeholder="Email"
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className=" border  border-[#41788E]  rounded-md mt-2 py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex  gap-2 overflow-hidden">
                  <input
                    type="text"
                    required
                    placeholder="Phone Number"
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                </div>
              </div>

              {/* Password */}
              <div className=" border  border-[#41788E]  rounded-md mt-2 py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex  gap-2 overflow-hidden">
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                </div>
              </div>

              {/*Confirm Password */}
              <div className=" border  border-[#41788E]  rounded-md mt-2 py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex  gap-2 overflow-hidden">
                  <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                </div>
              </div>
            </form>

            <div className="flex gap-2 pt-5 justify-center">
              <input type="checkbox" name="checkbox" id="" />
              <p className="text-[0.7rem] text-[#380445]  font-light">
                By signing up, you agree to our{" "}
                <span className="underline text-[#F7A741]">
                  Terms & Conditions
                </span>
              </p>
            </div>

            <div className="text-sm font-thin text-[#380445] mt-5 ">
              Have an account?{" "}
              <a
                href="#"
                className="text-sm t text-[#F7A741] hover:text-[#41788E] dark:text-blue-500"
                onClick={() => goTo("/login")}
              >
                Login
              </a>
            </div>

            <button
              className="rounded-full bg-[#F7A741] w-4/12 flex justify-center my-8 text-[1rem] text-[#FFFFFF] py-3 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]"
              onClick={() => goTo("/requesterhome")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
