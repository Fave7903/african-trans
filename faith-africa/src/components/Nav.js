import React, { useState } from 'react';
import atn_logo from "../assets/ATN_logo.jpeg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     setIsSticky(offset > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <nav className="bg-white dark:bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-300 dark:border-gray-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#hero" className="flex items-center">
            <img src={atn_logo} className="h-12 mr-3" alt="ATN Logo" />
            <span className="self-center text-2xs font-semibold whitespace-nowrap">African<br />Transformation<br />Network</span>
          </a>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#hero" className="text-[#d97f38] rounded hover:bg-[#3c1f1b] hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] dark:border-gray-700 py-2 px-4 md:py-0 md:px-0 md:hover:bg-transparent">Home</a>
            <a href="#about" className="text-[#d97f38] rounded hover:bg-[#3c1f1b] hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] dark:border-gray-700 py-2 px-4 md:py-0 md:px-0 md:hover:bg-transparent">About</a>
            <a href="#events" className="text-[#d97f38] rounded hover:bg-[#3c1f1b] hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] dark:border-gray-700 py-2 px-4 md:py-0 md:px-0 md:hover:bg-transparent">Events</a>
            <a href="#contact" className="text-[#d97f38] rounded hover:bg-[#3c1f1b] hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] dark:border-gray-700 py-2 px-4 md:py-0 md:px-0 md:hover:bg-transparent">Contact</a>
          </div>
          <div className="flex md:order-2">
            <button type="button" className=" text-[#d97f38] font-extrabold bg-[#3c1f1b] hover:bg-[#3c1f1b] focus:ring-4 focus:outline-none focus:ring-[#3c1f1b] rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#3c1f1b] dark:hover:bg-[#3c1f1b] dark:focus:ring-[#3c1f1b]">Join Us</button>
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleAccordion}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className='pt-14 mt-3'>
      {isOpen && (
        <div className="border rounded-md overflow-hidden sm:hidden" id="navbar-sticky">
          <div className="border-t">
            <a href="#home" className="block py-2 px-4 text-[#d97f38] rounded hover:bg-[#3c1f1b]">Home</a>
            <a href="#about" className="block py-2 px-4  text-[#d97f38] rounded hover:bg-[#3c1f1b]">About</a>
            <a href="#events" className="block py-2 px-4  text-[#d97f38] rounded hover:bg-[#3c1f1b]">Events</a>
            <a href="#contact" className="block py-2 px-4  text-[#d97f38] rounded hover:bg-[#3c1f1b]">Contact</a>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Nav;
