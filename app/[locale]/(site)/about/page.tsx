"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";

const Page = () => {
  // State to track the selected year and image
  const [selectedYear, setSelectedYear] = useState("Start");
  const [imageSrc, setImageSrc] = useState("/images/base.jpg"); // Replace with your default image path

  // Define your timeline events and associated images
  const timelineEvents = [
    {
      year: "Start",
      position: "0%",
      imgSrc: "/images/base.jpg",
      title: "Signing contract with major investor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      year: "1998",
      position: "20%",
      imgSrc: "/images/coffee.jpg",
      title: "Recognition in the market",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      year: "2005",
      position: "40%",
      imgSrc: "/images/base.jpg",
      title: "Increasing our team",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      year: "2009",
      position: "60%",
      imgSrc: "/images/coffee.jpg",
      title: "Opening of a new office",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      year: "2015",
      position: "80%",
      imgSrc: "/images/base.jpg",
      title: "Opening of new capacities",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      year: "Now",
      position: "100%",
      imgSrc: "/images/coffee.jpg",
      title: "The best in the industry market",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    },
  ];

  // Handler for when a year or circle is clicked
  const handleYearClick = (year, imgSrc) => {
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
              Trang chu
            </Link>
            <div className="w-px bg-white mx-3 " />
            <p className="text-sm md:text-base">Gioi thieu Nam Viet</p>
          </div>
          <span className="text-white text-3xl md:text-6xl font-bold pb-10 pt-5">Giới thiệu Nam Viet</span>
        </div>
      </div>

      {/* About */}

      {/* Development */}
      <div className="flex flex-col my-10">
        <div className="text-center space-y-6 mb-6">
          <h1 className="text-2xl md:text-5xl font-bold">Company history at a glance</h1>
          <p className="text-base md:text-xl px-4 md:px-20 leading-10">
            Tập đoàn đầu tư và phát triển Nam Việt là một trong những tập đoàn đa ngành nghề, hoạt động và
            phát triển trong nhiều lĩnh vực với tổng vốn điều lệ 542.000.000.000đ. Với 10 công ty thành viên
            bao gồm: Công ty cổ phần Nam Việt; Công ty cổ phần Pilmico group; Công ty cổ phần đầu tư Veronesi
            group; Công ty cổ phần thương mại LOGISTICS Nam Việt; Cửa hàng xăng dầu số 1 Công ty cổ phần Nam
            Việt; Công ty cổ phần xây dựng nông nghiệp và phát triển nông thôn Thái Nguyên; Công ty cổ phần
            phát triển thương mại du lịch Nam Việt; Chi nhánh kho cảng Công ty cổ phần Nam Việt tại Quảng
            Ninh; Công ty TNHH Feed Trading Việt Nam; Công ty TNHH sản xuất và thương mại Quốc tế Vapco
          </p>
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
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 text-xl md:text-2xl ${
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
            className="brightness-[0.95] "
          />
          <div className="absolute inset-0 flex justify-center w-[60%] pl-5 flex-col text-white">
            <p className="text-base lg:text-8xl">&quot;&quot;</p>
            <p className="text-white text-sm md:text-4xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio ullam quod atque cum, ipsam
              delectus voluptate?
            </p>

            <p className="text-sm lg:text-2xl pt-10">Ong Ha Van An</p>
            <p className="text-sm ">Chu Tich Hoi Dong Quan Tri</p>
          </div>
        </div>
      </div>

      {/* Management tree */}
      <div className="bg-customGray ">
        <div className="mx-4 lg:mx-20 pb-20">
          <p className="text-4xl font-bold mb-5 pt-28">Ban Lanh Dao</p>
          <div className="h-px bg-gray-300" />

          <div className="flex flex-col items-center my-5">
            <Image src="/images/team/5.jpg" alt="team" width={1920} height={1080} className="h-72 w-56" />
            <p className="font-bold text-lg mt-2"> HÀ VĂN AN</p>
            <p>Chủ tịch HĐQT</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:mx-16">
            <div className="flex flex-col items-center">
              <Image src="/images/team/1.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2">NGUYỄN THỊ NỤ</p>
              <p>Phó Tổng giám đốc</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/2.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> HOÀNG THANH PHONG</p>
              <p>Kế toán trưởng</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/3.jpg" alt="team" width={1920} height={1080} className="h-72 w-56" />
              <p className="font-bold text-lg mt-2"> NGUYỄN ĐỨC HÙNG</p>
              <p className="text-center">GĐ CT TNHH Feed trading Việt Nam</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/4.jpg" alt="team" width={1920} height={1080} className="h-72 w-48" />
              <p className="font-bold text-lg mt-2"> NGUYỄN VĂN HÙNG</p>
              <p>Giám đốc kho cảng Cái Lân</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/6.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2">Lorem, ipsum dolor.</p>
              <p>Lorem ipsum dolor .</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 my-5 space-x-4">
            <div className="flex flex-col items-center">
              <Image src="/images/team/7.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> NGUYỄN VĂN ĐÍCH</p>
              <p className="text-center">Giám đốc CTCP Pilmico Group</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/8.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> HÀ VĂN HƯỞNG</p>
              <p className="text-center">Giám đốc CT TMDV&DL Nam Việt</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/9.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> NGUYỄN MẠNH HÀ</p>
              <p className="text-center">Trợ Lý Tổng GĐ CTCP Nam Việt</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/10.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> LÊ VĂN MIÊN</p>
              <p className="text-center">GĐ CTCP XD&PTNT Thái Nguyên</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/11.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
              <p className="font-bold text-lg mt-2"> PHẠM VĂN DŨNG</p>
              <p className="text-center">GĐ TNHH LD Nam Việt</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/team/12.jpg" alt="team" width={1920} height={1080} className="h-72 w-48" />
              <p className="font-bold text-lg mt-2"> Ha Van An</p>
              <p className="text-center">Chu Tich HDQT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
