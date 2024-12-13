"use client";
import React from "react";
import Slider from "react-slick";
import { Button } from "../ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Partner = () => {
  const t = useTranslations("partner");

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    arrows: true,
    swipeToSlide: true,
    variableWidth: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const partners = [
    { src: "/images/caro/ajinomoto.png", name: "Ajinomoto" },
    { src: "/images/caro/anderson.png", name: "Anderson" },
    { src: "/images/caro/andrix.png", name: "Andrix" },
    { src: "/images/caro/cargill.png", name: "Cargill" },
    { src: "/images/caro/cj.png", name: "CJ Group" },
    { src: "/images/caro/olmix.png", name: "Olmix" },
    { src: "/images/caro/quangminh.png", name: "Quang Minh" },
    { src: "/images/caro/tanlong.png", name: "Tan Long" },
    { src: "/images/caro/van-aarsen.png", name: "Van Aarsen" },
    { src: "/images/caro/w-bunge.png", name: "W-Bunge" },
    { src: "/images/caro/wilmar.jpg", name: "Wilmar" },
  ];

  return (
    <section
      className="bg-customGray px-3 lg:px-32 pt-24 sm:pt-44 pb-44"
      aria-label="Đối tác chiến lược | Strategic Partners"
    >
      <div className="flex flex-col lg:flex-row items-center">
        <motion.div
          className="flex flex-col w-full lg:w-2/5 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">{t("1")}</h2>
          <p className="text-gray-600 leading-relaxed">{t("2")}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-fit shadow-md hover:shadow-lg transition-shadow">{t("3")}</Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-3/5 lg:ml-5 px-5 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Slider {...settings} className="partner-slider">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="h-52 px-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-md p-4 h-full flex items-center justify-center">
                  <Image
                    src={partner.src}
                    width={500}
                    height={500}
                    alt={`${partner.name} - Đối tác của Nam Viet JSC | Nam Viet JSC Partner`}
                    className="object-contain w-62 h-40"
                  />
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style jsx global>{`
        .partner-slider .slick-track {
          display: flex;
          align-items: center;
        }
        .partner-slider .slick-slide {
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .partner-slider .slick-slide.slick-active {
          opacity: 1;
        }
        .partner-slider .slick-prev:before,
        .partner-slider .slick-next:before {
          color: #333;
        }
      `}</style>
    </section>
  );
};

export default Partner;
