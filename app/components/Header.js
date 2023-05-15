"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Bishowraj from "../../public/images/bishworaj.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="min-h-[85vh] bg-gray-800 flex items-center text-gray-100 py-12">
        <div className="max-w-[1250px] mx-auto px-5 w-full">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Section */}
            <div className="space-y-8">
              <h1
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="linear"
                data-aos-duration={500}
                className="text-3xl md:text-4xl lg:text-4.5xl"
              >
                Kickstart your journey as a{" "}
                <span className="font-black">
                  Wordpress Developer with 10 Days Course !
                </span>
              </h1>

              <p
                className="text-[16px] md:text-[18px] lg:text-[19px] text-gray-400"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="linear"
                data-aos-delay={100}
                data-aos-duration={500}
              >
                At Techmandu Computer, we bring your digital vision to life with
                cutting-edge technology and customized solutions that meet your
                unique needs.
              </p>
              {/* Buttons */}
              <div
                className="space-x-2"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="linear"
                data-aos-delay={200}
                data-aos-duration={500}
              >
                <button className="px-8 py-3 font-bold uppercase bg-red-500 border border-red-500 hover:scale-105 hover:bg-red-600 rounded-xl text-[18px] transition-all">
                  Take me to the Course
                </button>
                {/* <button className="px-8 py-3 text-gray-100 border border-gray-100 rounded-full">
                  Join Us
                </button> */}
              </div>
            </div>

            {/* Right Section */}
            <div
              className="-order-1 md:order-1"
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="linear"
              data-aos-delay={200}
              data-aos-duration={500}
            >
              <div className="">
                <Image
                  src={Bishowraj}
                  alt="Bishowraj"
                  width={"0"}
                  height={"0"}
                  className=" h-auto w-[100%] object-cover rounded-md"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
