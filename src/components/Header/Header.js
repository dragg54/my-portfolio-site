import React from 'react'
import Nav from './Nav'
import { FiMenu } from 'react-icons/fi'
const Header = () => {
  return (
    <div className='mb-16 flex w-full justify-between'>
        <Nav />
        <div className='text-[#E34234] text-[1.5rem]'><FiMenu /></div>
        </div>
  )
}

export default Header