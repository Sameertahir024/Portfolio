import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Partical from "./Partical/partical";

const Hero = () => {
  return (
    <>
      <Partical />
      <div className=" w-full h-screen flex flex-col items-center justify-center text-gray-500 gap-5 text-center p-10">
        <p className="text-xl text-gray-500">LETS BUILD SOMETHING TOGETHER</p>

        <h1 className="text-xl">
          Hi, I&#39;m{" "}
          <span className="text-[#5651e5] text-5xl font-extrabold font-[DMSerifDisplay]">
            Muhammad Sameer
          </span>
        </h1>
        <h1 className="text-2xl">A Full stack Developer</h1>
        <p className="text-xl text-center">
          I’m focused on building responsive front-end <br /> web applications
          integrating back-end technologies.
        </p>
        <div className="flex gap-6">
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaGithub />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineMail />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
            <BsFillPersonLinesFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
