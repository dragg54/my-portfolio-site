import React from 'react'
import "aos/dist/aos.css";
const Projects = () => {
  return (
    <div className='w-full bg-[#54627B] h-[1470px] px-10 py-10 sm:h-[1400px] md:px-14 md:py-14 md:h-[1200px] xl:p-36 xl:h-[1500px]' id="projects">
      <h1 className='text-3xl font-black text-gray-300 mb-1 whitespace-nowrap flex font-[Roboto] '>PROJECTS</h1>
      <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-4'></div>
      <p className='text-gray-300 font-[poppins]' data-aos="fade-up" data-aos-duration="1000">Using various technologies, I've built various projects, both large and minor. Below are some of the projects built by me</p>
      <div className='mt-12 relative font-[poppins] flex flex-col md:flex-row  items-center justify-between md:w-full'>
        <div className=' w-[305px] h-[200px] md:w-full md:h-full object-contain border-8 border-black shadow-[1px_1px_1px_1px_gray] md:mr-8 relative'>
          <img src="../../../images/project.png" alt="" className='md:w-full h-full' /></div>
        <div className='h-40 w-20 overflow-hidden absolute right-0 top-32 rounded-t-xl rounded-b-2xl'></div>
        <div className='flex justify-center flex-col sm:w-4/5 items-center md:w-3/5'>
          <h1 className='mt-8 text-2xl text-[#E34234] font-extrabold font-[Roboto]'>E-Commerce Site</h1>
          <p className='text-gray-300' data-aos="fade-up" data-aos-duration="1000">Everyone loves shopping. So I built this multi-paged and responsive shopping site using React js, Javascript
            and Styled-Components.</p>
          <h4 className='mt-4 font-[lobster] text-blue-500 mb-1'>Tools Used</h4>
          <div className='flex justify-center items-center h-7'>
            <img src="../../icons/NEXT.png" alt="" className='h-5 w-5 mr-3' />
            <img src="../../icons/js.png" alt="" className='h-5 w-7 mr-3' />
            <img src="../../icons/styled_components.png" alt="" className='h-5 w-5 mr-3' />
            <img src="../../icons/git.png" alt="" className='h-5 w-5' />
          </div>
          <a href="https://github.com/dragg54/ecommerce-store" target="_blank" rel="noreferrer"><button className='text-[10px] bg-[#E34234] px-4 py-3 text-green-100  mt-8 font-[Poppins] mx-auto shadow-[2xl_2xl_2xl_red] rounded-md'>VIEW PROJECT</button></a></div>
      </div>

      <div className='mt-24 relative md:flex justify-between flex flex-col md:flex-row items-center'>
      <div className=' w-[305px] h-[200px] md:w-full md:h-full object-contain border-8 border-black shadow-[1px_1px_1px_1px_gray] relative md:mr-8'>
          <img src="../../../images/project2.png" alt="" className='md:w-full h-full w-full' /></div>
        <div className='h-40 w-20 overflow-hidden absolute right-0 top-32 '></div>
        <div className='flex justify-center flex-col items-center sm:w-4/5 md:w-3/5'>  <h1 className='mt-8 text-2xl text-[#E34234] font-extrabold font-[Roboto]'>Interior Designer</h1>
          <p className='text-gray-300 font-[Poppins]' data-aos="fade-up" data-aos-duration="1000">This project reflects my knowledge of good UI. It was developed using HTML, Javascript and Tailwind CSS</p>
          <h4 className='mt-4 font-[lobster] text-blue-500 mb-1'>Tools Used</h4>
          <div className='flex justify-center items-center h-7'>
            <img src="../../icons/HTML.png" alt="" className='h-5 w-5 mr-3' />
            <img src="../../icons/tailwind.png" alt="" className='h-5 w-5 mr-3' />
            <img src="../../icons/js.png" alt="" className='h-5 w-6 mr-3' />
            <img src="../../icons/git.png" alt="" className='h-5 w-5' />
          </div>
          <a href="https://github.com/dragg54/chinny-cribzy" target="_blank" rel="noreferrer"><button className='text-[10px] bg-[#E34234] px-4 py-3 text-green-100  mt-8 font-[Poppins] mx-auto shadow-[2xl_2xl_2xl_red] rounded-md'>VIEW PROJECT</button></a></div>
      </div>


      <div className='w-7 transform skew-x-45 h-1 mb-6'></div>
    </div>
  )
}

export default Projects