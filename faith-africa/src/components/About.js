import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <div>
      <div data-aos="fade-right">
        <h1 className='text-6xl font-semibold py-12 text-[#d97f38]'>Our Mission</h1>
      </div>
        
      <div data-aos="fade-left" className='flex justify-center'>
        <h3 className='font-thin text-justify text-2xl mx-12 px-12 my-5'>At African Transformation Network (ATN), our mission is crystal clear: to empower African youths to shape a transformative future for themselves and the world. Through innovative programs and impactful initiatives, we pave the way for young African minds to thrive and contribute meaningfully on a global scale.</h3>
      </div>
      <div data-aos="fade-up" className='px-12 mx-12 my-5 text-justify'>
      <ul className='grid grid-cols-2 gap-10'>
          <li><h5 className='text-2xl font-semibold text-[#d97f38] mx-5 px-5'>Organizing Programs that propel growth</h5><p className='font-thin text-1xl my-4'>We orchestrate an array of transformative events, from thought-provoking webinars and mentorship opportunities to immersive masterclasses and inspiring conferences. These avenues serve as dynamic platforms for learning, networking, and honing skills essential for personal and professional growth.</p></li>
          <li><h5 className='text-2xl font-semibold text-[#d97f38] mx-5 px-5'>Creating Compelling Content for Change</h5><p className='font-thin text-1xl my-4'>Harnessing the power of media, we curate engaging videos, insightful books, and specialized trainings. These resources are designed to empower and equip African youths with the knowledge and tools needed to succeed in today's ever-evolving world. Some of these training opportunities are available at a nominal cost to support our initiatives.</p></li>
        </ul>
        <h4 className='text-2xl font-semibold text-[#d97f38] mx-5 px-5'>Join Us in Redefining Possibilities</h4><p className='font-thin text-1xl my-4'>Join us on this transformative journey as we nurture the potential of African youths and cultivate a generation ready to make a meaningful impact. Together, we redefine possibilities and shape a future where African talent plays a pivotal role in global transformation.</p>
      </div>
       
        
    </div>
  )
}

export default About