import React from 'react';

const Hamburger = () => {
  return (
    <label className="cursor-pointer">
      <input type="checkbox" className="hidden" />
      <svg className="h-12 w-12 transition-transform duration-600 ease-in-out transform rotate-0" viewBox="0 0 64 44">
        <path className="stroke-current stroke-2 transition-all duration-600 ease-in-out" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
        <path className="stroke-current stroke-2 transition-all duration-600 ease-in-out" d="M7 16 27 16"></path>
      </svg>
    </label>
  );
};

export default Hamburger;
