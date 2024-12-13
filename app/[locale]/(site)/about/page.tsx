"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Page = () => {
  const t = useTranslations("about");
  const [selectedYear, setSelectedYear] = useState("Start");
  const [imageSrc, setImageSrc] = useState("/images/base.jpg");

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

  const handleYearClick = (year: string, imgSrc: string) => {
    setSelectedYear(year);
    setImageSrc(imgSrc);
  };

  return (
    <div>
      <motion.div
        className="relative h-[30rem] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute w-full h-full">
          <Image
            src="/images/group.jpg"
            alt="Nam Viet JSC - Về chúng tôi | About Us"
            layout="fill"
            objectFit="cover"
            className="brightness-[.6]"
            priority
          />
        </div>

        <motion.div
          className="absolute w-full h-full flex justify-end pb-10 pl-5 md:pl-10 flex-col"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex text-white text-xl">
            <Link
              href="/"
              className="hover:text-customRed cursor-pointer transition duration-300 text-sm md:text-base"
            >
              {t("14")}
            </Link>
            <div className="w-px bg-white mx-3" />
            <p className="text-sm md:text-base">{t("15")}</p>
          </div>
          <span className="text-white text-3xl md:text-6xl font-bold pb-10 pt-5">{t("16")}</span>
        </motion.div>
      </motion.div>

      <div className="flex flex-col my-10">
        <motion.div
          className="text-center space-y-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-5xl font-bold">{t("17")}</h1>
          <p className="text-base md:text-xl px-4 md:px-20 leading-10">{t("18")}</p>
        </motion.div>

        <div className="flex flex-col items-center my-10">
          <div className="flex items-center w-full py-8">
            <motion.div
              className="flex-auto border-t-2 border-gray-300 relative mx-10 md:mx-40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  className="absolute cursor-pointer"
                  style={{ left: event.position }}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => handleYearClick(event.year, event.imgSrc)}
                  whileHover={{ scale: 1.1 }}
                >
                  <span
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 text-lg md:text-2xl whitespace-nowrap ${
                      selectedYear === event.year ? "text-customYellow" : "text-black"
                    }`}
                  >
                    {event.year}
                  </span>
                  <FaCircle
                    className={`-mt-2 ${
                      selectedYear === event.year ? "text-customYellow" : "text-black"
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col md:flex-row mb-32 md:mt-10 md:gap-20 mx-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              layout
              key={imageSrc}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={imageSrc}
                width={600}
                height={500}
                alt={
                  timelineEvents.find((event) => event.year === selectedYear)?.title ||
                  "Timeline Event"
                }
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              className="flex flex-col space-y-6 pt-10"
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-customYellow">
                {timelineEvents.find((event) => event.year === selectedYear)?.title}
              </h1>
              <p>{timelineEvents.find((event) => event.year === selectedYear)?.content}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative flex mb-20 lg:mb-[23rem] items-center justify-center mt-10 lg:mt-[20rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full absolute">
          <Image
            src="/images/founder.jpg"
            width={1920}
            height={1080}
            alt={`${t("19")} - Nam Viet JSC`}
            className="brightness-[0.95] object-cover h-80 lg:h-full"
          />
          <motion.div
            className="absolute inset-0 flex justify-center w-[60%] pl-5 flex-col text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-lg lg:text-6xl">&quot;&quot;</p>
            <p className="text-white text-xs md:text-3xl font-bold">{t("19")}</p>
            <p className="text-sm lg:text-2xl pt-10">{t("20")}</p>
            <p className="text-sm lg:text-base">{t("21")}</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-customGray">
        <motion.div
          className="mx-4 lg:mx-20 pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold mb-5 pt-28">{t("bld")}</p>
          <div className="h-px bg-gray-300" />

          {/* Top Management */}
          <motion.div
            className="flex flex-col items-center my-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/team/5.jpg"
              alt={`${t("20")} - Nam Viet JSC CEO`}
              width={1920}
              height={1080}
              className="h-72 w-56"
            />
            <p className="font-bold text-lg mt-2">{t("20")}</p>
            <p>{t("21")}</p>
          </motion.div>

          {/* First Row of Team Members */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:mx-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { name: "NGUYỄN THỊ NỤ", position: t("22") },
              { name: "HOÀNG THANH PHONG", position: t("23") },
              { name: "NGUYỄN ĐỨC HÙNG", position: t("24") },
              { name: "NGUYỄN VĂN HÙNG", position: t("25") },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Image
                  src={`/images/team/${index + 1}.jpg`}
                  alt={`${member.name} - ${member.position}`}
                  width={1920}
                  height={1080}
                  className="h-72 w-60"
                />
                <p className="font-bold text-lg mt-2">{member.name}</p>
                <p className="text-center">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row of Team Members */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 my-5 space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { name: "NGUYỄN VĂN ĐÍCH", position: t("27") },
              { name: "HÀ VĂN HƯỞNG", position: t("28") },
              { name: "NGUYỄN MẠNH HÀ", position: t("29") },
              { name: "LÊ VĂN MIÊN", position: t("30") },
              { name: "PHẠM VĂN DŨNG", position: t("31") },
              { name: "Nguyễn Mạnh Hải", position: t("32") },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Image
                  src={`/images/team/${index + 7}.jpg`}
                  alt={`${member.name} - ${member.position}`}
                  width={1920}
                  height={1080}
                  className="h-72 w-60"
                />
                <p className="font-bold text-lg mt-2">{member.name}</p>
                <p className="text-center">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
