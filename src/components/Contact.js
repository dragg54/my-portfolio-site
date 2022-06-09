import React from "react";

const Contact = () => {
  return (
    <div className="h-[800px] w-full bg-[#323432] px-10 py-10">
      <h1 className="text-4xl font-black text-gray-300 mb-1 whitespace-nowrap flex ">
        <span className="mr-2">CONTACT ME</span>
      </h1>
      <div className="w-7 transform skew-x-45 h-1 bg-[#04D010] mb-4"></div>
      <p className="text-gray-300 font-[poppins] mt-6">
        You can contact me by filling the below and submitting me. I will surely
        get back to you.
      </p>
      <div className="bg-white h-[600px] w-full mt-8 font-[poppins]">
        <form action="" className="px-4 py-6 w-full">
          <label htmlFor="name" className="text-[#04D010]">
            Your name
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="name"
            className="border-[#323432] w-full mt-4 border-b bg-gray-300 border-r outline-none pb-1 px-2 text-base shadow-[1px_1px_1px_1px_gray] mb-6"
          />
          <br />

           <label htmlFor="phone" className="text-[#04D010]">
            Your phone
          </label>
          <br />
          <input
            type="text"
            placeholder="phone"
            name="phone"
            className="border-[#323432] w-full mt-6 border-b bg-gray-300 border-r outline-none pb-1 px-2 text-base shadow-[1px_1px_1px_1px_gray] mb-6"
          />

           <label htmlFor="name" className="text-[#04D010] mt-6">
            Email
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="email"
            className="border-[#323432] w-full mt-4 border-b bg-gray-300 border-r outline-none pb-1 px-2 text-base shadow-[1px_1px_1px_1px_gray] mb-6"
          />

           <label htmlFor="name" className="text-[#04D010] mt-6">
            Message
          </label>{" "}
          <br />
          <input
            type="text"
            className="border-[#323432] w-full h-28 mt-4 border bg-gray-300 border-r outline-none pb-1 px-2 text-base shadow-[1px_1px_1px_1px_gray] mb-6"
          />
         <div className="flex justify-end w-full"><input type="submit" className="text-sm px-4 py-2 bg-[#323432] text-gray-300 shadow-[1px_1px_1px_1px_gray] ml-[]"/></div> 
        </form>
      </div>
    </div>
  );
};

export default Contact;
