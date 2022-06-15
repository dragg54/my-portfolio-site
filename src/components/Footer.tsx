import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='h-10 w-full bg-gray-400  flex text-[#323432] text-sm justify-center items-center font-[poppins]'>
    <a href="https://web.facebook.com/jibola.ayobami" target="_blank" rel="noreferrer" className='mr-2'><FaFacebookF /></a>
    <a href="https://twitter.com/dragg54" target="_blank" rel="noreferrer" className='mr-2'><FaTwitter /></a>
    <a href="https://github.com/dragg54" target="_blank" rel="noreferrer" className='mr-2'><FaGithub /></a>
    <a href="https://www.instagram.com/jibolaayobami/" target="_blank" rel="noreferrer" className='mr-2'><FaInstagram /></a>
    <a href="https://linkedin.com/in/ajibola-ayobami-50260a209" target="_blank" rel="noreferrer" className='mr-2'><FaLinkedin /></a>
      
        <p className='text-sm'> Sadiq Ajibola <span className='text-[#E34234]'>©2022</span></p>
    </div>
 
    </>
  )
}

export default Footer