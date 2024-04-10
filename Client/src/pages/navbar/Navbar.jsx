import React from 'react'
import volunteer4 from "../../assets/images/volunteer4.svg";
import Search from "../../assets/images/searchIcon.svg";
import Profile from "../../assets/images/profileIcon.svg";
import Hamburger from "../../assets/images/hamburger.svg";

const Navbar = () => {
  return (
    <div className='bg-[#380445] p-1'>
      <nav className='flex items-center justify-between px-5 ]'>
        <div className='flex items-center' >
        <img src={volunteer4} className="w-1/2" alt="logo" />
        </div>
               

        <div className='flex items-center gap-5'>
        <img src= {Hamburger} alt="" />
      <img src={Search} alt="" />
      <img src={Profile} alt="" />
      </div>
      </nav>
    </div>
  );
};

export default Navbar
