"use client";
import React from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="hidden md:flex justify-center md:text-sm lg:text-lg gap-3 text-customBlue">
      <div className="p-4 group relative cursor-pointer text-xl">
        <Link href="/">Home</Link>
        <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
      </div>

      <div className="group inline-block relative z-10">
        <div className="flex">
          <Link href={"/about"} className="p-4 group relative cursor-pointer text-xl">
            About
            <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[110%] transition-transform left-2"></span>
          </Link>
        </div>
      </div>

      <div className="group inline-block relative z-10 ">
        <div className="flex">
          <Link href="/" className="p-4 group relative cursor-pointer  text-xl">
            Industries
            <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[110%] transition-transform left-2"></span>
          </Link>
          <FaChevronDown size={10} className="mt-[1.7rem] -ml-2 chevron-icon" />
        </div>
        <div className="absolute hidden group-hover:block  w-60">
          <div className="py-2 px-3 rounded bg-white shadow z-20">
            <Link href="/courses" className="block py-4 px-2 hover:bg-gray-200">
              Drone Day Workshop
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 group relative cursor-pointer text-xl">
        <Link href="/career">Career</Link>
        <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
      </div>

      <div className="p-4 group relative cursor-pointer text-xl">
        <Link href="/projects">News</Link>
        <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
      </div>

      <div className="p-4 group relative cursor-pointer text-xl">
        <Link href="/contact">Contact</Link>
        <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
      </div>
    </div>
  );
};

export default Menu;
