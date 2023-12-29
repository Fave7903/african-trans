import './App.css';
import { TypeAnimation } from 'react-type-animation';
// import Nav from './components/Nav';
// import About from './components/About';
// import Contact from './components/Contact';
// import Events from './components/Events';
// import Footer from './components/Footer';
import atn_logo from "./assets/ATN_logo.jpeg";



function App() {
  return (
    <div className="App font-ubuntu text-center font-bold">



    <div id='hero'>


    <section class="py-7">
    {/* <Nav /> */}


        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={{backgroundPosition: "50%",
            backgroundImage: `url(${atn_logo})`,
            height: "500px"}}
            
          
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{backgroundColor: `rgba(0, 0, 0, 0.75)`}}
          >
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 uppercase leading-[1]">
              <span>We are </span>
              <TypeAnimation sequence={[
                'Coming Soon',
                2000,
                'Coming Soon',
                2000,
                'Coming Soon',
                2000,
              ]}
              speed={10}
              wrapper='span'
              className='text-[#d97f38]'
              repeat={Infinity}/>
                </h1>

                {/* <a
                  href="#about"
                  type="button"
                  class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
    {/* <div id='about' className='py-7 '>
      <About />
      </div>
    <div id='events' className='py-7 '>
      <Events />
      </div>

    <div id="contact" className='py-7'></div>
              <Contact />
    </div>

    <div>
              <Footer /> */}
    </div>
    </div> 
  );
}

export default App;
