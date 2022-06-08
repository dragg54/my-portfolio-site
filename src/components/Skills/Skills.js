import React from 'react'
import {FaTools} from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='w-full bg-blue-200 h-72 px-10 '>
      <h1 className='text-4xl text-blue-900 pt-10 flex justify-between w-[132px] font-[righteous] mb-2'><span className='mr-2'>Skills</span></h1>
      <div className='w-7 transform skew-x-45 h-1 bg-[#E34234] mb-6'></div>
      <div className='grid grid-cols-3 text-[0.8rem] w-full justify-items-start gap-3 font-[Poppins] text-blue-900 text-left'>
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