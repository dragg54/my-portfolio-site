import React from 'react'
import Header from '../Header/Header'
import MediaIcons from '../mediaIcons/MediaIcons'


export const Hero = () => {
  return (
    <div className="h-[550px] w-full bg-gradient-to-r from-[#323432] to-black  px-6 pt-6 ">
      <Header className="" />
      <div className='px-4'>

      <div className="w-full mx-auto">
        <p className="text-gray-400 mb-1 font-[POPPINS] font-bold text-sm">
          I AM
        </p>
        <h1 className="text-6xl font-black text-[#04D010] font-[Righteous]">
          SADIQ AJIBOLA
        </h1>
        <p className="text-sm text-gray-400 font-[Poppins] font-bold">
          FRONTEND DEVELOPER.
        </p>
      </div>
      <button className="text-[10px] border border-[#04D010] px-8 py-2 text-[#04D010] mt-6">
        CONTACT ME
      </button>
      <MediaIcons />
      </div>
    </div>
  );
};
