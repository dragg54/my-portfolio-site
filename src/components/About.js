import React from 'react'

export const About = () => {
  return (
    <div className=' h-[390px] bg-blue-100 w-full px-10 pt-10 font-[righteous]'>
        <h1 className='text-4xl font-bold text-blue-900 mb-1 whitespace-nowrap flex '><span className='mr-2'>About Me</span></h1>
        <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-4'></div>
        <p className='text-blue-800 font-[poppins] text-sm'>A frontend developer whose interest revolves around developing 
        beautiful and accessible websites for different usages. My love for art, design and aesthestics has been the foundation of my career choice, while my problem-solving skills, 
        logical reasoning and love for the digital/technological web has greased my ambition.</p>     
        <button className='text-[10px] bg-[#E34234] px-4 py-3 text-white mt-8 font-[Poppins]'>DOWNLOAD RESUME</button>  
    </div>
  )
}
