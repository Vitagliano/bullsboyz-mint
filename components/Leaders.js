import React from "react";
import Link from "next/link";
import Slides from "./Slides";
import { ParallaxBanner } from "react-scroll-parallax";
import Section from "./Section";
const Leaders = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: "./assets/layers/cave/background1.png", speed: 0 },
        { image: "./assets/layers/cave/midleground1.png", speed: 5 },
        { image: "./assets/layers/cave/foreground_back1.png", speed: 10 },
        { image: "./assets/layers/cave/foreground1.png", speed: 15 },
      ]}
      style={{
        aspectRatio: "16/9",
        width: "100%",
        height: "100%",
        overflow: "normal",
      }}
    >
      <div className="absolute right-0 left-0 ">
        <div>
          <Section img="/assets/leaders.png">
            <div className="text-sm font-semibold tracking-wider text-green-100">
              The most evolved
            </div>
            <h2 className="mb-6 font-mono mt-3 text-4xl leading-normal tracking-tighter text-white lg:leading-tight lg:text-6xl">
              Presenting the Zombie Leaders
            </h2>
            <p className="py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              In 2019 the Greenland Ice Sheet endured a record setting melt
              event.
            </p>
            <p className="py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              For more than ten hours trillions of gallons, enough to immerse
              California under 4 feet of water, poured into the ocean.
            </p>
            <p className="py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              Deep layers of ancient ice were exposed, and with them, an ancient
              pathogen set free from it's icy prison found refuge in the ocean
              currents.
            </p>
            <p className="py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              The first documented cases appeared the summer of 2021 in Narsaq,
              a small town in western Greenland located near Thule airbase.
            </p>
            <p className="pt-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              There exists anecdotal reports of a Danish soldier who disappeared
              while suffering from a strange illness, but they are unverified
              and the soldier's condition unidentified.
            </p>
          </Section>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Leaders;
