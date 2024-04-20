import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import luckycharm from "../assets/images/luckycharm.svg";
import SearchIcon from "../assets/images/searchIcon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#FFFFFF] p-1 h-24 px-14 py-5 w-full fixed top-0">
      <nav className="flex items-center justify-between px-5">
        <div className="flex items-center">
          <img
            src={logo}
            className="w-1/2 "
            alt="logo"
            onClick={() => goTo("/requesterhome")}
          />
        </div>

        <form class="w-1/4">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              class="block w-full p-4 ps-10  text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#41788E] blue-500 focus:border-[#41788E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#41788E] dark:focus:border-[#41788E]"
              placeholder="Search services, locations..."
              required
            />
            <button
              type="submit"
              class="text-white absolute font-light end-2.5 bottom-2.5 bg-[#380445] hover:bg-[#F7A741] focus:ring-4 focus:outline-none focus:ring-[#41788E] rounded-lg text-xs px-3 py-2 dark:bg-[#41788E] dark:hover:[#41788E] dark:focus:ring-[#41788E]"
            >
              Search
            </button>
          </div>
        </form>

        <div className=" flex gap-5 font-thin text-md text-[#380445] ">
          <Link className="">Accessibility</Link>

          <div className=" ">
            <select name="" id="" className="bg-inherit">
              <option value="">Donate</option>
              <option value="">Volunteer</option>
              <option value="">About Us</option>
              <option value="">Contact Us</option>
              <option value="">Blog</option>
            </select>
          </div>

          <div className=" ">
            <select name="" id="" className="bg-inherit">
              <option value="">Menu</option>
              <option value="">Settings</option>
              <option value="">Profile</option>
              <option value="" onClick={() => goTo("/indisupport")}>
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
