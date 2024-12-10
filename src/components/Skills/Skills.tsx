import React, { FunctionComponent } from 'react'
import {icons}  from "../iconsData"
import "aos/dist/aos.css";

const Skills:FunctionComponent = () => {
  return (
    <div className='w-full bg-gray-300 h-[680px] px-10 py-10 md:px-14 md:py-14 xl:p-36 xl:h-[770px]' id="skills">
      <h1 className='text-3xl text-[#E34234]pt-10 flex justify-between w-[132px] font-[Roboto] mb-1 font-black md:text-4xl'><span className='mr-2'>SKILLS</span></h1>
      <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-6'></div>
      <p className='text-[#323432] font-[poppins] mb-8'  data-aos="fade-up" data-aos-duration="1000">I have extensive knowledge and experience in utilizing the following skills.</p>
      <div className='grid grid-cols-3 text-[0.7rem] w-full md:w-1/2  p-0 gap-3 justify-items-start font-[Poppins] text-[#323432]text-left'>
       {icons.map(icon=>{
         const {name, id, img} = icon
         return(
           <div className={`flex flex-col items-center`} key={id} >
           <div className={`${name === 'Styled Components' && 'mr-[300px]'} w-10 h-10 overflow-hidden object-contain mt-4`}>
             <img className={`${name === 'Styled Components' && 'mr-[300px]'}`} src={img} alt="" />
           </div>
           <p className={`${name === 'Styled Components' && 'mr-[300px]'} text-[0.6rem] mt-2 sm:text-[0.8rem]`}>{name}</p>
           </div>
         )
       })}
      </div>
      </div>
  )
}

export default Skills