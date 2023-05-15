"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Certificate from "../../public/images/certificate.png";
import { FcOk } from "react-icons/fc";

const GetCertified = () => {
  return (
    <>
      <div className="min-h-[85vh] flex items-center bg-indigo-200 py-12">
        <div className="max-w-[1250px] mx-auto px-5 w-full">
          {/* Title Section */}
          <div className="pb-10 space-y-3 text-center">
            <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">
              Get Certified
            </h2>
            <p>
              Yes! you will be certified for this course once you submit <br />{" "}
              your assignments and final project.
            </p>
          </div>
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Right Section */}
            <div
              className=""
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="linear"
              data-aos-delay={200}
              data-aos-duration={500}
            >
              <div className="">
                <Image
                  src={Certificate}
                  alt="Bishowraj"
                  width={"0"}
                  height={"0"}
                  className=" h-auto w-[100%] object-cover rounded-md"
                ></Image>
              </div>
            </div>
            {/* Left Section */}
            <div className="space-y-8">
              <ul>
                <li className="pb-2 text-xl font-bold underline">
                  Highhlights
                </li>
                {[
                  "Official and verified",
                  "Easily Sharable",
                  "Enhances Credibility",
                ].map((single, index) => {
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCertified;
