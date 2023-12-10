import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  return (
    <div id="Projects">
      <div className=" flex flex-col gap-3 text-center items-center justify-center mt-5 ">
        <h1 className=" flex items-center justify-center py-2 uppercase font-bold font-[DMSerifDisplay] text-2xl border-b-2  border-[#5651e5]">
          projects
        </h1>
      </div>
      <div>
        <VerticalTimeline className=" rounded-full text-gray-500">
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: "",
              color: "",
              borderRadius: "15px",
              padding: "0px",
              // width: "100px",
            }}
            contentArrowStyle={{ padding: "0px" }}
            lineColor={"rgb(86, 81, 229)"}
            // date="2011 - present"
            iconStyle={{ background: "	rgb(86, 81, 229)" }}
            // icon={<WorkIcon />}
          >
            <div className="flex items-center justify-center gap-3 p-4 ">
              {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
              <img
                src="/netflix.jpg"
                alt={`Image `}
                class=" rounded shadow-xl shadow-slate-200 w-[100px] h-[100px]  md:w-[200px] md:h-[200px]"
                // style={{ width: "200px", height: "200px" }}
              />
              <div>
                {" "}
                <h1 className=" font-bold font-[DMSerifDisplay] text-lg md:text-3xl">
                  Movies application
                </h1>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, dicta!
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: "",
              color: "",
              borderRadius: "15px",
              padding: "0px",
              // width: "200px",
            }}
            contentArrowStyle={{ padding: "0px" }}
            lineColor={"rgb(86, 81, 229)"}
            // date="2011 - present"
            iconStyle={{ background: "	rgb(86, 81, 229)" }}
            // icon={<WorkIcon />}
          >
            <div className="flex items-center justify-center gap-3 p-4">
              {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
              <img
                src="/twitch.jpg"
                alt={`Image `}
                class=" rounded shadow-xl shadow-slate-200 w-[100px] h-[100px]  md:w-[200px] md:h-[200px]"
                // style={{ width: "200px", height: "200px" }}
              />
              <div>
                {"  "}
                <h1 className="font-bold font-[DMSerifDisplay] text-xl md:text-3xl">
                  Twitch website
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, dicta!
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: "",
              color: "",
              borderRadius: "15px",
              padding: "0px",
              // width: "200px",
            }}
            contentArrowStyle={{ padding: "0px" }}
            lineColor={"rgb(86, 81, 229)"}
            // date="2011 - present"
            iconStyle={{ background: "	rgb(86, 81, 229)" }}
            // icon={<WorkIcon />}
          >
            <div className="flex items-center justify-center gap-3 p-4">
              {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
              <img
                src="/property.jpg"
                alt={`Image `}
                class=" rounded shadow-xl shadow-slate-200 w-[100px] h-[100px]  md:w-[200px] md:h-[200px]"
                // style={{ width: "200px", height: "200px" }}
              />
              <div>
                {" "}
                <h1 className="font-bold font-[DMSerifDisplay] text-xl md:text-3xl">
                  Property application
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, dicta!
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: "",
              color: "",
              borderRadius: "15px",
              padding: "0px",
              // width: "200px",
            }}
            contentArrowStyle={{ padding: "0px" }}
            lineColor={"rgb(86, 81, 229)"}
            // date="2011 - present"
            iconStyle={{ background: "	rgb(86, 81, 229)" }}
            // icon={<WorkIcon />}
          >
            <div className="flex items-center justify-center gap-3 p-4">
              {/* <h3 className="vertical-timeline-element-title">Creative Director</h3> */}
              <img
                src="/crypto.jpg"
                alt={`Image `}
                class="rounded shadow-xl shadow-slate-200 w-[100px] h-[100px]  md:w-[200px] md:h-[200px] "
                // style={{ width: "100px", height: "200px" }}
              />
              <div>
                {" "}
                <h1 className="font-bold font-[DMSerifDisplay]text-xl md:text-3xl">
                  Crypto application
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, dicta!
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Projects;
