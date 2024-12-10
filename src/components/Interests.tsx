import React from 'react'

export const Interests = () => {
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="2000" className='w-full h-[960px] bg-[#E34234] py-8 px-8 md:p-14 md:h-[600px] xl:h-[700px]'>
      <h1 className='text-3xl text-gray-200 font-[roboto] text-center'>WHAT I DO?</h1>
      <div className='md:flex justify-center'>

      <div className='h-96 bg-gray-200 rounded-t-[20px] mt-6 py-2 px-4 shadow-[2px_2px_4px_gray] md:mr-4 md:h-[450px] md:px-8'>
        <h1 className='text-center font-[roboto] text-gray-700 mt-6 text-xl'>Web Development</h1>
        <div className='flex justify-center mt-6'><img src="../../images/web developer.png" alt="" className='h-48 w-48 md:h-[210px] md:w-[210px]'/></div>
        <p className='text-sm text-gray-700 text-left font-[poppins]'>I develop web applications that conform with required users' experience and functionality.</p>
      </div>

      <div className='h-96 bg-gray-300 rounded-t-[20px] mt-6 py-2  shadow-[2px_2px_4px_gray] px-4 md:h-[450px] md:px-8'>
        <h1 className='text-center font-[roboto] text-gray-700 mt-6 text-xl'>Technical Writing</h1>
        <div className='flex justify-center mt-6'><img src="../../images/writing.png" alt="" className='h-48 w-48 md:h-[210px] md:w-[210px]'/></div>
        <p className='text-sm text-gray-700 text-left font-[poppins] mt-4'>Sometimes, i enjoy writing about technologies and tools relating to web development.</p>
      </div>
    </div>
      </div>
    </>
  )
}
