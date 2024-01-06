"use client";
import React from "react";
import Slider from "react-slick";
import { Button } from "../ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Partner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    swipeToSlide: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024, // for tablets and larger devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    "/images/caro/ajinomoto.png",
    "/images/caro/anderson.png",
    "/images/caro/andrix.png",

    "/images/caro/cargill.png",
    "/images/caro/cj.png",
    "/images/caro/olmix.png",

    "/images/caro/quangminh.png",
    "/images/caro/tanlong.png",
    "/images/caro/van-aarsen.png",

    "/images/caro/w-bunge.png",
    "/images/caro/wilmar.jpg",
  ];

  return (
    <div className="bg-customGray px-3 lg:px-32 pt-44 pb-60">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-2/5">
          <h1 className="text-4xl font-bold pb-5">Our partners are spread around the world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus praesentium molestiae,
            dolor blanditiis veniam a placeat mollitia quidem dolores?
          </p>

          <Button>Contact Us</Button>
        </div>
        <div className="w-full lg:w-3/5 lg:ml-5">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="h-52">
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt={`Slide ${index}`}
                  className="object-contain px-2 w-62 h-40"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partner;
