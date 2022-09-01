import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ShowZombies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="">
      <div className="container mx-auto py-12 pb-16 relative px-5 lg:px-0">
        <div className="grid grid-cols-12 gap-6 2xl:ml-56 2xl:-mr-56 mb-8">
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="100"
          >
            <img
              src="assets/zombies/1.png"
              className="w-full object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #1
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
          >
            <img
              src="assets/zombies/2.png"
              className="w-full object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #2
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="300"
          >
            <img
              src="assets/zombies/14.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #14
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-duration="400"
          >
            <img
              src="assets/zombies/31.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #31
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img
              src="assets/zombies/41.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #41
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init"
            data-aos="fade-right"
            data-aos-offset="600"
            data-aos-duration="600"
          >
            <img
              src="assets/zombies/48.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #48
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 2xl:mr-52 2xl:-ml-52">
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="100"
          >
            <img
              src="assets/zombies/92.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #92
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="200"
          >
            <img
              src="assets/zombies/114.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #114
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="300"
          >
            <img
              src="assets/zombies/119.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #119
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-duration="400"
          >
            <img
              src="assets/zombies/133.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #133
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img
              src="assets/zombies/165.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #165
            </div>
          </div>
          <div
            className="col-span-6 sm:col-span-4 lg:col-span-2 aos-init"
            data-aos="fade-left"
            data-aos-offset="600"
            data-aos-duration="600"
          >
            <img
              src="assets/zombies/194.png"
              className="w-full xl:h-51 object-cover rounded-lg"
              alt=""
            />
            <div className="text-white bg-brown-200 rounded-lg p-2 text-center mt-3">
              Zombie #194
            </div>
          </div>
        </div>
        <span id="rarity">&nbsp;</span>
      </div>
    </div>
  );
};

export default ShowZombies;
