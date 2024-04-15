import React from 'react'
import MapImg from "../assets/images/map.jpg";
import Navbar from "../components/Navbar.jsx";
import BedIcon from "../assets/images/bedIcon.svg";
import PersonIcon from "../assets/images/personIcon.svg";
import PhoneIcon from "../assets/images/phoneIcon.svg";
import LikeIcon from "../assets/images/likeIcon.svg";
import ScholarHat from "../assets/images/scholarHat.svg";
import luckycharm from "../assets/images/luckycharm.svg";
import bottomcircle from "../assets/images/bottomcircle.svg";
import bgImg from "../assets/images/bgHelpingHand.jpg";




const NearYou = () => {
  return (
    <div className='bg-[#FFfFff] '>
    <Navbar/>
    <section className='flex justify-center items-center mt-20 p-5 bg-[#744F7D]
]'>
    
<img src={MapImg} className=' w-2/4 rounded-md'  alt="" />
  
    <div className='m-20 '>
      <p className='text-3xl font-thin text-[#FFFFFF]'>Find the nearest facilities and services</p>
      <p className='text-3xl font-thin text-[#FFFFFF]'>around you!</p>
      <button className='border rounded-full text-[#FFFFFF] p-4 bg-[#41788E] drop-shadow-md w-40 mt-5 hover:bg-[#F7A741] focus:ring-2 focus:ring-[#380445]'>Search now</button>
    </div>
    </section>
<section className='text-3xl font-thin text-[#380445] p-12 text-center'>
  <p>Browse through some of the facilities </p>
  <p>and services available...</p>
</section>
    <article className="flex flex-col  bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${bgImg})`}}> 

    <section className='flex justify-around items-center  m-5 mt-10'>
      <div>
    <p className='text-xl text-[#FFFFFF]'>Services Near You</p>
    </div>
    <div className='flex font-light text-sm text-[#41788E]'>
      <select name="Sort" id="Sort" className='rounded-full bg-inherit'>Sort By
      <option value="">Sort by</option>
      <option value="">Services</option>
      <option value="">Location</option>
      <option value="">Ascending</option>
      <option value="">Descending</option>
      </select>
    </div>
    </section>
    <section className='flex justify-center'>
      <div className=' p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md overflow-hidden border backdrop-blur-xl'>
      <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
        <p className='text-[#F7A741]'>Masbith Care</p>
          <div className='flex flex-col gap-4 text-[#FFFFFF] font-light text-sm mt-4'>
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
        <img src={LikeIcon} className='hover:bg-[#F7A741]' alt="" />
        <img src={bottomcircle} className=" absolute bottom left-0 rounded-bl-lg" alt="" />
        </div>
      </div>
    </section>
    <br />
    <section className='flex justify-center'>
    <div className='p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md overflow-hidden border-2 '>
    <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
        <p className='text-[#F7A741]'>Lewan Training Institute</p>
          <div className='flex flex-col gap-4 text-[#FFFFFF] font-light text-sm mt-4'>
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
        <img src={bottomcircle} className=" absolute bottom left-0 rounded-bl-lg" alt="" />
        </div>
      </div>
    </section>
<br />
    <section className='flex justify-center'>
    <div className='p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md  overflow-hidden border backdrop-blur-xl'>
    <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
        <p className='text-[#F7A741]'>Alliant Union Services</p>
          <div className='flex flex-col gap-4 text-[#FFFFFF] font-light text-sm mt-4'>
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
        <img src={bottomcircle} className=" absolute bottom left-0 rounded-bl-lg" alt="" />
        </div>
      </div>
    </section>
    <br />
    
    <section className='flex justify-center'>
    <div className=' p-5 rounded-2xl mx-10 w-3/4 drop-shadow-md overflow-hidden border backdrop-blur-xl'>
    <img src={luckycharm} className=" absolute top-0 right-0" alt="" />
        <p className='text-[#F7A741]'>Arm The Child Foundation</p>
          <div className='flex flex-col gap-4 text-[#FFFFFF] font-light text-sm mt-4'>
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
        <img src={bottomcircle} className=" absolute bottom left-0 rounded-bl-lg" alt="" />
        </div>
      </div>
    </section>
    </article>
    </div>
  );
};


export default NearYou
