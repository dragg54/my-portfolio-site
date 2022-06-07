import React from 'react'
import {FaTools} from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='w-full h-60 bg-[#C26DBC]'>
      <h1 className='text-4xl text-red-900 px-6 pt-10 flex justify-between w-[178px] font-[righteous] mb-6'>Skills <FaTools /></h1>
      <div className='grid grid-cols-3 text-[11px] w-full justify-items-center content-start gap-3 text-[#0C1446'>
        <p>HTML</p>
        <p>CSS/SASS</p>
        <p>TAIWIND CSS</p>
        <p>MATERIAL UI</p>
        <p>STYLED-COMPONENTS</p>
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