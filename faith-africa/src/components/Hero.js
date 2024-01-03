import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{backgroundPosition: "50%",
            backgroundImage: `url("https://aspyee.org/sites/default/files/2021-10/IT%20ED2.jpg")`,
            height: "500px"}}
            
          
        >
          <div
            className="absolute bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{backgroundColor: `rgba(0, 0, 0, 0.75)`}}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
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
                  href="#about"
                  type="button"
                  className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero