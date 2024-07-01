"use client";
import React from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  return (
    <div className="hidden md:flex justify-center md:text-sm lg:text-lg gap-3 text-customBlue">
      <div className="group inline-block relative z-10">
        <div className="flex">
          <Link href={"/"} className="p-4 group relative cursor-pointer text-xl">
            Home
            <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[110%] transition-transform left-2"></span>
          </Link>
        </div>
      </div>
      <div className="group inline-block relative z-10">
        <div className="flex">
          <Link href={`/${locale}/about`} className="p-4 group relative cursor-pointer text-xl">
            About
            <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[110%] transition-transform left-2"></span>
          </Link>
        </div>
      </div>

      <div className="group inline-block relative z-10 ">
        <div className="flex">
          <Link href={`/${locale}/industries`} className="p-4 group relative cursor-pointer  text-xl">
            Industries
            <span
              className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[110%] 
            transition-transform left-2"
            ></span>
          </Link>
          <FaChevronDown size={10} className="mt-[1.7rem] -ml-2 chevron-icon" />
        </div>
        <div className="absolute hidden group-hover:block  w-[55rem] left-1/2 transform -translate-x-[38%]">
          <div className="grid lg:grid-cols-3 py-2 px-3 rounded bg-white shadow z-20">
            <Link href={`/${locale}/industries/nam_viet`} className="block py-4 px-2 hover:bg-gray-200">
              CTCP Nam Viet
            </Link>
            <Link href={`/${locale}/industries/pilmico`} className="block py-4 px-2 hover:bg-gray-200">
              CTCP Pilmico Group
            </Link>
            <Link href={`/${locale}/industries/veronesi`} className="block py-4 px-2 hover:bg-gray-200">
              CTCP Veronesi Group
            </Link>
            <Link href={`/${locale}/industries/logistics`} className="block py-4 px-2 hover:bg-gray-200">
              CTCP Logistics Nam Viet
            </Link>
            <Link href={`/${locale}/industries/gas`} className="block py-4 px-2 hover:bg-gray-200">
              Cửa hàng xăng dầu số 1
            </Link>
            <Link href={`/${locale}/industries/feed_trading`} className="block py-4 px-2 hover:bg-gray-200">
              Công ty TNHH Feed Trading
            </Link>
            <Link
              href={`/${locale}/industries/nong_nghiep_nong_thon`}
              className="block py-4 px-2 hover:bg-gray-200"
            >
              CTCP xây dựng nông nghiệp và phát triển nông thôn Thái Nguyên
            </Link>
            <Link
              href={`/${locale}/industries/thuong_mai_du_lich`}
              className="block py-4 px-2 hover:bg-gray-200"
            >
              CTCP phát triển thương mại du lịch Nam Việt
            </Link>
            <Link
              href={`/${locale}/industries/cang_quang_ninh`}
              className="block py-4 px-2 hover:bg-gray-200"
            >
              Kho cảng CTCP Nam Việt Quảng Ninh
            </Link>
            <Link href={`/${locale}/industries/vapco`} className="block py-4 px-2 hover:bg-gray-200">
              Công ty TNHH sản xuất và thương mại Quốc tế Vapco
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 group relative cursor-pointer text-xl">
        <Link href={`/${locale}/career`}>Career</Link>
        <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
      </div>

      <div className="p-4 group relative cursor-pointer text-xl">
        <Link href="/projects">News</Link>
        <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
      </div>

      <div className="p-4 group relative cursor-pointer text-xl">
        <Link href={`/${locale}/contact`}>Contact</Link>
        <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
      </div>
    </div>
  );
};

export default Menu;
