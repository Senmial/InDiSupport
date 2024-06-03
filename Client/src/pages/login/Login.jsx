import React, { useState } from "react";
import login1 from "../../assets/images/login1.svg";
import bgImg from "../../assets/images/bgHelpingHand.jpg";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



 const validateForm = (e) => {
  e.preventDefault();
  if (email.length === 0) {
    alert ("Please enter a valid email");
    return; 
  }
  if (password.length < 8) {
   alert("Password length should be more than 8 characters");
   return ;
 }

      // If validation passes, navigate to 'requesterhome'
  navigate("/requesterhome");

 };

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className=" w-full md:w-1/2">
        <img
          src={bgImg}
          className="w-full h-auto lg:h-screen object-cover"
          alt="Background"
        />
      </div>
      <div className=" w-full lg:w-1/2  flex justify-center items-center">
        <div className="max-h-screen overflow-hidden w-full">
          <div className="flex flex-col justify-center items-center">
            <img src={login1} className="w-2/5 pt-4  " alt="" />
            <p className="font-small text-[#380445] text-[1rem] pt-3 ">
              Welcome to InDiSupport
            </p>

            <div className=" flex justify-center pt-12 uppercase font-medium">
              <p className="font-medium  text-[#41788E] text-center">Login</p>
            </div>

            {/* Email Input */}
            <form onSubmit= {validateForm} name="loginForm" action="login" className="w-3/5 py-3 bg-inherit ">
              <div className=" border  border-[#41788E]  rounded-md py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex  gap-2 overflow-hidden">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                </div>
              </div>
              {/* Password Input */}
              <div className=" border  border-[#41788E]  rounded-md mt-3 py-3 px-4 items-center  overflow-hidden flex gap-3">
                <div className="flex  gap-2 overflow-hidden">
                  <input
                    type="password"
                    value={password}
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="outline-none w-screen   font-thin text-[0.9rem] text-[#380445] bg-inherit ps-1"
                  />
                  {/* <button onClick={()=>togglePasswordVisibility(true)}></button> */}
                </div>
              </div>
            </form>

            <div className="flex  p-2 gap-36  ">
              <div className="flex  ">
                <div className="flex justify-center items-center   h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-xs font-sm text-[#380445] dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ms-auto text-xs text-[#F7A741] hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>

            <div className="text-sm font-thin text-[#380445] mt-10 ">
              Not registered?{" "}
              <a
                href="#"
                className="text-sm t text-[#F7A741] hover:text-[#41788E] dark:text-blue-500"
                onClick={() => navigate("/signup")}
              >
                Create account
              </a>
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#F7A741] w-4/12 flex justify-center mt-10 mb-5 text-[1rem] text-[#FFFFFF] py-3 hover:bg-[#380445] focus:ring-2 focus:ring-[#380445]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
