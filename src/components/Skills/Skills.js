import React from 'react'
import {FaTools} from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='w-full bg-[#F2F1E8] h-72'>
      <h1 className='text-4xl text-[#E34234] px-6 pt-10 flex justify-between w-[178px] font-[righteous] mb-6'>Skills <FaTools /></h1>
      <div className='grid grid-cols-3 text-[0.7rem] w-full justify-items-center gap-3 text-whit font-[Poppins] text-gray-900'>
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