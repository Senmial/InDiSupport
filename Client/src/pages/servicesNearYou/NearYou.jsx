import React from 'react'
import MapImg from "../../assets/images/map.png";
import Navbar from "../../pages/navbar/Navbar";
import BedIcon from "../../assets/images/bedIcon.svg";
import PersonIcon from "../../assets/images/personIcon.svg";
import PhoneIcon from "../../assets/images/phoneIcon.svg";
import LikeIcon from "../../assets/images/likeIcon.svg";
import ScholarHat from "../../assets/images/scholarHat.svg";


const NearYou = () => {
  return (
    <div className='bg-[#380445] '>
    <Navbar/>
    <div>
<img src={MapImg} className='drop-shadow' alt="" />
    </div>
    <section className='flex justify-around items-center m-5 '>
      <div>
    <p className='font-medium text-[#ffffff]'>Services Near You</p>
    </div>
    <div className='flex font-light text-xs text-[#41788E]'>
      <select name="Sort" id="Sort" className='rounded-full'>Sort By
      <option value="">Sort by</option>
      <option value="">Services</option>
      <option value="">Location</option>
      <option value="">Ascending</option>
      <option value="">Descending</option>
      </select>
    </div>
    </section>
    <section className='flex justify-center'>
      <div className='bg-[#FFFFFF] p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md '>
        <p className='text-[#41788E]'>Masbith Care</p>
          <div className='flex flex-col gap-4 text-[#380445] font-light text-sm mt-4'>
          <div className='flex gap-5'>
        <img src={BedIcon} alt="" />
        <p>Disability Care, Housing Assistance, Shelter, Healthcare... </p>
        </div>
        <div className='flex gap-5 '>
        <img src={PersonIcon} alt="" />
        <p>Disabled Persons</p>
        </div>
        <div className='flex gap-5'>
        <img src={PhoneIcon} alt="" />
        <p>(+234) 75838593</p>
        </div>
        </div>
        <div className='flex justify-end' >
        <img src={LikeIcon} alt="" />
        </div>
      </div>
    </section>
    <br />
    <section className='flex justify-center'>
    <div className='bg-[#FFFFFF] p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md '>
        <p className='text-[#41788E]'>Lewan Training Institute</p>
          <div className='flex flex-col gap-4 text-[#380445] font-light text-sm mt-4'>
          <div className='flex gap-5'>
        <img src={ScholarHat} alt="" />
        <p>Foster Care Assist, Education, Counselling, Healthcare...</p>
        </div>
        <div className='flex gap-5 '>
        <img src={PersonIcon} alt="" />
        <p>Kids (0yrs - 18yrs)</p>
        </div>
        <div className='flex gap-5'>
        <img src={PhoneIcon} alt="" />
        <p>(+234) 75838593</p>
        </div>
        </div>
        <div className='flex justify-end' >
        <img src={LikeIcon} alt="" />
        </div>
      </div>
    </section>
<br />
    <section className='flex justify-center'>
    <div className='bg-[#FFFFFF] p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md '>
        <p className='text-[#41788E]'>Alliant Union Services</p>
          <div className='flex flex-col gap-4 text-[#380445] font-light text-sm mt-4'>
          <div className='flex gap-5'>
          <img src={BedIcon} alt="" />
        <p>Permanent Housing Assist, Transportation, Counselling...</p>
        </div>
        <div className='flex gap-5 '>
        <img src={PersonIcon} alt="" />
        <p>Anyone</p>
        </div>
        <div className='flex gap-5'>
        <img src={PhoneIcon} alt="" />
        <p>(+234) 75838593</p>
        </div>
        </div>
        <div className='flex justify-end' >
        <img src={LikeIcon} alt="" />
        </div>
      </div>
    </section>
    <br />
    
    <section className='flex justify-center'>
    <div className='bg-[#FFFFFF] p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md '>
        <p className='text-[#41788E]'>Arm The Child Foundation</p>
          <div className='flex flex-col gap-4 text-[#380445] font-light text-sm mt-4'>
          <div className='flex gap-5'>
          <img src={BedIcon} alt="" />
        <p>Permanent Housing Assist, Transportation, Counselling...</p>
        </div>
        <div className='flex gap-5 '>
        <img src={PersonIcon} alt="" />
        <p>Anyone</p>
        </div>
        <div className='flex gap-5'>
        <img src={PhoneIcon} alt="" />
        <p>(+234) 75838593</p>
        </div>
        </div>
        <div className='flex justify-end' >
        <img src={LikeIcon} alt="" />
        </div>
      </div>
    </section>
    </div>
  );
};


export default NearYou
