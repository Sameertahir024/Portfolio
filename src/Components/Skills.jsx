import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Skills = () => {
  const images = [
    {
      logo: "/javascript.png",
      tittle: "javascript",
    },
    {
      logo: "/react.png",
      tittle: "reactjs",
    },
    {
      logo: "/nextjs.png",
      tittle: "nextjs",
    },
    {
      logo: "/node.png",
      tittle: "nodejs",
    },
    {
      logo: "/mongo.png",
      tittle: "mongoDB",
    },
    {
      logo: "/github1.png",
      tittle: "github",
    },
    {
      logo: "/solidity.png",
      tittle: "solidity",
    },
    {
      logo: "/tailwind.png",
      tittle: "tailwind",
    },

    // Add more image URLs as needed
  ];

  return (
    <div id="Skills" className="max-w-[1150px] mx-auto p-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <div key={index}>
                  <img
                    src={image.logo}
                    alt={`Image ${index + 1}`}
                    class="  "
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>{image.tittle}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
