import React from "react";
import Link from "next/link";

import { ParallaxBanner } from "react-scroll-parallax";
import MintSection from "./Mint";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: "./assets/layers/sky_top.png", speed: -10 },
        { image: "./assets/layers/sky_mid.png", speed: -5 },
        { image: "./assets/layers/sky_bot.png", speed: -1 },
        { image: "./assets/layers/stars.png", speed: 1 },
        { image: "./assets/layers/grass_back.png", speed: 10 },
        { image: "./assets/layers/grass_mid.png", speed: 15 },
        { image: "./assets/layers/grass_front.png", speed: 20 },
        { image: "./assets/layers/dirt_mid.png", speed: 20 },
        { image: "./assets/layers/dirt_bot.png", speed: 30 },
      ]}
      style={{
        aspectRatio: "16/9",
        width: "100%",
        height: "190vh",
        overflow: "normal",
      }}
    >
      <div className="z-50 absolute inset-0 mx-auto mt-16">
        <Navbar />
        <div className="z-90 absolute right-0 left-0 flex items-center justify-center mt-12">
          <MintSection />
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Hero;
