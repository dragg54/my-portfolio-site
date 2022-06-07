import React from 'react'
import { FaMicroscope } from 'react-icons/fa'

export const About = () => {
  return (
    <div className=' h-[400px] bg-[#EFE7D3] w-full px-6 pt-10 font-[righteous]'>
        <h1 className='text-4xl font-bold text-pink-700 mb-4 flex w-[64%] justify-between'>About Me <FaMicroscope /></h1>
        <p className='text-[#0C1446] font-[poppins]'>A frontend developer whose interest revolves around developing 
        beautiful and accessible websites for different usages. My love for art, design and aesthestics has been the foundation of my career choice, while my problem-solving skills, 
        logical reasoning and love for the digital/technological web has greased my ambition.  </p>
        
    </div>
  )
}
