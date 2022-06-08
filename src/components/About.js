import React from 'react'
import { FaMicroscope } from 'react-icons/fa'

export const About = () => {
  return (
    <div className=' h-[375px] bg-[] w-full px-6 pt-10 font-[righteous]'>
        <h1 className='text-4xl font-bold text-[#E34234] mb-4 flex w-[210px] justify-between grow-0'>About Me <FaMicroscope /></h1>
        <p className='text-gray-800 font-[poppins] text-sm'>A frontend developer whose interest revolves around developing 
        beautiful and accessible websites for different usages. My love for art, design and aesthestics has been the foundation of my career choice, while my problem-solving skills, 
        logical reasoning and love for the digital/technological web has greased my ambition.</p>     
        <button className='text-[10px] bg-[#E34234] px-4 py-3 text-white mt-8'>DOWNLOAD RESUME</button>  
    </div>
  )
}
