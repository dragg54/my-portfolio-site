import React, { FunctionComponent, useState } from 'react'
import Nav from './Nav'
import { FiMenu } from 'react-icons/fi'

type HeaderProps = {
  clickMe: ()=>void
}

const Header:FunctionComponent<HeaderProps> = ({clickMe}:HeaderProps) => {
  return (
    <div className='mb-16 flex w-full justify-between animate-[fadeIn_linear_1s_infinite]'>
        <Nav />
        <button className='text-[#E34234] text-[1.5rem] }' onClick={clickMe}><FiMenu /></button>
        </div>
  )
}

export default Header