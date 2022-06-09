import React from 'react'

const Skills = () => {
  return (
    <div className='w-full bg-gray-300 h-72 px-10 py-6'>
      <h1 className='text-4xl text-[#323432]pt-10 flex justify-between w-[132px] font-[Poppins] mb-1 font-black'><span className='mr-2'>SKILLS</span></h1>
      <div className='w-7 transform skew-x-45 h-1 bg-[#04D010] mb-6'></div>
      <div className='grid grid-cols-3 text-[0.7rem] w-full justify-items-start gap-3 font-[Poppins] text-[#323432]text-left'>
        <p>HTML</p>
        <p>CSS/SASS</p>
        <p>TAILWIND CSS</p>
        <p>MATERIAL UI</p>
        <p>STYLED-COMPs</p>
        <p>JAVASCRIPT</p>
        <p>TYPESCRIPT</p>
        <p>REACT JS</p>
        <p>NEXT JS</p>
        <p>REDUX</p>
        <p>GRAPH QL</p>
        <p>FIGMA</p>
        <p>GIT</p>
      </div>
      </div>
  )
}

export default Skills