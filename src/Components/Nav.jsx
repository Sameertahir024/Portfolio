import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  ////////////////////////////////
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-12 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-12 z-[100]"
      }
    >
      <div className="flex justify-between items-center  w-full h-full px-10 2xl:px-16  ">
        <div>
          {" "}
          <img
            src="/sam.jpg"
            alt={`Image `}
            class=" rounded-[50%] cursor-pointer outline outline-indigo-200 outline-offset-2 "
            style={{ width: "38px", height: "38px" }}
          />
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-blue-700">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-blue-700">
              {" "}
              <NavLink to="/#Skills">SKILLS</NavLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-blue-700">
              {" "}
              <NavLink to="/#Services">SERVICES</NavLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-blue-700">
              <NavLink to="/#projects">PROJECTS</NavLink>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* <Image
                src={"/./assets/navLogo.png"}
                width="10"
                height="10"
                alt="/"
              /> */}

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Home
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                About
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Skills
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Projects
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Resume
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Contact
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>

                <div
                  onClick={() => setNav(!nav)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <AiOutlineMail />
                </div>

                <div
                  onClick={() => setNav(!nav)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
