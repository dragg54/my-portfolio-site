import React, { FunctionComponent } from 'react'

const Nav:FunctionComponent=()=>{
  return (
    <div className='flex items-center'>
        <div className='h-16 w-16 border-4  border-[#E34234] rounded-full mr-2 object-contain overflow-hidden transform -rotate-45 [box-shadow-2px 2px 2px green]'><img src="../../../images/profilepic.JPG" alt="img" /></div>
        <h1 className='font-[lobster] text-[#E34234] text-xl'> J.B</h1>
    </div>
  )
}

export default Nav