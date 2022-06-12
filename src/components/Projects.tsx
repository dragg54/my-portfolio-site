import React from 'react'

const Projects = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className='w-full bg-gray-400  h-[1470px] px-10 py-10 sm:h-[1800px] md:px-14 md:py-14 md:h-[1500px] xl:p-36 xl:h-[1690px]' id="projects">
      <h1 className='text-3xl font-black text-[#323432] mb-1 whitespace-nowrap flex font-[Roboto] '>PROJECTS</h1>
        <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-4'></div>
      <p className='text-[#323432] font-[poppins]'>Using various technologies, I've built various projects, both large and minor. Below are some of the projects built by me</p>
      <div className='mt-12 relative font-[poppins] md:flex justify-between md:w-full'>
        <img src="../../../images/project_1.png" alt="" className='md:w-full'/>
       <div className='h-40 w-20 overflow-hidden absolute right-0 top-32 rounded-t-xl rounded-b-2xl'></div>
       <div className='w-full flex justify-center flex-col items-center md:w-3/5'>  <h1 className='mt-8 text-2xl text-[#323432] font-extrabold font-[Roboto]'>E-Commerce Site</h1>
        <p className='text-[#323432]'>Everyone loves shopping. So I built this multi-paged and responsive shopping site using React js, Javascript 
        and Styled-Components.</p>
        <h4 className='mt-4 font-[roboto] text-[#323432] mb-1'>Tools Used</h4>
        <div className='flex justify-center items-center h-7'>
          <img src="../../icons/NEXT.png" alt="" className='h-5 w-5 mr-3' />
          <img src="../../icons/js.png" alt="" className='h-5 w-7 mr-3' />
          <img src="../../icons/styled_components.png" alt="" className='h-5 w-5 mr-3' />
          <img src="../../icons/git.png" alt="" className='h-5 w-5'/>
        </div>
        <button className='text-[10px] bg-[#E34234] px-4 py-3 text-green-100  mt-8 font-[Poppins] mx-auto shadow-2xl'>VIEW PROJECT</button></div>
      </div>

      <div className='mt-24 relative md:flex justify-start'><img src="../../../images/project_2.png" alt="" className='md:w-full'/>
       <div className='h-40 w-20 overflow-hidden absolute right-0 top-32 '></div>
       <div className='w-full flex justify-center flex-col items-center md:w-3/5'>  <h1 className='mt-8 text-2xl text-[#323432] font-extrabold font-[Roboto]'>Interior Designer</h1>
        <p className='text-[#323432] font-[Poppins]'>This project reflects my knowledge of good UI. It was developed using HTML, Javascript and Tailwind CSS</p>
        <h4 className='mt-4 font-[roboto] text-[#323432] mb-1'>Tools Used</h4>
        <div className='flex justify-center items-center h-7'>
          <img src="../../icons/HTML.png" alt="" className='h-5 w-5 mr-3' />
          <img src="../../icons/tailwind.png" alt="" className='h-5 w-5 mr-3' />
          <img src="../../icons/js.png" alt="" className='h-5 w-6 mr-3' />
          <img src="../../icons/git.png" alt="" className='h-5 w-5'/>
        </div>
        <button className='text-[10px] bg-[#E34234] px-4 py-3 text-green-100  mt-8 font-[Poppins] mx-auto shadow-2xl'>VIEW PROJECT</button></div>
      </div>
     
     
      <div className='w-7 transform skew-x-45 h-1 mb-6'></div>
    </div>
  )
}

export default Projects