"use client";
import React from "react";
import { Button } from "../ui/button";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Career = () => {
  const t = useTranslations("career");

  const jobCards = [
    {
      type: "Full Time",
      location: "Thai Nguyen",
      title: "NHÂN VIÊN KHO",
      description:
        "Experienced person or technology engineer welcome to our factory prevailing on the global market.",
    },
    {
      type: "Full Time",
      location: "Thai Nguyen",
      title: "QUẢN LÝ NHÂN SỰ",
      description:
        "Experienced person or technology engineer welcome to our factory prevailing on the global market.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="flex flex-col bg-customBlue w-full items-center justify-center px-3 lg:px-28 py-10 lg:py-20 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row text-center gap-10">
          <motion.h1
            className="text-3xl lg:text-5xl w-full font-bold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("1")}
          </motion.h1>
          <motion.div
            className="flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg">{t("2")}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button>{t("3")}</Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-row mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            {jobCards.map((job, index) => (
              <motion.div
                key={index}
                className="flex flex-col space-y-10 border-white border-[0.5px] p-10 hover:bg-opacity-10 hover:bg-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between">
                  <p className="bg-gray-500 px-4 py-2">{job.type}</p>
                  <div className="flex">
                    <CiLocationOn className="text-3xl mr-2" />
                    <p className="text-xl">{job.location}</p>
                  </div>
                </div>
                <p className="font-bold text-3xl">{job.title}</p>
                <p>{job.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button>Apply</Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Career;
