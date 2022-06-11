import React from 'react'

const Projects = () => {
  return (
    <div className='w-full bg-gray-400  h-[1300px] px-10 py-6'>
      <h1 className='text-3xl font-black text-[#323432] mb-1 whitespace-nowrap flex font-[Roboto] '>PROJECTS</h1>
        <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-4'></div>
      <p className='text-[#323432] font-[poppins]'>Using various technologies, I've built various projects, both large and minor. Below are some of the projects built by me</p>
      <div className='mt-12 relative font-[poppins]'><img src="../../../images/project_1.png" alt="" />
       <div className='h-40 w-20 overflow-hidden absolute right-0 top-32 rounded-t-xl rounded-b-2xl'></div>
       <div className='w-full flex justify-center flex-col items-center'>  <h1 className='mt-8 text-2xl text-[#323432] font-extrabold font-[Roboto]'>E-Commerce Site</h1>
        <p className='text-[#323432]'>Everyone loves shopping. So I built this multi-paged and responsive shopping site using React js, Javascript 
        and Styled-Components.</p>
        <button className='text-[10px] bg-[#E34234] px-4 py-3 text-green-100  mt-8 font-[Poppins] mx-auto shadow-2xl'>VIEW PROJECT</button></div>
      </div>
      <div className='mt-24 relative'><img src="../../../images/project_2.png" alt="" />
       <div className='h-40 w-20 overflow-hidden absolute right-0 top-32 '></div>
       <div className='w-full flex justify-center flex-col items-center'>  <h1 className='mt-8 text-2xl text-[#323432] font-extrabold font-[Roboto]'>Interior Designer</h1>
        <p className='text-[#323432] font-[Poppins]'>This project reflects my knowledge of good UI. It was developed using HTML, Javascript and Tailwind CSS</p>
        <button className='text-[10px] bg-[#E34234] px-4 py-3 text-green-100  mt-8 font-[Poppins] mx-auto shadow-2xl'>VIEW PROJECT</button></div>
      </div>
     
     
      <div className='w-7 transform skew-x-45 h-1 mb-6'></div>
    </div>
  )
}

export default Projects