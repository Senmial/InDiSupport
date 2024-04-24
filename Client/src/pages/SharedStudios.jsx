import { useEffect } from "react";
import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


const SharedStudios = () => {
  const [isReserveNowOpen, setIsReserveNowOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Add this state

  
  const [quantity, setQuantity] = useState(1);

  let toggleReserveNow = (isOpen = true) => {
    setIsReserveNowOpen(isOpen);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here
    // For demonstration purposes, let's just set the form as submitted
    setIsFormSubmitted(true);
  };

  // Calculate progress bar width
  const progressBarWidth = (quantity / 20) * 100; // This should be 5% if quantity is 1

  useEffect(() => {
    console.log("Progress Bar Width:", progressBarWidth);
  }, [quantity]);

  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      {/* Shared Spaces Available */}
      <section className="flex justify-center items-center">
        <div className="p-4 w-full max-w-2xl max-h-full ">
          {/* <!-- Modal content --> */}
          <div className=" bg-white rounded-lg shadow-xl dark:bg-gray-700 ">
            <div className="p-4 md:p-5">
              <img
                src="https://img.freepik.com/free-photo/young-cheerful-family-quarantine-insulation-spending-time-together-home_155003-13022.jpg?t=st=1713780633~exp=1713784233~hmac=cd68d4ebdd7308cf344a9305d157afeac0b3b0e91b3df9e7da5de613bb934a22&w=1380"
                className="rounded-lg mb-2"
                alt=""
              />
              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Shared Studios
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Book and reserve shared spaces. Our shared spaces are little
                studio flats that you share with two or three people. The flats
                come with ensuite bathrooms and kitchenettes. Suitable for
                families and friends.
              </p>
              <div className="flex justify-between mb-1 text-gray-500 dark:text-gray-400">
                <span className="text-base font-normal">
                  {" "}
                  Available Spaces Left
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  18 of 20 spaces occupied
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "${progressBarWidth}%" }}
                ></div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center mt-4">
                <button
                  type="button"
                  className="text-gray-500 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="block ml-2 w-16 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                  value={quantity}
                  readOnly
                />
                <button
                  type="button"
                  className="text-gray-500 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-full w-8 h-8 flex items-center justify-center ml-2"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>

              {/* <!-- Modal footer --> */}
              <div className="flex items-center mt-6 space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => toggleReserveNow(true)}
                  data-modal-hide="progress-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Reserve Now
                </button>
                <button
                  data-modal-hide="progress-modal"
                  type="button"
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Now Form */}
      {isReserveNowOpen && !isFormSubmitted ? (
        <section>
          <div
            id="popup-modal"
            tabIndex="-1"
            className=" overflow-y-auto overflow-x-hidden fixed bg-gray-800 bg-opacity-95 flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-4 md:p-5 text-center">
                  <form onSubmit={handleSubmit} action="">
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Fill out guest information
                    </h3>
                    <div className="relative z-0 w-full mb-5 group text-left">
                      <input
                        type="name"
                        name="floating_guestID"
                        id="floating_guestID"
                        className="flex justify-center items-center py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_guestID"
                        className="peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Unique ID
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group text-left">
                      <input
                        type="name"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="flex justify-center items-center py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group text-left">
                      <input
                        type="name"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="flex justify-center items-center py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last Name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group text-left">
                      <input
                        type="name"
                        name="floating_gender"
                        id="floating_gender"
                        className="flex justify-center items-center py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_gender"
                        className="peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Gender
                      </label>
                      <div className="flex justify-center items-center m-5 gap-10">
                        <button
                          type="submit"
                          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Submit
                        </button>
                        <button onClick={() => toggleReserveNow(false)}
                          type="submit"
                          className=" text-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ):(
        isFormSubmitted && ( // Render the Submit Complete modal only when form is submitted

        <section>
          <div
            id="popup-modal"
            tabIndex="-1"
            className=" overflow-y-auto overflow-x-hidden fixed bg-gray-800 bg-opacity-95 flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-4 md:p-5 text-center">
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Reservation Submission Complete
                  </h3>
                  <p className="mb-5">We await the arrival of our guest(s)</p>
                  <button
                    type="button"
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      toggleReserveNow(false);
                      setIsFormSubmitted(false); // Reset form submission state
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      )}
    <div>
        <Footer/>
      </div>
    </div>
  );
};

export default SharedStudios;
