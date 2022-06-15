import React,{ useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className='h-[700px] bg-gray-200 w-full px-10 pt-10 font-[Poppins] sm:h-[550px] md:px-14 md:py-14 lg:p-20 xl:p-36' id="about">
        <h1 className='text-3xl font-black text-[#323432] mb-1 whitespace-nowrap flex font-[Roboto] md:text-4xl'><span className='mr-2'>ABOUT ME</span></h1>
        <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-4'></div>
        <p className='text-[#323432] font-[poppins] text-sm sm:text-base' data-aos="fade-up" data-aos-duration="1000">A frontend developer whose interest revolves around developing 
        beautiful and accessible websites for different usages. My love for art, design and aesthestics has been the foundation of my career choice, while my problem-solving skills, 
        logical reasoning and love for the digital/technological web has greased my ambition.</p> 
        <h1 className='text-green-500 text-3xl mt-10 text-[poppins] font-bold'>What I do when not coding?</h1> 
        <p className='text-[#323432] font-[poppins] text-sm sm:text-base mt-6' data-aos="fade-up" data-aos-duration="1000">Oh yeah!! When I'm not building any project, 
        I love watching comedies, playing chess, reading books (mostly computer software related stuff). I also love surfing through various tech blogs, playing PS and listening to hiphop songs.</p>    
        <button className='text-[10px] bg-[#E34234] px-4 py-3 text-green-100 mt-8 font-[Poppins] sm:mt-9 shadow-[2xl_2xl_2xl_red] rounded-md'>DOWNLOAD RESUME</button> 
        
    </div>
  )
}
