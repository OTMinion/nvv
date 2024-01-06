import Image from "next/image";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const industries = () => {
  return (
    <div className="bg-customGray mt-10">
      <h1 className="text-5xl font-bold py-16 pl-4 md:pl-32">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 md:mx-32">
        <div className="relative w-84 h-60 overflow-hidden">
          <div className="absolute w-full h-full">
            <Image src="/images/oil.png" alt="oil" layout="fill" objectFit="cover" />
          </div>

          <div className="absolute bottom-0 w-full h-[3%] bg-customRed"></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-start items-end pb-10 pl-10">
            <span className="text-white text-xl font-bold">Your Text Here</span>
          </div>
        </div>

        <div className="relative w-84 h-60 overflow-hidden group cursor-pointer">
          <div className="absolute w-full h-full">
            <Image src="/images/base.jpg" alt="oil" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute bottom-0 w-full h-[3%] bg-customRed group-hover:bg-transparent transition duration-500"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end pb-10 pl-10">
            <span className="text-white text-xl font-bold">Your Text Here</span>
            <FiArrowDownRight width={20} height={20} className="text-white mr-5 text-3xl arrow-icon" />
          </div>
        </div>

        <div className="relative w-84 h-60 overflow-hidden">
          <div className="absolute w-full h-full">
            <Image src="/images/coffee.jpg" alt="oil" layout="fill" objectFit="cover" />
          </div>

          <div className="absolute bottom-0 w-full h-[3%] bg-customRed"></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-start items-end pb-10 pl-10">
            <span className="text-white text-xl font-bold">Your Text Here</span>
          </div>
        </div>

        <div className="relative w-84 h-60 overflow-hidden">
          <div className="absolute w-full h-full">
            <Image src="/images/farm.jpg" alt="oil" layout="fill" objectFit="cover" />
          </div>

          <div className="absolute bottom-0 w-full h-[3%] bg-customRed"></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-start items-end pb-10 pl-10">
            <span className="text-white text-xl font-bold">Your Text Here</span>
          </div>
        </div>

        <div className="relative w-84 h-60 overflow-hidden">
          <div className="absolute w-full h-full">
            <Image src="/images/oil.png" alt="oil" layout="fill" objectFit="cover" />
          </div>

          <div className="absolute bottom-0 w-full h-[3%] bg-customRed"></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-start items-end pb-10 pl-10">
            <span className="text-white text-xl font-bold">Your Text Here</span>
          </div>
        </div>

        <div className="relative w-84 h-60 overflow-hidden">
          <div className="absolute w-full h-full">
            <Image src="/images/oil.png" alt="oil" layout="fill" objectFit="cover" />
          </div>

          <div className="absolute bottom-0 w-full h-[3%] bg-customRed"></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-start items-end pb-10 pl-10">
            <span className="text-white text-xl font-bold">Your Text Here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default industries;
