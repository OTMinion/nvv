import Image from "next/image";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";

const industries = () => {
  const businesses = [
    {
      href: "/industries/nam_viet",
      image: "/images/companies/1.jpeg",
      title: "Nam Viet Jsc",
    },
    {
      href: "/industries/pilmico",
      image: "/images/companies/4.jpg",
      title: "Pilmico Group",
    },
    {
      href: "/industries/logistics",
      image: "/images/companies/13.jpeg",
      title: "Logistics",
    },
  ];

  return (
    <div className="bg-customGray mt-10">
      <h1 className="text-5xl font-bold py-16 pl-4 md:pl-32">Our Businesses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:gap-32 gap-4 mx-4 md:mx-32 ">
        {businesses.map((business, index) => (
          <Link
            href={business.href}
            key={index}
            className="relative  md:w-[18rem] h-32 md:h-96 overflow-hidden group cursor-pointer"
          >
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                <Image src={business.image} alt="oil" layout="fill" objectFit="cover" />
              </div>
              <div className="absolute w-full h-full bg-black opacity-10"></div>
            </div>

            <div className="absolute bottom-0 w-full h-[3%] bg-customRed group-hover:bg-transparent transition duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end pb-10 pl-10">
              <span className="text-white text-2xl font-bold">{business.title}</span>
              <FiArrowDownRight width={20} height={20} className="text-white mr-5 text-3xl arrow-icon" />
            </div>
          </Link>
        ))}

        <Link href={"/industries"} className="text-center  md:hidden">
          See more
        </Link>

        <Link
          href={"/industries"}
          className="relative w-[10rem] h-32 md:h-96 overflow-hidden cursor-pointer hidden sm:block"
        >
          <div className="absolute w-full h-full  flex items-center justify-center">
            <div className="relative bg-white rounded-full w-40 h-40 flex items-center justify-center group">
              <FiArrowDownRight
                className="text-black text-5xl -rotate-45 transition-all duration-500 group-hover:translate-x-40"
                size={60}
              />
              <span className="absolute right-full text-black text-xl opacity-0 group-hover:translate-x-[150%] group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                See More
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default industries;
