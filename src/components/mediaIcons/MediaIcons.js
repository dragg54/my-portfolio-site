import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const MediaIcons = () => {
  return (
    <div className='flex justify-between w-full items-end h-[100px] mt-10'>
    <div className=' text-[#E34234]  w-20 mt-6 mb-4 h-[100px] justify-between flex  text-base'>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />

    </div>
    <div className='flex flex-col justify-between items-center w-6 h-20 animate-bounce'>
    <div><p className='transform rotate-90 text-[#E34234] text-[0.6rem]'>SCROLL</p></div>
    <div className='h-10 w-[1px] bg-[#E34234]'></div>
    </div>
    </div>
  )
}

export default MediaIcons