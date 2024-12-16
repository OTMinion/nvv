"use client";
import Image from "next/image";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Industries = () => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = useTranslations("business");

  const businesses = [
    {
      href: `/${locale}/industries/nam_viet`,
      image: "/images/companies/1.jpeg",
      title: "Nam Viet Jsc",
      description:
        "Nhà sản xuất thức ăn chăn nuôi hàng đầu Việt Nam | Leading animal feed manufacturer",
    },
    {
      href: `/${locale}/industries/pilmico`,
      image: "/images/companies/4.jpg",
      title: "Pilmico Group",
      description: "Đối tác chiến lược | Strategic Partner",
    },
    {
      href: `/${locale}/industries/logistics`,
      image: "/images/companies/13.jpeg",
      title: "Logistics",
      description: "Dịch vụ vận tải và kho bãi | Transportation and warehousing services",
    },
  ];

  return (
    <section className="bg-customGray mt-10">
      <motion.h1
        className="text-5xl font-bold py-16 pl-4 md:pl-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t("1")}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:gap-32 gap-4 mx-4 md:mx-32">
        {businesses.map((business, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={business.href}
              className="relative md:w-[18rem] h-32 md:h-96 overflow-hidden group cursor-pointer block"
            >
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={business.image}
                    alt={business.description}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute w-full h-full bg-black opacity-10"></div>
              </div>

              <div className="absolute bottom-0 w-full h-[3%] bg-customRed group-hover:bg-transparent transition duration-500"></div>

              <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end pb-10 pl-10">
                <span className="text-white text-2xl font-bold">{business.title}</span>
                <FiArrowDownRight className="text-white mr-5 text-3xl arrow-icon" />
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Mobile link */}
        <Link href={`/${locale}/industries`} className="text-center md:hidden">
          {t("2")}
        </Link>

        {/* Desktop animated link - keeping original effect */}
        <Link
          href={`/${locale}/industries`}
          className="relative w-[10rem] h-32 md:h-96 overflow-hidden cursor-pointer hidden sm:block"
        >
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="relative bg-white rounded-full w-40 h-40 flex items-center justify-center group">
              <FiArrowDownRight
                className="text-black text-5xl -rotate-45 transition-all duration-500 group-hover:translate-x-40"
                size={60}
              />
              <span className="absolute right-full text-black text-xl opacity-0 group-hover:translate-x-[150%] group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                {t("2")}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Industries;
