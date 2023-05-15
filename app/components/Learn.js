import React from "react";

import Image from "next/image";
import { FcOk } from "react-icons/fc";
import { allProjects } from "@/datas/projects";

const Learn = () => {
  return (
    <div className="py-[70px] md:py-[80] lg:py-[100px]">
      <div className="max-w-[1250px] mx-auto px-5 w-full">
        {/* Title Section */}
        <h2 className="pb-10 text-2xl font-black text-center sm:text-3xl md:text-4xl">
          What you will learn
        </h2>

        <div>
          {allProjects.map((sg, index) => {
            return (
              <div
                className="grid items-center grid-cols-1 overflow-hidden md:grid-cols-2"
                key={index}
              >
                {/* Left Section */}
                <div
                  data-aos="fade-left"
                  data-aos-offset="100"
                  data-aos-easing="linear"
                  data-aos-duration={500}
                  className={`${
                    index % 2 !== 0 && "md:order-1"
                  } h-full p-5 rounded-md flex items-center justify-center`}
                >
                  <Image
                    src={sg.image}
                    className="w-full h-auto"
                    width="0"
                    height="0"
                    alt=""
                  />
                </div>

                {/* Right Section */}
                <div
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="linear"
                  data-aos-duration={500}
                >
                  <div className="py-[60px] md:py-[80px] lg:py-[100px] space-y-5">
                    <h5 className="text-2xl font-bold sm:text-3xl">
                      {sg.name}
                    </h5>
                    <p className="md:text-[18px]">{sg.description}</p>
                    <ul>
                      <li className="pb-2 text-xl font-bold underline">
                        Highhlights
                      </li>
                      {sg.allPoints.map((single, index) => {
                        return (
                          <div className="text-xl" key={index}>
                            <p className="flex items-center py-2 space-x-2">
                              <span className="">
                                <FcOk />
                              </span>
                              <span>{single}</span>
                            </p>
                          </div>
                        );
                      })}
                    </ul>
                    {/* <div>
                      <Link
                        href={sg.link}
                        className="font-bold px-8 py-3 bg-[#ff8811] rounded-full inline-block"
                      >
                        See it Live
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learn;
