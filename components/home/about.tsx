"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface StatProps {
  number: number;
  label: string;
}

const StatNumber = ({ number, label }: StatProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-customBlue text-5xl uppercase font-bold"
    >
      {number}+ <br />
      <span className="text-gray-500 text-2xl font-normal">{label}</span>
    </motion.div>
  );
};

export default function About() {
  const t = useTranslations("hero");

  return (
    <section
      className="about-section flex flex-col lg:flex-row justify-between my-24"
      aria-label="Giới thiệu về Nam Viet JSC"
    >
      <div className="flex flex-col lg:w-[65%] px-4 lg:px-32 space-y-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">
            {t("1")} <br />
            <span className="text-customBlue">{t("2")}</span>
          </h2>
        </motion.div>

        <meta
          name="description"
          content="Nam Viet JSC - 20 năm kinh nghiệm sản xuất thức ăn chăn nuôi chất lượng cao"
        />

        <motion.p
          className="text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("3")}
        </motion.p>

        <motion.a
          href="/about"
          className="text-customBlue underline w-fit"
          title="Tìm hiểu thêm về Nam Viet JSC"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          {t("4")}
        </motion.a>

        <div className="statistics flex flex-col lg:flex-row gap-10 py-12 text-center lg:text-start justify-between">
          <StatNumber number={186} label={t("5")} />
          <StatNumber number={20} label={t("6")} />
          <StatNumber number={200} label={t("7")} />
        </div>
      </div>

      <motion.div
        className="relative lg:w-1/4 mx-4 lg:mr-32 h-[28rem]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/warehouse.jpg"
          alt="Nhà máy sản xuất thức ăn chăn nuôi Nam Viet | Nam Viet Feed Manufacturing Plant"
          layout="fill"
          objectFit="cover"
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white w-[90%] h-[90%] flex justify-center items-center relative">
            <motion.div
              className="absolute inset-0 flex justify-start items-end"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span
                className="text-[7rem] font-bold text-transparent bg-clip-text bg-center bg-cover pl-5 pb-6"
                style={{ backgroundImage: "url(/images/warehouse.jpg)" }}
                aria-label="20+ năm kinh nghiệm"
              >
                20 +
                <br />
                <p className="text-2xl">{t("8")}</p>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
