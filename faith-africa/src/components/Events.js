// import React from 'react'
// import growfirst from "../assets/events/Grow1.jpeg"
// import gender from "../assets/events/gender2.jpeg"
// import relevance from "../assets/events/relevance3.jpeg"
// import stand from "../assets/events/stand4.jpeg"
// import path from "../assets/events/path5.jpeg"
// import better from "../assets/events/better6.jpeg"
// import tech from "../assets/events/tech7.jpeg"
// import passion from "../assets/events/passion8.jpeg"
// import community from "../assets/events/community9.jpeg"
// import growNew1 from "../assets/events/grow_new1.jpeg"
// import growNew2 from "../assets/events/grow_new2.jpeg"
// import trans_lead from "../assets/events/Trans_leadership.jpg"
// import cv_build from "../assets/events/cv_building.jpg"
// import mental_health from "../assets/events/mental_health.jpg"
// import digital_transform from "../assets/events/digital_transform.jpg"
// import social_network from "../assets/events/social_network.jpg"
// import gambling from "../assets/events/gambling.jpg"
// import empower from "../assets/events/empower.jpg"
// import sdg from "../assets/events/sdg.jpg"
// import sdg from "../assets/events/sdg.jpg"
// import rlmath from "../assets/events/rlmath.jpg"
// import "../App.css"

// import HorizontalScroll from './HorizontalScroll';

// const Events = () => {
//     const images = [
//         growfirst,
//         gender,
//         relevance,
//         stand,
//         path,
//         better,
//         tech,
//         passion,
//         community,
//         growNew1,
//         growNew2,
//         cv_build,
//         trans_lead,
//         mental_health,
//         digital_transform,
//         social_network,
//         gambling,
//         empower,
//         sdg,
//         rlmath
//       ];
//   return (
//     <div className='bg-[#3c1f1b]'>
//         <h1 className='text-4xl font-semibold py-12 text-[#d97f38]'>Past Events</h1>

//     {/* <div className='xl:px-14 xl:mx-14 lg:w-2/3 xl:w-2/3 md:w-2/3  lg:px-14 lg:mx-14 md:px-7 md:mx-7 sm:mb-5'>


        

// <div id="default-carousel" className="relative w-full" data-carousel="slide">
    
//     <div className="relative h-96 overflow-hidden rounded-lg md:h-96">

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={growfirst} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={gender} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
        
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={relevance} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
        
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={stand} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
        
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={path} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={better} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
        
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={tech} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
        
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={passion} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
        
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={community} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>


//     </div>
    
//     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
//     </div>
    
//     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
//             </svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>


// </div> */}

// <div>
//       <HorizontalScroll images={images} />
//     </div>




//     <div>
//   <h1 className='text-4xl font-semibold py-12 text-[#d97f38]'>Currently Running</h1>

//   <div className='flex justify-center'>
//     {/* <img 
//       src={mental_health} 
//       alt="Currently running ATN event - Mental Health" 
//       className='lg:w-1/2 md:w-1/2 sm:w-full p-4' 
//     /> */}
//   </div>
// </div>







// </div>



        
  
//   )
// }

// export default Events



import React from 'react';
import growfirst from "../assets/events/Grow1.jpeg";
import gender from "../assets/events/gender2.jpeg";
import relevance from "../assets/events/relevance3.jpeg";
import stand from "../assets/events/stand4.jpeg";
import path from "../assets/events/path5.jpeg";
import better from "../assets/events/better6.jpeg";
import tech from "../assets/events/tech7.jpeg";
import passion from "../assets/events/passion8.jpeg";
import community from "../assets/events/community9.jpeg";
import growNew1 from "../assets/events/grow_new1.jpeg";
import growNew2 from "../assets/events/grow_new2.jpeg";
import trans_lead from "../assets/events/Trans_leadership.jpg";
import cv_build from "../assets/events/cv_building.jpg";
import mental_health from "../assets/events/mental_health.jpg";
import digital_transform from "../assets/events/digital_transform.jpg";
import social_network from "../assets/events/social_network.jpg";
import gambling from "../assets/events/gambling.jpg";
import empower from "../assets/events/empower.jpg";
import sdg from "../assets/events/sdg.jpg";
import rlmath from "../assets/events/rlmath.jpg";
import "../App.css";

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
    community,
    growNew1,
    growNew2,
    cv_build,
    trans_lead,
    mental_health,
    digital_transform,
    social_network,
    gambling,
    empower,
    sdg,
    rlmath
  ];

  return (
    <div className='bg-[#3c1f1b]'>
      <h1 className='text-4xl font-semibold py-12 text-[#d97f38]'>Past Events</h1>

      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div>
        <h1 className='text-4xl font-semibold py-12 text-[#d97f38]'>Currently Running</h1>
        <div className='flex justify-center'>
          {/* Uncomment and use the currently running event image */}
          {/* <img 
            src={mental_health} 
            alt="Currently running event - Mental Health" 
            className='lg:w-1/2 md:w-1/2 sm:w-full p-4' 
          /> */}
          <h3 className='text-2xl font-semibold text-[#d97f38] py-4'>None</h3>
        </div>
      </div>
    </div>
  );
};

export default Events;
