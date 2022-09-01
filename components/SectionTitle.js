import React from "react";

const SectionTitle = (props) => {
  return (
    <div
      className={`flex w-full flex-col mt-4 px-0 pb-0 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.subtitle && (
        <div className="text-sm font-semibold tracking-wider text-green-100">
          {props.subtitle}
        </div>
      )}

      {props.title && (
        <h2 className="font-mono max-w-2xl mt-3 text-4xl  leading-normal tracking-tighter text-white lg:leading-tight lg:text-6xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="py-5 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
