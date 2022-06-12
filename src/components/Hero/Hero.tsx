import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import MediaIcons from "../mediaIcons/MediaIcons";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

export const Hero: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (null !== navRef.current && null !== scrollRef.current) {
      if (isOpen) {
        navRef.current.style.right = "0px"
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
    <BrowserRouter>
      <div className="h-[580px] w-full bg-gradient-to-r from-[#323432] to-black  px-6 pt-6 relative md:h-[640px] md:px-12">
        <Header clickMe={handleOpen} />
        <div data-aos="fade-up" data-aos-duration="2000" className="px-4 md:px-10 lg:px-16 xl:px-36">
            <p className="text-gray-400 font-[POPPINS]  text-sm ml-10 md:text-base font-bold">
              I AM
            </p>
            <h1 className="text-[4rem] leading-[4.1rem] font-black text-[#E34234] font-[Luckiest Guy] sm:text-[4.8rem] sm:leading-[4.6rem] md:text-[5.6rem] md:leading-[5rem] lg:text-[6.1rem]">
              SADIQ AJIBOLA.
            </h1>
            <p className="text-base font-bold text-gray-400 font-[Poppins] w-3/4 mt-2 sm:w-3/5 md:mt-4 md:text-xl">
              A FRONTEND DEVELOPER.
            </p>
            <p className="text-sm text-gray-400 font-[Poppins] w-4/5 mt-4 sm:w-3/5 md:mt-4 md:w-[300px] md:text-base">
             Highly skilled in the development of the frontend compositions of a website. 
            </p>
          <MediaIcons />
        </div>
        <div className="flex justify-end w-full mt-10">
          <div className='flex flex-col justify-between items-center w-6 h-20 animate-bounce' ref={scrollRef}>
            <p className='transform rotate-90 text-[#E34234] text-[0.6rem]' >SCROLL</p>
            <div className='h-10 w-[1px] bg-[#E34234]'></div>
          </div>
        </div>
        <div className="  h-full w-2/3 bg-[#323432] absolute top-0 hidden  right-[-600px] px-6 pt-6 font-[poppins] transition-right duration-[5s] ease-in-out " ref={navRef}>
          <button className="text-[#E34234] text-[1.5rem] mt-6" onClick={handleOpen}><AiOutlineClose /></button>
          <div className="text-[#E34234] mt-10 text-xl w-full flex flex-col items-center">
            <p className="mt-4" onClick={handleOpen}><Link to="#about"> About</Link></p>
            <p className="mt-5" onClick={handleOpen}><Link to="#skills"> Skills</Link></p>
            <p className="mt-5" onClick={handleOpen}><Link to="#projects"> Projects</Link></p>
            <p className="mt-5" onClick={handleOpen}><Link to="#contact"> Contact</Link></p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
