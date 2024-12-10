import React from "react";
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <div className="h-[900px] w-full bg-[#323432] px-10 py-10 md:p-14 md:flex items-center md:24 flex-col" id="contact">
      <div>
      <h1 className="text-4xl font-black text-gray-300 mb-1 whitespace-nowrap flex ">
        <span className="mr-2 font-[Roboto]">CONTACT ME</span>
      </h1>
      <div className="w-7 transform skew-x-45 h-1 bg-[#E34234] mb-4"></div>
      </div>
      <p className="text-gray-300 font-[poppins] mt-6  md:w-4/5 lg:w-3/5"  data-aos="fade-up" data-aos-duration="1000">
        You can contact me by filling the form below and clicking the submit button. I will surely
        get back to you.
      </p>
      <div className="bg-white h-auto w-full mt-8 font-[poppins] w-auto rounded-md" >
        <form action="" className="px-4 py-6 w-full md:w-[400px] mx-auto">
          <label htmlFor="name" className="text-[#323432]">
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 w-full border-b bg-gray-300 border-r outline-none pb-1 px-2 text-base rounded-sm shodow-sm shadow-gray-400 mb-2 md:h-10"
          />
          <br />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            className="md:h-10 border border-gray-300 w-full  border-b bg-gray-300 border-r outline-none pb-1 px-2 text-base rounded-sm shodow-sm shadow-gray-400 mb-2"
          />

           <label htmlFor="name" className="text-[#323432] ">
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Email"
            className="md:h-10 border border-gray-300 w-full border-b bg-gray-300 border-r outline-none pb-1 px-2 text-base rounded-sm shodow-sm shadow-gray-400 mb-2"
          />

           <label htmlFor="name" className="text-[#323432]">
          </label>{" "}
          <br />
          <textarea
            cols = {12}
            rows = {6}
            placeholder="Message"
            className=" border-gray-300 p-3 w-full mt-2 border bg-gray-300 border-r outline-none pb-1 px-2 text-base rounded-sm shadow-md shadow-gray-300 mb-2"
          ></textarea>
         <div className="flex justify-end w-full ">
          <input type="submit" className="cursor-pointer text-sm px-4 py-2 bg-red-500 rounded-md text-white shadow-md shadow-red-300 ml-[]"/></div> 
        </form>
      </div>
    </div>
  );
};

export default Contact;
