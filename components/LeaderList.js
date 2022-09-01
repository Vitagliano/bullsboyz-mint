import React from "react";
const LeaderList = () => {
  return (
    <section>
      <div className="rounded-xl p-44 py-12 mb-12 mx-auto flex flex-wrap">
        <div>
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  VR
                </span>
              </a>
              <a
                href="#"
                className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  Tech
                </span>
              </a>

              <a
                href="#"
                className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  Dev
                </span>
              </a>

              <a
                href="#"
                className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  Retro
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="container rounded-xl px-44 py-12 mb-12 mx-auto flex flex-wrap"> */}
        <div className="flex flex-row md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-6 p-4 w-1/2">
              <img
                alt="gallery"
                className="leader-frame w-full object-cover h-full object-center block"
                src="/assets/leaders/kinash.png"
              />
            </div>
            <div className="md:p-6 p-4 w-1/2">
              <img
                alt="gallery"
                className="leader-frame w-full object-cover h-full object-center block"
                src="/assets/leaders/vitagliano.png"
              />
            </div>
            <div className="md:p-6 p-4 w-full">
              <img
                alt="gallery"
                className="leader-frame w-full h-full object-cover object-center block"
                src="/assets/leaders/ein_spiegel.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-6 p-4 w-full">
              <img
                alt="gallery"
                className="leader-frame w-full h-full object-cover object-center block"
                src="/assets/leaders/miles_muso.png"
              />
            </div>
            <div className="md:p-6 p-4 w-1/2">
              <img
                alt="gallery"
                className="leader-frame w-full object-cover h-full object-center block"
                src="/assets/leaders/guixel.png"
              />
            </div>
            <div className="md:p-6 p-4 w-1/2">
              <img
                alt="gallery"
                className="leader-frame w-full object-cover h-full object-center block"
                src="/assets/leaders/kurei.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderList;
