import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

const Section = (props) => {
  const { subtitle, title, desc, button, buttonUrl, img, position } = props;

  return (
    <div className="container flex">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          position === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          {img && (
            <Image
              src={img}
              width="500"
              height="500"
              alt={title}
              className="rounded-xl"
            />
          )}
        </div>
      </div>
      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          position === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="">
            <SectionTitle align="left" subtitle={subtitle} title={title}>
              {desc}
            </SectionTitle>
            <p className="py-5 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              {props.children}
            </p>
            {button && (
              <div className="mt-4">
                <a
                  href={buttonUrl}
                  className="bg-green-100 hover:bg-green-200 transition-all duration-500 ease-in-out rounded-2xl text-black  py-3 px-7  text-base leading-6"
                >
                  {button}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
