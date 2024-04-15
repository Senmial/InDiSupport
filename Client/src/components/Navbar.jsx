import React from 'react'
import { Link } from "react-router-dom";
import volunteer4 from "../assets/images/volunteer4.svg"

const Navbar = () => {
  return (
    <div className='backdrop-blur-xs p-1 h-24 px-14 py-5'>
      <nav className='flex items-center justify-between px-5]'>
        <div className='flex items-center' >
        <img src={volunteer4} className="w-1/2 " alt="logo" />
        </div>
      
        <div className=' flex gap-5'>
        <Link className=" text-[#380445] text-xs">Accessibility</Link>
        <Link className=" text-[#380445] text-xs">About Us</Link>
        <Link className=" text-[#380445] text-xs">Contact Us</Link>
     
      <div className='flex font-light text-xs text-[#41788E]  '>
      <select name="" id="" className='bg-inherit'>
      <option value="">Menu</option>
      <option value="">Account Settings</option>
      <option value="">Profile</option>
      <option value="">Logout</option>
      </select>
    </div>
    </div>
      </nav>
    </div>
  );
};

export default Navbar
