import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import SearchIcon from "../assets/images/searchIcon.svg"

const Navbar = () => {
  return (
    <div className='backdrop-blur-xs p-1 h-24 px-14 py-5'>
      <nav className='flex items-center justify-between px-5]'>
        <div className='flex items-center' >
        <img src={logo} className="w-1/2 " alt="logo" />
        </div>
      
        <div className=' flex gap-5 font-thin text-md text-[#380445] '>
          <img src={SearchIcon} alt="" />
        <Link className="">Accessibility</Link>
     
      <div className=' '>
      <select name="" id="" className='bg-inherit'>
      <option value="">Donate</option>
      <option value="">Volunteer</option>
      <option value="">About Us</option>
      <option value="">Contact Us</option>
      <option value="">Blog</option>
      </select>
  </div>

      <div className=' '>
      <select name="" id="" className='bg-inherit'>
      <option value="">Menu</option>
      <option value="">Settings</option>
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
