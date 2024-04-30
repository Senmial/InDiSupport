import React from "react";
import logo from "../assets/images/logo.svg";
import luckycharm from "../assets/images/luckycharm.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#FFFFFF] p-1 h-24 px-14 py-5 w-full fixed top-0 z-50 border-y ">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center">
          <img
            src={logo}
            className="w-1/2 "
            alt="logo"
            onClick={() => goTo("/requesterhome")}
          />
        </div>

<div className="">
        <form className="w-full flex justify-center items-center gap-3 ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-[#380644] sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-[#380644] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-[100vwh] p-3 ps-10  text-xs text-[#380644] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#41788E] blue-500 focus:border-[#41788E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#41788E] dark:focus:border-[#41788E]"
              placeholder="Search services, locations..."
              required
            />
          </div>
          
        </form>
        </div>
        <div className=" flex justify-center items-center gap-5 font-thin text-md text-[#380445] ">
          

          <button
            class="text-white bg-[#380445] hover:bg-[#F7A741]  font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Donate{" "}
          </button>
          <button
            class=" text-[#F7A741] hover:text-[#380445] font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Volunteer{" "}
          </button>




          <div className=" ">
            <select name="" id="" className="bg-inherit">
              <option value="">Menu</option>
              <option value="">Settings</option>
              <option value="">Profile</option>
              <option value="">Accessibility</option>
              <option value="" onClick={() => goTo("/")}>
                Logout
              </option>
            </select>
          </div>
        </div>
      </nav>
      <img src={luckycharm} className="absolute top-0 right-0" alt="" />
    </div>
  );
};

export default Navbar;
