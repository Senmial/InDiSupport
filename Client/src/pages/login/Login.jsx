import React from "react";
import "./login.css";
import login1 from "../../assets/images/login1.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen bg-[#380445] items-center">
      <div className=" border w-2/5 flex flex-col bg-white items-center">
        <img src={login1} className="w-2/5" alt="" />
        <p className="font-medium text-[#380445] text-[1.5rem] ">
          Welcome to InDiSupport
        </p>

        <div className="w-3/5 flex justify-between pt-6 uppercase">
          <Link className="underline text-[#41788E] ">Login</Link>
          <Link>Sign Up</Link>
        </div>
        <div className="w-3/5">
          <div className=" border-2 rounded-full py-3 px-4 items-center overflow-hidden flex gap-3">
            <svg
              className="w-6"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.91669 13.6666C1.58335 13.6666 1.29169 13.5416 1.04169 13.2916C0.791687 13.0416 0.666687 12.75 0.666687 12.4166V1.58331C0.666687 1.24998 0.791687 0.958313 1.04169 0.708313C1.29169 0.458313 1.58335 0.333313 1.91669 0.333313H16.0834C16.4167 0.333313 16.7084 0.458313 16.9584 0.708313C17.2084 0.958313 17.3334 1.24998 17.3334 1.58331V12.4166C17.3334 12.75 17.2084 13.0416 16.9584 13.2916C16.7084 13.5416 16.4167 13.6666 16.0834 13.6666H1.91669ZM9.00002 7.37498L1.91669 2.72915V12.4166H16.0834V2.72915L9.00002 7.37498ZM9.00002 6.12498L16 1.58331H2.02085L9.00002 6.12498ZM1.91669 2.72915V1.58331V12.4166V2.72915Z"
                fill="#B5B5B5"
              />
            </svg>
            <input type="text" placeholder="EMAIL" className=" outline-none w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
