import React from 'react'
import {icons}  from "../iconsData"

const Skills = () => {
  return (
    <div className='w-full bg-gray-300 h-[760px] px-10 py-6'>
      <h1 className='text-3xl text-[#323432]pt-10 flex justify-between w-[132px] font-[Roboto] mb-1 font-black'><span className='mr-2'>SKILLS</span></h1>
      <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-6'></div>
      <p className='text-[#323432] font-[poppins] mb-8'>I have substantial amount of knowledge and experience using the skills below</p>
      <div className='grid grid-cols-2 text-[0.7rem] w-full justify-items-center gap-3 font-[Poppins] text-[#323432]text-left'>
       {icons.map(icon=>{
         const {name, id, img} = icon
         return(
           <div className='flex flex-col items-center'>
           <div key={id} className="w-10 h-10 overflow-hidden object-contain mt-4">
             <img src={img} alt="" />
           </div>
           <p className='text-[0.5rem] mt-2'>{name}</p>
           </div>
         )
       })}
      </div>
      </div>
  )
}

export default Skills