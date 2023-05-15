import React from "react";
import Client1 from "../../public/images/testimonials/Client1.jpg";
import Client2 from "../../public/images/testimonials/Client2.jpg";
import Client3 from "../../public/images/testimonials/Client3.jpg";
import Client4 from "../../public/images/testimonials/Client4.jpg";
import Client5 from "../../public/images/testimonials/Client5.jpg";
import Image from "next/image";
import { testimonailsData } from "@/datas/testimonials";

const Testimonials = () => {
  return (
    <div className="py-[70px] md:py-[80] lg:py-[100px]">
      <div className="max-w-[1250px] mx-auto px-5 w-full">
        {/* Title Section */}
        <h2 className="pb-10 text-2xl font-black text-center sm:text-3xl md:text-4xl">
          What Students Says
        </h2>

        {/* Content Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonailsData.map((single, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="overflow-hidden text-gray-900 bg-gray-100 rounded-md"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="linear"
                  data-aos-duration={500}
                >
                  <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="">
                      <Image
                        src={single.img}
                        className="w-[100%] h-[100%] object-cover"
                        width="0"
                        height="0"
                        alt=""
                      />
                    </div>
                    <div className="px-5 py-10 space-y-5">
                      <h3 className="text-xl font-bold">{single.name}</h3>
                      <p>{single.testimonial}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
