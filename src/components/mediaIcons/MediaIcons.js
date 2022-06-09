import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const MediaIcons = () => {
  return (
    <div className='flex justify-between w-full items-end h-[100px] mt-10'>
    <div className=' text-[#04D010]  w-20 mt-6 mb-4 h-[100px] justify-between flex flex-col text-sm'>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />

    </div>
    <div className='flex flex-col justify-between items-center w-6 h-20 animate-bounce'>
    <div><p className='transform rotate-90 text-[#04D010] text-[0.6rem]'>SCROLL</p></div>
    <div className='h-10 w-[1px] bg-[#04D010]'></div>
    </div>
    </div>
  )
}

export default MediaIcons