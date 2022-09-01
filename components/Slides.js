import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="mt-12 mb-8 overflow-hidden mx-24">
      <Slider {...settings}>
        <div>
          <img src="/assets/zombies/1.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/2.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/14.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/31.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/41.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/48.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/92.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/114.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/119.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/133.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/165.png" className="w-64 h-64" />
        </div>
        <div>
          <img src="/assets/zombies/194.png" className="w-64 h-64" />
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
