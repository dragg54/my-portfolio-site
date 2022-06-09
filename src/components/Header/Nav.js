import React from 'react'

function Nav() {
  return (
    <div className='flex items-center'>
        <div className='h-16 w-16 border-4  border-[#04D010] rounded-full mr-2 object-contain overflow-hidden transform -rotate-45 [box-shadow-2px 2px 2px green]'><img src="../../../images/profilepic.JPG" alt="img" /></div>
        <h1 className='font-[lobster] text-[#04D010] text-xl'> J.B</h1>
    </div>
  )
}

export default Nav