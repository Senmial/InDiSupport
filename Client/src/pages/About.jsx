import React from 'react'
import bgImg from "../assets/images/bgHelpingHand.jpg";


const About = () => {
  return (
    <div className=" bg-cover bg-center min-h-screen flex justify-center"
    style={{ backgroundImage: `url(${bgImg})` }}>
    <div className='bg-white flex flex-col justify-center gap-3 p-3 text-start w-5/6 h-3/4 bg-opacity-80 mt-5 mb-5'>

<h1 className='text-[#380445] font-lg text-3xl px-3'>Our Mission</h1>
<p className='text-[#380445] font-light text-md px-5'>At InDiSupport, our mission is to address the urgent and essential needs of internally displaced Nigerians. We are committed to providing holistic support, encompassing housing, food, clothing, and education, to uplift and empower displaced individuals and families during times of hardship.
</p>
<h1 className='text-[#F7A741] font-lg text-3xl px-3'>Our Vision</h1> 
<p className='text-[#380445] font-light text-md px-5'>Our vision is to create a society where every internally displaced Nigerian has access to the necessary resources and opportunities to rebuild their lives with dignity and hope. We aspire to be a beacon of support and compassion, making a lasting impact on the lives of those affected by displacement.
</p>
 <h1 className='text-[#41788E] font-lg text-3xl px-3'>Our Values</h1>
 <div>
 <span className='font-lg text-[#380445] px-5'> Compassion:</span> 
<p className='text-[#380445] font-light text-md px-5' > We approach our work with empathy and understanding, recognizing the inherent dignity and worth of every individual we serve.
</p>  
</div>
<div>
<span className='font-lg text-[#380445] px-5'> Empowerment:</span> 
<p className='text-[#380445] font-light text-md px-5' > We believe in empowering displaced Nigerians by providing them with the tools, resources, and opportunities they need to rebuild their lives and regain self-sufficiency.
</p>
</div>
<div>
<span className='font-lg text-[#380445] px-5'> Integrity:</span>
<p className='text-[#380445]text-[#41788E] font-light text-lg px-5'>  We uphold the highest standards of honesty, transparency, and accountability in all our actions and interactions, ensuring that our donors and beneficiaries trust us implicitly.
</p>
</div>
<div>
<span className='font-lg text-[#380445] px-5' > Collaboration:</span>
<p className='text-[#380445] font-light text-lg px-5'>  We value partnerships and collaboration, working closely with local communities, government agencies, and other organizations to maximize our impact and reach those in need more effectively.
</p>
</div>
<p className='text-[#380445]  font-lg text-center text-lg px-10'>By embracing these values and working towards our mission and vision, InDiSupport is committed to making a meaningful difference in the lives of internally displaced Nigerians, offering them hope, support, and a pathway to a brighter future.
</p>    
</div>
    </div>
  )
}

export default About