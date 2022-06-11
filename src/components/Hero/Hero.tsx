import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import MediaIcons from "../mediaIcons/MediaIcons";
import { AiOutlineClose } from "react-icons/ai";

export const Hero: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (null !== navRef.current && null !==scrollRef.current) {
      if (isOpen) {
        navRef.current.style.right = "-100px"
        navRef.current.style.display = "block"
        scrollRef.current.style.opacity = "0" 

      }
      else {
        navRef.current.style.right = "-500px"
        navRef.current.style.display = "none"
        scrollRef.current.style.opacity = "100" 
      }
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="h-[550px] w-full bg-gradient-to-r from-[#323432] to-black  px-6 pt-6 relative">
      <div className="h-full w-full bg-[#323432] absolute top-0 hidden  right-[-600px] px-6 pt-6 transition-[right] ease-linear" ref={navRef}>
        <button className="text-[#E34234] text-[1.5rem] mt-6" onClick={handleOpen}><AiOutlineClose /></button>
      </div>
      <Header clickMe={handleOpen} />
      <div className="px-4">
        <div className="w-full mx-auto">
          <p className="text-gray-300 font-[POPPINS] font-bold text-sm ml-12">
            I AM
          </p>
          <h1 className="text-[4rem] leading-[4.1rem] font-black text-[#E34234] font-[Luckiest Guy] ">
            SADIQ AJIBOLA
          </h1>
          <p className="text-sm text-gray-300 font-[Poppins] font-bold">
            A FRONTEND DEVELOPER.
          </p>
        </div>
        <MediaIcons />
      </div>
      <div className="flex justify-end w-full mt-10">
        <div className='flex flex-col justify-between items-center w-6 h-20 animate-bounce' ref={scrollRef}>
          <p className='transform rotate-90 text-[#E34234] text-[0.6rem]' >SCROLL</p>
          <div className='h-10 w-[1px] bg-[#E34234]'></div>
        </div>
      </div>
    </div>
  );
};
