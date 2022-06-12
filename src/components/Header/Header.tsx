import React, { FunctionComponent, } from 'react'
import Nav from './Nav'
import { FiMenu } from 'react-icons/fi'

type HeaderProps = {
  clickMe: ()=>void
}

const Header:FunctionComponent<HeaderProps> = ({clickMe}:HeaderProps) => {
  return (
    <div className='mb-16 flex w-full justify-between animate-[fadeIn_linear_1s_infinite]'>
        <Nav />
        <div className='hidden md:block w-1/2 md:w-1/3'>
          <ul className='flex text- justify-between text-gray-400 font-[poppins]'>
            <li className='hover:underline decoration-4 underline-offset-8 transition duration-[2000ms]  decoration decoration-[#E34234]'>About</li>
            <li className='hover:underline decoration-4 underline-offset-8 transition duration-[2000ms]  decoration decoration-[#E34234]'>Skills</li>
            <li className='hover:underline decoration-4 underline-offset-8 transition duration-[2000ms]  decoration decoration-[#E34234]'>Projects</li>
            <li className='hover:underline decoration-4 underline-offset-8 transition duration-[2000ms]  decoration decoration-[#E34234]'>Contact</li>
          </ul>
        </div>
        <button className='text-[#E34234] text-[1.5rem] md:hidden' onClick={clickMe}><FiMenu /></button>
        </div>
  )
}

export default Header