import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <h1 className="flex items-center justify-center py-6 uppercase font-bold font-[DMSerifDisplay] text-2xl border-b-2  border-gray-500">
        {" "}
        contact us
      </h1>

      <div className="flex flex-col items-center justify-center gap-6 mt-4">
        <div className="flex flex-col gap-2 text-center">
          <h1>
            <span className="uppercase">email</span> : sameertahir024@gmail.com
          </h1>
          <h1>
            <span className="uppercase">whattsup</span> : +923002727314
          </h1>
        </div>
        <div className="flex gap-7 mb-3 ">
          <div className=" text-2xl cursor-pointer hover:scale-110 ease-in duration-300">
            <FaLinkedinIn />
          </div>
          <div className=" text-2xl cursor-pointer hover:scale-110 ease-in duration-300">
            <FaGithub />
          </div>
          <div className=" text-2xl cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineMail />
          </div>
          <div className=" text-2xl cursor-pointer hover:scale-110 ease-in duration-300">
            <BsFillPersonLinesFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
