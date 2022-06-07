import React from 'react'
import Nav from './Nav'
import { FiMenu } from 'react-icons/fi'
const Header = () => {
  return (
    <div className='mb-16 flex w-full justify-between'>
        <Nav />
        <div className='text-[#EFE7D3] text-[1.3rem]'><FiMenu /></div>
        </div>
  )
}

export default Header