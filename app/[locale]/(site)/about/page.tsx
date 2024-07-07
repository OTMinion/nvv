"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("about");
  // State to track the selected year and image
  const [selectedYear, setSelectedYear] = useState("Start");
  const [imageSrc, setImageSrc] = useState("/images/base.jpg"); // Replace with your default image path

  // Define your timeline events and associated images
  const timelineEvents = [
    {
      year: t("1"),
      position: "0%",
      imgSrc: "/images/base.jpg",
      title: t("2"),
      content: t("3"),
    },
    {
      year: "1998",
      position: "20%",
      imgSrc: "/images/coffee.jpg",
      title: t("4"),
      content: t("5"),
    },
    {
      year: "2005",
      position: "40%",
      imgSrc: "/images/base.jpg",
      title: t("6"),
      content: t("7"),
    },
    {
      year: "2009",
      position: "60%",
      imgSrc: "/images/coffee.jpg",
      title: t("8"),
      content: t("9"),
    },
    {
      year: "2015",
      position: "80%",
      imgSrc: "/images/base.jpg",
      title: t("10"),
      content: t("11"),
    },
    {
      year: t("34"),
      position: "100%",
      imgSrc: "/images/coffee.jpg",
      title: t("12"),
      content: t("13"),
    },
  ];

  // Handler for when a year or circle is clicked
  const handleYearClick = (year: string, imgSrc: string) => {
    setSelectedYear(year);
    setImageSrc(imgSrc);
  };

  return (
    <div>
      {/* PIcture */}
      <div className="relative h-[30rem] overflow-hidden">
        <div className="absolute w-full h-full">
          <Image
            src="/images/group.jpg"
            alt="about"
            layout="fill"
            objectFit="cover"
            className="brightness-[.6]"
          />
        </div>

        <div className="absolute w-full h-full flex justify-end pb-10 pl-5 md:pl-10 flex-col">
          <div className="flex text-white text-xl">
            <Link
              href="/"
              className="hover:text-customRed cursor-pointer transition duration-300 text-sm md:text-base"
            >
              {t("14")}
            </Link>
            <div className="w-px bg-white mx-3 " />
            <p className="text-sm md:text-base">{t("15")}</p>
          </div>
          <span className="text-white text-3xl md:text-6xl font-bold pb-10 pt-5">{t("16")}</span>
        </div>
      </div>

      {/* About */}

      {/* Development */}
      <div className="flex flex-col my-10">
        <div className="text-center space-y-6 mb-6">
          <h1 className="text-2xl md:text-5xl font-bold">{t("17")}</h1>
          <p className="text-base md:text-xl px-4 md:px-20 leading-10">{t("18")}</p>
        </div>
        <div className="flex flex-col items-center my-10">
          <div className="flex items-center w-full py-8 ">
            <div className="flex-auto border-t-2 border-gray-300 relative mx-10 md:mx-40 ">
              {/* Timeline Events */}
              {timelineEvents.map((event, index) => (
                <div
                  className="absolute cursor-pointer"
                  style={{ left: event.position }}
                  key={index}
                  onClick={() => handleYearClick(event.year, event.imgSrc)}
                >
                  <span
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 text-lg md:text-2xl whitespace-nowrap ${
                      selectedYear === event.year ? "text-customYellow" : "text-black"
                    }`}
                  >
                    {event.year}
                  </span>
                  <FaCircle
                    className={`-mt-2 ${selectedYear === event.year ? "text-customYellow" : "text-black"}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image below the timeline */}
          <div className="flex flex-col md:flex-row mb-32 md:mt-10 md:gap-20 mx-5">
            <Image src={imageSrc} width={600} height={500} alt="Selected Time Event" className="rounded-lg" />
            <div className="flex flex-col space-y-6 pt-10">
              <h1 className="text-4xl font-bold text-customYellow">
                {timelineEvents.find((event) => event.year === selectedYear)?.title}
              </h1>
              <p>{timelineEvents.find((event) => event.year === selectedYear)?.content}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ceo */}
      <div className="relative flex mb-20 lg:mb-[23rem] items-center justify-center mt-10 lg:mt-[20rem]">
        <div className="w-full absolute ">
          <Image
            src="/images/founder.jpg"
            width={1920}
            height={1080}
            alt="Descriptive Alt Text"
            className="brightness-[0.95] object-cover h-80 lg:h-full"
          />
          <div className="absolute inset-0 flex justify-center w-[60%] pl-5 flex-col text-white">
            <p className="text-lg lg:text-6xl">&quot;&quot;</p>
            <p className="text-white text-xs md:text-3xl font-bold">{t("19")}</p>

            <p className="text-sm lg:text-2xl pt-10">{t("20")}</p>
            <p className="text-sm lg:text-base ">{t("21")}</p>
          </div>
        </div>
      </div>

      {/* Management tree */}
      <div className="bg-customGray ">
        <div className="mx-4 lg:mx-20 pb-20">
          <p className="text-4xl font-bold mb-5 pt-28">{t("bld")}</p>
          <div className="h-px bg-gray-300" />

          <div className="flex flex-col items-center my-5">
            <Image src="/images/team/5.jpg" alt="team" width={1920} height={1080} className="h-72 w-56" />
            <p className="font-bold text-lg mt-2"> {t("20")}</p>
            <p>{t("21")}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:mx-16">
            <div className="flex flex-col items-center">
              <Image src="/images/team/1.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2">NGUYỄN THỊ NỤ</p>
              <p>{t("22")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/2.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> HOÀNG THANH PHONG</p>
              <p>{t("23")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/3.jpg" alt="team" width={1920} height={1080} className="h-72 w-56" />
              <p className="font-bold text-lg mt-2"> NGUYỄN ĐỨC HÙNG</p>
              <p className="text-center">{t("24")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/4.jpg" alt="team" width={1920} height={1080} className="h-72 w-48" />
              <p className="font-bold text-lg mt-2"> NGUYỄN VĂN HÙNG</p>
              <p>{t("25")}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/images/team/6.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2">Lorem, ipsum dolor.</p>
              <p>{t("26")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 my-5 space-x-4">
            <div className="flex flex-col items-center">
              <Image src="/images/team/7.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> NGUYỄN VĂN ĐÍCH</p>
              <p className="text-center">{t("27")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/8.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> HÀ VĂN HƯỞNG</p>
              <p className="text-center">{t("28")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/9.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> NGUYỄN MẠNH HÀ</p>
              <p className="text-center">{t("29")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/10.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> LÊ VĂN MIÊN</p>
              <p className="text-center">{t("30")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/11.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> PHẠM VĂN DŨNG</p>
              <p className="text-center">{t("31")}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/12.jpg" alt="team" width={1920} height={1080} className="h-72 w-48" />
              <p className="font-bold text-lg mt-2">Nguyễn Mạnh Hải</p>
              <p className="text-center">{t("32")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
