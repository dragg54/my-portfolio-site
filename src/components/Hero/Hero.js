import React from 'react'
import Header from '../Header/Header'
import MediaIcons from '../mediaIcons/MediaIcons'

export const Hero  = () => {
  return (
    <div className="h-[460px] w-full bg-[#0C1446] px-6 pt-6">
        <Header />
        <h1 className='text-4xl font-black text-pink-700 font-[Righteous]'>Sadiq Ajibola</h1>
        <p className='text-sm text-pink-700 font-[Poppins]'>Frontend Developer.</p>
        <p className='text-gray-400 mt-6 text-xs'>Hello, and welcome to my portfolio site. My name is Sadiq Ajibola and I'm a very skilled and talented frontend developer, with knowledge of various technologies required to develop a good looking and fast websites.</p>
        <button className='text-[10px] bg-pink-700 px-4 py-3 text-white mt-10'>DOWNLOAD RESUME</button>
        <MediaIcons />
    </div>
  )
}
