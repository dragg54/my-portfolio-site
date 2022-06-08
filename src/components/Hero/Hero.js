import React from 'react'
import Header from '../Header/Header'
import MediaIcons from '../mediaIcons/MediaIcons'


export const Hero  = () => {
  return (
    <div className="h-[500px] w-full bg-gradient-to-r from-[#0C1446] to-blue-900  px-6 pt-6 ">
        <Header />
        <div className='w-full mx-auto'>
        <p className='text-gray-400 mb-1 font-[POPPINS] font-bold text-sm'>I AM</p>
        <h1 className='text-6xl font-black text-[#E34234] font-[Righteous]'>SADIQ AJIBOLA</h1>
        <p className='text-sm text-gray-400 font-[Poppins] font-bold'>FRONTEND DEVELOPER.</p>
        </div>
        <button className='text-[10px] border border-[#E34234] px-8 py-2 text-[#E34234] mt-6'>CONTACT ME</button>
        <MediaIcons />
    </div>
  )
}
