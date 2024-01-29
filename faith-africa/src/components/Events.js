import React from 'react'
import growfirst from "../assets/events/Grow1.jpeg"
import gender from "../assets/events/gender2.jpeg"
import relevance from "../assets/events/relevance3.jpeg"
import stand from "../assets/events/stand4.jpeg"
import path from "../assets/events/path5.jpeg"
import better from "../assets/events/better6.jpeg"
import tech from "../assets/events/tech7.jpeg"
import passion from "../assets/events/passion8.jpeg"
import community from "../assets/events/community9.jpeg"
import growNew1 from "../assets/events/grow_new1.jpeg"
import growNew2 from "../assets/events/grow_new2.jpeg"
import "../App.css"

import HorizontalScroll from './HorizontalScroll';

const Events = () => {
    const images = [
        growfirst,
        gender,
        relevance,
        stand,
        path,
        better,
        tech,
        passion,
        community
      ];
  return (
    <div className='bg-[#3c1f1b]'>
        <h1 className='text-4xl font-semibold py-12 text-[#d97f38]'>Past Events</h1>

    {/* <div className='xl:px-14 xl:mx-14 lg:w-2/3 xl:w-2/3 md:w-2/3  lg:px-14 lg:mx-14 md:px-7 md:mx-7 sm:mb-5'>


        

<div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-96 overflow-hidden rounded-lg md:h-96">

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={growfirst} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={gender} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={relevance} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={stand} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={path} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={better} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={tech} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={passion} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={community} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>


    </div>
    
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
    </div>
    
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


</div> */}

<div>
      <HorizontalScroll images={images} />
    </div>




<div>
<h1 className='text-4xl font-semibold py-12 text-[#d97f38]'>Recent Events</h1>

<div className='xl:grid grid-cols-2 lg:grid grid-cols-2 md:grid grid-cols-2 p-4'>
    <img src={growNew1} alt="" className='px-10' />
    <img src={growNew2} alt="" className='px-10'/>

</div>
    
</div>






</div>



        
  
  )
}

export default Events