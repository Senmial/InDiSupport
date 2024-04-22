import React, { useState } from "react";

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
import "../styles.css";

const MasbithCare = () => {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isCapacityModalOpen, setIsCapacityModalOpen] = useState(false);

  const toggleServicesModal = (isOpen = true) => {
    setIsServicesModalOpen(isOpen);
  };

  const toggleCapacityModal = (isOpen = true) => {
    setIsCapacityModalOpen(isOpen);
  };

  return (
    <div className="">
      <div>
        <Navbar />
      </div>

      {/* Service Provider Info */}
      <section className="flex p-20 gap-10 ">
        <div className="h-full w-3/4 mt-20">
          <p className="text-[#380445] text-4xl  mb-5">Masbith Care</p>
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

      {/* Service Provider Details */}
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

      {/* Services Available Modal */}
      <section>
        <div className="flex justify-center m-10">
          <button
            onClick={() => toggleServicesModal(true)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium  rounded-md text-center text-white bg-[#380445] hover:bg-[#F7A741] focus:ring-2 focus:ring-[#41788E]"
            type="button"
          >
            Select a Service
          </button>
        </div>

        {isServicesModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div class="relative p-4 w-full max-w-md max-h-full">
              {/* <!-- Modal content --> */}
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-[#380445] dark:text-white">
                    Services Available
                  </h3>
                  <button
                    onClick={() => toggleServicesModal(false)}
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="select-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div class="p-4 md:p-5">
                  <p class="text-gray-500 dark:text-gray-400 mb-4">
                    Select Services Available:
                  </p>
                  <ul class="space-y-4 mb-4">
                    <li>
                      <input
                        type="radio"
                        id="service-1"
                        name="service"
                        value="service-1"
                        class="hidden peer"
                      />
                      <label
                        for="service-1"
                        class="inline-flex items-center justify-between w-full p-5 text-[#380445] bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-[#41788E] peer-checked:border-[#41788E] peer-checked:text-[#41788E] hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">
                            Shareable Studios
                          </div>
                          <div class="w-full text-gray-500 dark:text-gray-400"></div>
                        </div>
                        <svg
                          class="w-4 h-4 ms-3 rtl:rotate-180 text-[#41788E] dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="service-2"
                        name="service"
                        value="service-2"
                        class="hidden peer"
                      />
                      <label
                        for="service-2"
                        class="inline-flex items-center justify-between w-full p-5 text-[#380445] bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-[#41788E] peer-checked:border-[#41788E] peer-checked:text-[#41788E] hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">
                            Bed Space
                          </div>
                          <div class="w-full text-gray-500 dark:text-gray-400"></div>
                        </div>
                        <svg
                          class="w-4 h-4 ms-3 rtl:rotate-180 text-[#41788E] dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="service-3"
                        name="service"
                        value="service-3"
                        class="hidden peer"
                      />
                      <label
                        for="service-3"
                        class="inline-flex items-center justify-between w-full p-5 text-[#380445] bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-[#41788E] peer-checked:border-[#41788E] peer-checked:text-[#41788E] hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">
                            Medical Services
                          </div>
                          <div class="w-full text-gray-500 dark:text-gray-400"></div>
                        </div>
                        <svg
                          class="w-4 h-4 ms-3 rtl:rotate-180 text-[#41788E] dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="service-4"
                        name="service"
                        value="service-4"
                        class="hidden peer"
                      />
                      <label
                        for="service-4"
                        class="inline-flex items-center justify-between w-full p-5 text-[#380445] bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-[#41788E] peer-checked:border-[#41788E] peer-checked:text-[#41788E] hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">
                            Other Resources
                          </div>
                          <div class="w-full text-gray-500 dark:text-gray-400"></div>
                        </div>
                        <svg
                          class="w-4 h-4 ms-3 rtl:rotate-180 text-[#41788E] dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Capacity Available */}
      {/* <!-- Modal toggle --> */}
      {/* Modal toggle */}
      <button
        onClick={() => toggleCapacityModal(true)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {/* Main modal */}
      {isCapacityModalOpen && (
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        {/* <!--
          Background backdrop, show/hide based on modal state.
      
          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        --> */}

        
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* <!--
              Modal panel, show/hide based on modal state.
      
              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            --> */}
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      )}

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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
            <button className="text-[#F7A741] hover:bg-[#380445]  font-thin text-sm py-2 px-4 ">
              Select Time
            </button>
          </div>
        </div>
      </section>

      {/* View Gallery and Events */}
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
