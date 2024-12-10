import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const MediaIcons = () => {
  return (
    <div className='w-full mt-10'>
      <div className=' text-[#E34234]  w-28 justify-between flex  text-base'>
        <a href="https://twitter.com/dragg54" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com/in/ajibola-ayobami-50260a209" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/dragg54" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </div>

  )
}

export default MediaIcons