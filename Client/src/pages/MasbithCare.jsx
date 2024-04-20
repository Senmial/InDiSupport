import React from "react";

import Navbar from "../components/Navbar.jsx";
import masbithImg from "../assets/images/masbithImg.jpg";
import disability1 from "../assets/images/disability1.jpg";
import disability2 from "../assets/images/disability2.jpg";
import disability4 from "../assets/images/disability4.jpg";
import disability5 from "../assets/images/disability5.jpg";
import disability6 from "../assets/images/disability6.jpg";
import disability7 from "../assets/images/disability7.jpg";
import disability8 from "../assets/images/disability8.jpg";
import map from "../assets/images/map.jpg";
import faceBookIcon from "../assets/images/faceBookIcon.svg";
import twitterIcon from "../assets/images/twitterIcon.svg";
import instagramIcon from "../assets/images/instagramIcon.svg";
import youtubeIcon from "../assets/images/youtubeIcon.svg";
import Location from "../assets/images/location.svg";
import '../styles.css';



const MasbithCare = () => {


  return (
    <div className="">

      <div>
      <Navbar />
      </div>
      <section className="flex p-20 gap-10 ">
        <div className="h-full w-3/4 mt-20">
            
            <p className="text-[#380445] text-4xl  mb-10">Masbith Care</p>
          <img src={masbithImg} className="rounded-2xl" alt="" />
        </div>
        <article className="w-1/2 h-1/2 p-10 bg-[#380445] rounded-2xl mt-24 ">
          <img src={map} className=" " alt="" />

          <div className=" rounded-md bg-[#FFFFFF] mt-5 p-3 flex  justify-start items-center">
            <img src={Location} className="" alt="" />
            <p className=" items-center  text-[#380445] px-1  text-sm">
              356 Nnamdi Azikiwe Close, Wuse, Abuja, Nigeria{" "}
            </p>
          </div>
          <button className=" text-[#F7A741]  p-2 hover:text-[#41788E]">
            Get Directions
          </button>
          <br />
          <div className="flex justify-between p-2 ">
            <div className=" text-[#Ffffff] font-thin   ">
              <button className="hover:text-[#F7A741] ">Contact Us</button>
              <br />
              <button className="hover:text-[#F7A741] ">Visit Website</button>
            </div>
            <div className="flex items-center gap-5 mt-3">
              <img
                src={faceBookIcon}
                className="hover:outline-[#41788E]"
                alt=""
              />
              <img src={twitterIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={youtubeIcon} alt="" />
            </div>
          </div>
        </article>
      </section>

      <section className="flex flex-nowrap p-5 w-full mt-0 ">
        <div className="  overflow-hidden border backdrop-blur-xl  ">
          <div className="p-5">
            <div className="flex flex-col gap-4 text-[#380445] font-light text-sm mt-4">
              <div className="flex gap-5 flex-col text-justify text-xl">
                <p className="">
                  At Masbith Care, we are committed to providing a safe haven
                  for those facing homelessness or displacement. Our mission
                  goes beyond just offering shelter; we aim to create a
                  supportive environment where individuals can rebuild their
                  lives with dignity and hope. Recognizing the diverse
                  challenges our guests may face, we offer comprehensive
                  Disability Care and Healthcare services to ensure that
                  everyone's unique needs are met. Additionally, we assist with
                  Housing Assistance to help transition our residents to stable,
                  long-term housing solutions. Our dedicated team is passionate
                  about making a difference, working tirelessly to provide not
                  only a roof over their heads but also the necessary resources
                  and support to empower our guests towards a brighter future.
                </p>
                <p>
                  Masbith Care caters exclusively to{" "}
                  <b>people living with disabilities.</b>
                </p>
              </div>
            </div>
            <div className="flex justify-end"></div>
          </div>
        </div>
      </section>

        <section>
          

{/* <!-- Modal toggle --> */}
<button data-modal-target="select-modal" data-modal-toggle="select-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

{/* <!-- Main modal --> */}
<div id="select-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Open positions
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5">
                <p class="text-gray-500 dark:text-gray-400 mb-4">Select your desired position:</p>
                <ul class="space-y-4 mb-4">
                    <li>
                        <input type="radio" id="job-1" name="job" value="job-1" class="hidden peer" required />
                        <label for="job-1" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">                           
                            <div class="block">
                                <div class="w-full text-lg font-semibold">UI/UX Engineer</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">Flowbite</div>
                            </div>
                            <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="job-2" name="job" value="job-2" class="hidden peer"/>
                        <label for="job-2" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">React Developer</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">Alphabet</div>
                            </div>
                            <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="job-3" name="job" value="job-3" class="hidden peer"/>
                        <label for="job-3" class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Full Stack Engineer</div>
                                <div class="w-full text-gray-500 dark:text-gray-400">Apple</div>
                            </div>
                            <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                </ul>
                <button class="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Next step
                </button>
            </div>
        </div>
    </div>
</div> 

        </section>







        {/* Cards for services availabel */}
      {/* <section >
        <h3 className=" text-[#F7A741] text-xl  mt-5 mb-5 px-5">Services Available</h3>
        <article className="flex p-5 m-5 gap-5">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sharing Spaces
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Book and reserve shared spaces. Our shared spaces are little studio flats that you share with two or three people. The flats come with ensuite bathrooms and kitchenettes. Suitable for families and friends.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium  rounded-md text-center text-white bg-[#380445] hover:bg-[#F7A741] focus:ring-2 focus:ring-[#41788E]"
            >
              Book Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Beds
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Book and reserve bed spaces. Here we have available beds in a shared common room where you will be staying with 10+ people. Bathrooms and kitchens are shared spaces.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium  rounded-md text-center text-white bg-[#380445] hover:bg-[#F7A741] focus:ring-2 focus:ring-[#41788E]"
            >
              Book Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Book an Appointment with a medical specialist
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Book an appointment with a medical specialist. Fill out the form to be referred to get the appropriate assistance you need.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium  rounded-md text-center text-white bg-[#380445] hover:bg-[#F7A741] focus:ring-2 focus:ring-[#41788E]"
            >
              Book Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Find other resources
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Find resources like books, clothings, souvenirs here.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium  rounded-md text-center text-white bg-[#380445] hover:bg-[#F7A741] focus:ring-2 focus:ring-[#41788E]"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        </article>
      </section> */}

      <section className="flex flex-col justify-center items-center gap-3">
        <p className="text-[#380445]">Book an appointment</p>

        <div>
          {/* Pick a date  */}
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#380445"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#380445] focus:border-[#380445] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#380445] dark:focus:border-[#380445]"
              placeholder="Select date"
            />
          </div>
          {/* Pick a time */}
          <div className="flex items-center gap-3 mt-3">
            <input
              type="time"
              className="max-w-sm px-3 py-2 bg-gray-50  border border-gray-300 rounded-md focus:outline-none focus:ring-[#380445] focus:border-[#380445]"
            />
            <button className="bg-[#F7A741] hover:bg-[#380445] text-white font-thin text-sm py-2 px-4 rounded-full">
              Select Time
            </button>
          </div>
        </div>
      </section>

      <section className="p-5">
        <button className=" text-[#F7A741] text-xl  mt-5 mb-5 px-5 hover:text-[#380445]">
          View Gallery and Events
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={disability2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={disability5}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={disability1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={disability8}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={disability4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={disability6}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={disability7}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasbithCare;
