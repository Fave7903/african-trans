import React from 'react'
import atn_logo from "../assets/ATN_logo.jpeg";


const Nav = () => {
  return (
    <div>
        
<nav className="bg-white dark:bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-300 dark:border-gray-300">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#hero" className="flex items-center">
      <img src={atn_logo} className="h-12 mr-3" alt="ATN Logo"></img>
      <span className="self-center text-2xs font-semibold whitespace-nowrap">African<br />Transformation<br />Network</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className=" text-[#d97f38] font-extrabold bg-[#3c1f1b] hover:bg-[#3c1f1b] focus:ring-4 focus:outline-none focus:ring-[#3c1f1b] rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#3c1f1b] dark:hover:bg-[#3c1f1b] dark:focus:ring-[#3c1f1b]">Join Us</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-100">
      <li>
        <a href="#hero" className="block py-2 pl-3 pr-4 text-[#d97f38] rounded hover:bg-[#3c1f1b] md:hover:bg-transparent md:hover:text-[#d97f38] md:p-0 md:dark:hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="#about" className="block py-2 pl-3 pr-4 text-[#d97f38] rounded hover:bg-[#3c1f1b] md:hover:bg-transparent md:hover:text-[#d97f38] md:p-0 md:dark:hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#events" className="block py-2 pl-3 pr-4 text-[#d97f38] rounded hover:bg-[#3c1f1b] md:hover:bg-transparent md:hover:text-[#d97f38] md:p-0 md:dark:hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] md:dark:hover:bg-transparent dark:border-gray-700">Events</a>
      </li>
      <li>
        <a href="#contact" className="block py-2 pl-3 pr-4 text-[#d97f38] rounded hover:bg-[#3c1f1b] md:hover:bg-transparent md:hover:text-[#d97f38] md:p-0 md:dark:hover:text-[#d97f38] dark:text-[#d97f38] dark:hover:bg-[#3c1f1b] dark:hover:text-[#d97f38] md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Nav