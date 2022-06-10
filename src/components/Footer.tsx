import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='h-10 w-full bg-gray-400 px-8 flex text-[#E34234] text-sm justify-end items-center font-[poppins]'>
          <FaFacebookF className='mr-2'/>
        <FaTwitter className='mr-2'/>
        <FaInstagram className='mr-2'/>
        <FaLinkedin className='mr-2'/>
        <p> ©Sadiq Ajibola</p>

    </div>
  )
}

export default Footer