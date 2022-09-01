import React from "react";
import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

const Team = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: "./assets/layers/cave/background1.png", speed: 0 },
        { image: "./assets/layers/cave/midleground1.png", speed: 5 },
        { image: "./assets/layers/cave/foreground_back1.png", speed: 10 },
        {
          speed: 0,
          children: (
            <div className="absolute top-18 right-0 left-0 ">
              <div className="container px-24 py-24 mx-auto">
                <section className="text-gray-600 body-font">
                  <div className="">
                    <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="aos-init font-mono mb-4 text-4xl text-center leading-normal tracking-tighter text-white lg:leading-tight lg:text-6xl aos-animate">
                        OUR TEAM
                      </h1>
                      <p className="lg:w-2/3 mx-auto py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
                        The best Zombies built this project, meet and follow
                        each one!
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ),
        },
        { image: "./assets/layers/cave/foreground1.png", speed: 15 },
      ]}
      style={{
        aspectRatio: "16/9",
        width: "100%",
        height: "100%",
        overflow: "normal",
      }}
    >
      <div className="absolute top-52 bottom-0 right-0 left-0 ">
        <div className="container px-24 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/6 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="../assets/leaders/guixel.png"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl text-green-100">
                    Guixel
                  </h2>
                  <h3 className="text-white mb-3">
                    Pixel <br />
                    Artist
                  </h3>
                  <span className="inline-flex">
                    <a
                      href="https://twitter.com/_guixel"
                      className="text-white"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/6 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="../assets/leaders/vitagliano.png"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl text-green-100">
                    Vitagliano
                  </h2>
                  <h3 className="text-white mb-3">
                    Front-end
                    <br />
                    Developer
                  </h3>
                  <span className="inline-flex">
                    <a
                      href="https://twitter.com/Vitagliano"
                      className="text-white"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/6 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="../assets/leaders/kinash.png"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl text-green-100">
                    Kinash
                  </h2>
                  <h3 className="text-white mb-3">Smart Contract Developer</h3>
                  <span className="inline-flex">
                    <a
                      href="https://twitter.com/gabrielkinash"
                      className="text-white"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/6 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="../assets/leaders/kurei.png"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl text-green-100">
                    Kurei
                  </h2>
                  <h3 className="text-white mb-3">
                    Smart Contract and Front-end Developer
                  </h3>
                  <span className="inline-flex">
                    <a
                      href="https://twitter.com/darkside_dao"
                      className="text-white"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/6 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="../assets/leaders/miles_muso.png"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl text-green-100">
                    Miles Muso
                  </h2>
                  <h3 className="text-white mb-3">
                    Marketing
                    <br />
                    Support
                  </h3>
                  <span className="inline-flex">
                    <a
                      href="https://twitter.com/milesmuso"
                      className="text-white"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/6 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="../assets/leaders/ein_spiegel.png"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl text-green-100">
                    Atomhed
                  </h2>
                  <h3 className="text-white mb-3">
                    Lore Writer <br />
                    and Musician
                  </h3>
                  <span className="inline-flex">
                    <a
                      href="https://twitter.com/EinSpiegel2044"
                      className="text-white"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Team;
