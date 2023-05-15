"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { allFaqs } from "datas/faqs";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Faqs = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="py-[70px] md:py-[80] lg:py-[100px]">
      <div className="max-w-[1250px] mx-auto px-5 w-full">
        {/* Title Section */}
        <h2 className="pb-10 text-2xl font-black text-center sm:text-3xl md:text-4xl">
          All Faqs
        </h2>

        {/* Mapping */}
        <div className="mx-auto max-w-[1000px] pt-10">
          {allFaqs.map((singleFaq) => {
            return (
              <Accordion
                open={open === singleFaq.id}
                icon={<Icon id={singleFaq.id} open={open} />}
                key={singleFaq.id}
                className="px-5 py-2 mb-2 rounded-md shadow-sm bg-indigo-50"
              >
                <AccordionHeader
                  className="text-[1.2rem] font-bold border-none"
                  onClick={() => handleOpen(singleFaq.id)}
                >
                  {singleFaq.question}
                </AccordionHeader>
                <AccordionBody className="leading-[26px]">
                  {singleFaq.answer}
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
