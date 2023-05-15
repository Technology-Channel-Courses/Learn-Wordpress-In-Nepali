import React from "react";
import { FcOk } from "react-icons/fc";
import { forWhomData } from "@/datas/forWhom";

const ForWhom = () => {
  return (
    <>
      <div className="py-[70px] md:py-[80] lg:py-[100px] bg-indigo-200">
        <div className="max-w-[1250px] mx-auto px-5 w-full">
          {/* Title Section */}
          <h2 className="pb-10 text-2xl font-black text-center sm:text-3xl md:text-4xl">
            Who is this for?
          </h2>

          <div className="text-center">
            {forWhomData.map((single, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="inline-block p-2">
                    <h3 className="flex items-center justify-center px-8 py-2 space-x-5 text-2xl font-bold text-gray-100 rounded-md bg-indigo-950">
                      <span>
                        <FcOk />
                      </span>
                      <span>{single.title}</span>
                    </h3>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForWhom;
