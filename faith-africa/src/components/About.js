import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import buildAfrica from "../assets/build_africa.jpg"
import capacity from "../assets/capacity.jpg"
import leadership from "../assets/leadership.jpg"
import excos from "../assets/atn_excos_updated.jpg"


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <div class="flex justify-center overflow-hidden">

    
    <div className='xl:w-2/3 lg:w-2/3 md:w-2/3 w-full'>
      <div data-aos="fade-right">
        <h1 className='text-5xl font-semibold py-12 text-[#d97f38]'>Our Mission</h1>
      </div>
        
      <div data-aos="fade-left" className='flex justify-center'>
        <h3 className='font-thin text-justify text-xl mx-5 my-5'>At African Transformation Network (ATN), our mission is crystal clear: to empower African youths to shape a transformative future for themselves and the world. Through innovative programs and impactful initiatives, we pave the way for young African minds to thrive and contribute meaningfully on a global scale.</h3>
      </div>
      <div data-aos="fade-up" className='mx-5 my-5 text-justify'>
      <ul className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
          <li><h5 className='text-lg font-semibold text-[#d97f38] mx-5 px-5'>Organizing Programs that propel growth</h5><p className='font-thin text-lg my-4'>We orchestrate an array of transformative events, from thought-provoking webinars and mentorship opportunities to immersive masterclasses and inspiring conferences. These avenues serve as dynamic platforms for learning, networking, and honing skills essential for personal and professional growth.</p></li>
          <li><h5 className='text-lg font-semibold text-[#d97f38] mx-5 px-5'>Creating Compelling Content for Change</h5><p className='font-thin text-lg my-4'>Harnessing the power of media, we curate engaging videos, insightful books, and specialized trainings. These resources are designed to empower and equip African youths with the knowledge and tools needed to succeed in today's ever-evolving world. Some of these training opportunities are available at a nominal cost to support our initiatives.</p></li>
        </ul>
        <h4 className='text-lg font-semibold text-[#d97f38] mx-5 px-5'>Join Us in Redefining Possibilities</h4><p className='font-thin text-lg my-4'>Join us on this transformative journey as we nurture the potential of African youths and cultivate a generation ready to make a meaningful impact. Together, we redefine possibilities and shape a future where African talent plays a pivotal role in global transformation.</p>
      </div>

      <div data-aos="fade-right">
        <h1 className='text-5xl font-semibold text-[#d97f38] py-5'>Our Vision</h1>
      </div>

      <div class="flex justify-center items-center py-7">
  <div>
    <div className='grid lg:grid-cols-2 gap-2 md:grid-cols-2 gap-4 py-7' data-aos="fade-left">

      <div className="relative mb-6 h-64 lg:rounded-lg xl:rounded-lg md:rounded-lg overflow-hidden">
      
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img className="object-cover w-full h-full absolute inset-0 z-0" src={buildAfrica} alt="Background" />
        
        <p className="text-white text-2xl font-bold p-4 top-20 z-20 relative">Building Africa Together</p>
      </div>
      <div>
        <p className='text-[#d97f38] text-lg mx-2'>Our vision is to motivate and guide young Africans towards self-development and profound mental transformation, instilling a mindset conducive to personal and communal advancement</p>
      </div>
    </div>

    <div className='grid lg:grid-cols-2 gap-2 md:grid-cols-2 gap-4 py-7' data-aos="fade-right">

    <p className='text-[#d97f38] text-lg mx-2'> ATN envisions empowering young Africans by nurturing their innate talents and abilities, fostering their growth as catalysts for African development</p>

      <div className="relative mb-6 h-64 lg:rounded-lg xl:rounded-lg md:rounded-lg overflow-hidden">
      
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img className="object-cover w-full h-full absolute inset-0 z-0" src={capacity} alt="Background" />
        
        <p className="text-white text-2xl font-bold p-4 top-20 z-20 relative">Capacity Building</p>
      </div>
      
    </div>

    <div className='grid lg:grid-cols-2 gap-2 md:grid-cols-2 gap-4 py-7' data-aos="fade-up">

      <div className="relative mb-6 h-64 lg:rounded-lg xl:rounded-lg md:rounded-lg overflow-hidden">
      
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img className="object-cover w-full h-full absolute inset-0 z-0" src={leadership} alt="Background" />
        
        <p className="text-white text-2xl font-bold p-4 top-20 z-20 relative">Empowering Leaders Across Every Sphere of Influence</p>
      </div>
      <div>
        <p className='text-[#d97f38] text-lg mx-2'>We aim to equip men and women as future leaders capable of steering progress in diverse arenas, including careers, organizations, and governments across Africa's dynamic landscape</p>
      </div>
    </div> 
    
  </div>
</div>
    <div>
    <div data-aos="fade-right">
        <h1 className='text-3xl font-semibold py-12 text-[#d97f38]'>The Executive Board</h1>
        <img src={excos} alt='Executive board' />
      </div>
    </div>

        
    </div>
    </div>
  )
}

export default About