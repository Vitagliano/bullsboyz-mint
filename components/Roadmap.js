import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto py-10 relative">
      <h2
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-duration="100"
        className="aos-init aos-animate font-mono mb-6 text-4xl text-center leading-normal tracking-tighter text-white lg:leading-tight lg:text-6xl"
      >
        Roadmap
      </h2>
      <div className="grid grid-cols-12 justify-center ">
        <div className="col-span-12 lg:col-span-8 lg:col-start-2 item flex gap-14">
          <div
            className="bg-green-300 rounded-lg py-8 px-12 flex-1 relative aos-init aos-animates"
            data-aos="fade-right"
            data-aos-offset="110"
            data-aos-duration="110"
          >
            <span className="text-green-100 text-2xl block">
              Phase 01 | Completed
            </span>
            <div className="text-2xl text-grey mt-1">Where it all began</div>
            <div className="opacity-70 text-grey text-[14px]">
              - Collection spoilers <br />
              - Discord opening <br />
              - Roadmap <br />- Beginning of the Zombies story <br />- Giveaways
              with partners <br />- Site spoiler <br />- Whitelist opening
            </div>
            <img
              src="assets/virus.png"
              className="absolute -top-20 -left-11 z-[-9] w-32 h-32 hidden md:block aos-init aos-animate"
              alt="Virus"
              data-aos="fade-right"
              data-aos-offset="125"
              data-aos-duration="125"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 lg:col-start-4 item flex gap-14 py-3">
          <div
            className="bg-green-300 rounded-lg py-8 px-12 flex-1 relative aos-init aos-animates"
            data-aos="fade-left"
            data-aos-offset="110"
            data-aos-duration="110"
          >
            <span className="text-green-100 text-2xl block">
              Phase 02 | Completed
            </span>
            <div className="text-2xl text-grey mt-1">
              The zombie army took over the world
            </div>
            <div className="opacity-70 text-grey text-[14px]">
              - Whitelist Mint (Mint for 8 FTM) <br />- Giveaways with partners{" "}
              <br />- Update on collection history <br />- Public Mint <br />-
              Listing on marketplaces (NFTKey, OperaHouse)
            </div>
            <img
              src="assets/virus.png"
              className="absolute -top-20 -right-11 z-[-9] w-32 h-32 hidden md:block aos-init aos-animates"
              alt="Virus"
              data-aos="fade-left"
              data-aos-offset="125"
              data-aos-duration="125"
            />
          </div>
        </div>
        <div className="col-span-12  lg:col-span-8 lg:col-start-2 item flex gap-14">
          <div
            className="bg-green-300 rounded-lg py-8 px-12 flex-1 relative aos-init aos-animates"
            data-aos="fade-right"
            data-aos-offset="110"
            data-aos-duration="110"
          >
            <span className="text-green-100 text-2xl block">
              Phase 03 | We're here!
            </span>
            <div className="text-2xl text-grey mt-1">
              The feast of brains is served
            </div>
            <div className="opacity-70 text-grey text-[14px]">
              - $BRAIN airdrop to the Zombies
              <br />
              - Stake Zombies and earn $BRAIN
              <br />
              - Giveaways with partners
              <br />
              - Update on collection history
              <br />
              - Spoilers of the possibilities of $BRAIN
              <br />- Spoiler for the exclusive collection of 100 Space Zombies
            </div>
            <img
              src="assets/virus.png"
              className="absolute -top-20 -left-11 z-[-9] w-32 h-32 hidden md:block aos-init aos-animates"
              alt="Virus"
              data-aos="fade-right"
              data-aos-offset="125"
              data-aos-duration="125"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 lg:col-start-4 item flex gap-14 py-3">
          <div
            className="bg-green-300 rounded-lg py-8 px-12 flex-1 relative aos-init aos-animates"
            data-aos="fade-left"
            data-aos-offset="110"
            data-aos-duration="110"
          >
            <span className="text-green-100 text-2xl block">Phase 04</span>
            <div className="text-2xl text-grey mt-1">
              The universe is small for us
            </div>
            <div className="opacity-70 text-grey text-[14px]">
              - Release of the new collection website
              <br />
              - Mint of the 100 Special Zombies for $BRAIN <br />
              - Listing of the special collection on the marketplaces (NFTKey,
              OperaHouse, Paintswap)
              <br />- + to be announced...
            </div>
            <img
              src="assets/virus.png"
              className="absolute -top-20 -right-11 z-[-9] w-32 h-32 hidden md:block aos-init aos-animates"
              data-aos="fade-left"
              data-aos-offset="125"
              data-aos-duration="125"
              alt="Virus"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
