import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import atn_hero from "../assets/atn_hero.jpg"
import CountUp from 'react-countup'


const Hero = () => {
  return (
    <div>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{backgroundPosition: "50%",
            backgroundImage: `url(${atn_hero})`,
            height: "500px"}}
            
          
        >
          <div
            className="absolute bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{backgroundColor: `rgba(0, 0, 0, 0.75)`}}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12 w-full">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 uppercase leading-[1]">
              <span>We are </span>
              <TypeAnimation sequence={[
                'Agile',
                2000,
                'Adept',
                2000,
                'Africa',
                2000,
              ]}
              speed={10}
              wrapper='span'
              className='text-[#d97f38]'
              repeat={Infinity}/>
                </h1>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing"
                  type="button"
                  className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Join Our Community Today
                </a>
                <div className='grid grid-cols-3 gap-4 mt-14'>
            <p className='text-lg'><CountUp start={0} end={5} duration={7} /><br /> Countries</p>
            <p className='text-lg'><CountUp start={0} end={10} duration={7} /><br /> Events Held</p>
            <p className='text-lg'><CountUp start={0} end={100} duration={7} />+<br />People Impacted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero