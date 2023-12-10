import React from "react";

const Services = () => {
  return (
    <div id="Services" className="max-w-[1000px] mx-auto p-10 mt-20  ">
      <div className=" flex flex-col gap-3 text-center items-center justify-center">
        <h1 className=" flex items-center justify-center py-2 uppercase font-bold font-[DMSerifDisplay] text-2xl border-b-2  border-[#5651e5]">
          services
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dicta?
        </p>
      </div>
      <div className=" grid  md:grid-cols-3 gap-7 mt-12 text-slate-500">
        <div className="rounded-xl flex flex-col items-center justify-center text-center  md:text-start md:items-start hover:shadow-md p-3  ">
          <img src="/1.png" alt="" style={{ width: "80px", height: "80px" }} />
          <h1 className="font-bold font-[DMSerifDisplay] py-3"> FRONTEND</h1>
          <p>
            I craft user-centric web experiences, employing technologies like
            JavaScript I create responsive layouts and collaborate to build
            seamless, visually engaging websites that elevate user engagement.
          </p>
        </div>
        <div className=" rounded-xl flex flex-col items-center justify-center text-center md:text-start md:items-start hover:shadow-md p-3">
          <img src="/3.png" alt="" style={{ width: "80px", height: "80px" }} />
          <h1 className="font-bold font-[DMSerifDisplay] py-3">BACKEND</h1>
          <p>
            I architect and build robust server-side systems using languages
            like Node.js. I design efficient databases, develop APIs, ensure
            data security, and optimize performance, enabling scalable and
            reliable applications to thrive.
          </p>
        </div>
        <div className=" rounded-xl flex flex-col items-center justify-center text-center md:text-start md:items-start hover:shadow-md p-3 ">
          <img src="/2.png" alt="" style={{ width: "80px", height: "80px" }} />
          <h1 className="font-bold font-[DMSerifDisplay] py-3">FULL STACK</h1>
          <p>
            I engineer end-to-end solutions, combining frontend expertise with
            backend proficiency. I develop resilient server systems, integrate
            databases delivering comprehensive, high-performance web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
