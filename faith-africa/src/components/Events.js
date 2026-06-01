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

const Events = () => {
  const eventCards = [
    { src: growfirst, title: 'Growth Lab' },
    { src: gender, title: 'Gender Justice' },
    { src: relevance, title: 'Relevance Summit' },
    { src: stand, title: 'Stand Together' },
    { src: path, title: 'Pathfinder Forum' },
    { src: better, title: 'Better Futures' },
    { src: tech, title: 'Digital Access' },
    { src: passion, title: 'Passion X' },
    { src: community, title: 'Community Circle' },
    { src: growNew1, title: 'New Growth Series' },
    { src: growNew2, title: 'Emerging Leaders' },
    { src: cv_build, title: 'Career Boost' },
    { src: trans_lead, title: 'Leadership Track' },
    { src: mental_health, title: 'Mind Wellness' },
    { src: digital_transform, title: 'Digital Transformation' },
    { src: social_network, title: 'Network Lab' },
    { src: gambling, title: 'Choices & Risks' },
    { src: empower, title: 'Empowerment Circle' },
    { src: sdg, title: 'SDG Forum' },
    { src: rlmath, title: 'Creative Learning' }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-8 text-center">
        <span className="inline-flex rounded-full border border-[#d97f38]/30 px-3 py-1 text-sm uppercase tracking-[0.3em] text-[#d97f38]">
          Past Showcase
        </span>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Events that shaped our movement
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
          Our program archive reflects intentional learning, leadership, and community-building across Africa.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {eventCards.map((event, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_45px_120px_-45px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:border-[#d97f38]/40"
          >
            <div className="relative overflow-hidden">
              <img
                src={event.src}
                alt={event.title}
                className="h-72 w-full object-cover transition duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d97f38]/90">
                  Event Highlight
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{event.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/60">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d97f38]">Currently running</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">No live community events right now</h3>
            <p className="mt-4 max-w-2xl text-slate-300">
              We are building toward the next immersive cohort. Join our community to receive first access to new programs, learning labs, and mentorship experiences.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing"
            className="inline-flex items-center justify-center rounded-full bg-[#d97f38] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#be8d3f]"
          >
            Join the waiting list
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
