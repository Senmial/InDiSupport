import React from 'react'
import volunteer4 from "../../assets/images/volunteer4.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-[#D5CBD8] p-1'>
      <nav className='flex items-center justify-between px-5 ]'>
        <div className='flex items-center' >
        <img src={volunteer4} className="w-1/2" alt="logo" />
        </div>
      
        <div className=' flex gap-3'>
        <Link className=" text-[#380445] text-xs">Accessibility</Link>
        <Link className=" text-[#380445] text-xs">About Us</Link>
        <Link className=" text-[#380445] text-xs">Account</Link>
      </div>
      </nav>
    </div>
  );
};

export default Navbar
