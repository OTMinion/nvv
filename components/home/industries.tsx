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
        "Nhà sản xuất thức ăn chăn nuôi hàng đầu Việt Nam | Leading animal feed manufacturer in Vietnam",
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
    <section className="bg-customGray mt-10" aria-label="Lĩnh vực kinh doanh | Business Areas">
      <motion.h1
        className="text-5xl font-bold py-16 pl-4 md:pl-32"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link
              href={business.href}
              className="relative md:w-[18rem] h-32 md:h-96 overflow-hidden group cursor-pointer block"
              title={business.description}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                <motion.div
                  className="absolute w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={business.image}
                    alt={business.description}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                  />
                </motion.div>
                <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
              </div>

              <motion.div
                className="absolute bottom-0 w-full h-[3%] bg-customRed"
                whileHover={{ height: "100%", opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute top-0 left-0 w-full h-full flex justify-between items-end pb-10 pl-10"
                whileHover={{ y: -5 }}
              >
                <span className="text-white text-2xl font-bold drop-shadow-lg">
                  {business.title}
                </span>
                <FiArrowDownRight className="text-white mr-5 text-3xl transform group-hover:rotate-[-45deg] transition-transform duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={`/${locale}/industries`}
            className="text-center block md:hidden hover:text-customRed transition-colors duration-300"
          >
            {t("2")}
          </Link>

          <Link
            href={`/${locale}/industries`}
            className="relative w-[10rem] h-32 md:h-96 overflow-hidden cursor-pointer hidden sm:block"
            title="Xem tất cả lĩnh vực | View all industries"
          >
            <motion.div
              className="absolute w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-white rounded-full w-40 h-40 flex items-center justify-center group shadow-lg">
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 40 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiArrowDownRight className="text-black text-5xl -rotate-45" size={60} />
                  <span className="absolute right-full text-black text-xl opacity-0 group-hover:opacity-100 transform translate-x-full transition-all duration-300 whitespace-nowrap">
                    {t("2")}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
