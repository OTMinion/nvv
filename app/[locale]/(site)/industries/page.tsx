import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

type Props = {
  params: { locale: string };
};

const Industries = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  const industries = [
    {
      href: `/${locale}/industries/cang_quang_ninh`,
      imgSrc: "/images/companies/29.jpg",
      title: "Kho cảng CTCP Nam Việt Quảng Ninh",
    },
    {
      href: `/${locale}/industries/feed_trading`,
      imgSrc: "/images/companies/31.jpeg",
      title: "Công ty TNHH Feed Trading",
    },
    {
      href: `/${locale}/industries/gas`,
      imgSrc: "/images/companies/15.jpeg",
      title: "Cửa hàng xăng dầu số 1",
    },
    {
      href: `/${locale}/industries/logistics`,
      imgSrc: "/images/companies/13.jpeg",
      title: "Logistics",
    },
    {
      href: `/${locale}/industries/nam_viet`,
      imgSrc: "/images/companies/1.jpeg",
      title: "Nam Viet Jsc",
    },
    {
      href: `/${locale}/industries/nong_nghiep_nong_thon`,
      imgSrc: "/images/companies/18.jpg",
      title: "CTCP xây dựng nông nghiệp và phát triển nông thôn Thái Nguyên",
    },
    {
      href: `/${locale}/industries/pilmico`,
      imgSrc: "/images/companies/4.jpg",
      title: "Pilmico Group",
    },
    {
      href: `/${locale}/industries/thuong_mai_du_lich`,
      imgSrc: "/images/companies/23.jpeg",
      title: "CTCP phát triển thương mại du lịch Nam Việt",
    },
    {
      href: `/${locale}/industries/vapco`,
      imgSrc: "/images/companies/33.jpeg",
      title: "Công ty TNHH sản xuất và thương mại Quốc tế Vapco",
    },
    {
      href: `/${locale}/industries/veronesi`,
      imgSrc: "/images/companies/7.jpeg",
      title: "CTCP Veronesi Group",
    },
  ];

  return (
    <div className="flex flex-col mx-4 text-customBlue">
      {/* Picture */}
      <div className="relative">
        <Image
          src="/images/industries.jpg"
          alt="logo"
          width={2000}
          height={2000}
          className="object-cover h-96"
        />
        <div className="absolute ml-10 bottom-0 mb-20 flex flex-col text-white">
          <div className="flex text-lg">
            <Link href={`/${locale}`}>Trang chủ</Link>
            <div className="mx-2 mb-4"> | </div>
            <p>Industries</p>
          </div>
          <h1 className="text-6xl font-bold">Industries</h1>
        </div>
      </div>
      {/* Contact form */}
      <div className="flex flex-col mt-16 mb-10 xl:mx-28">
        <h1 className="text-5xl font-bold pb-10">What we do for you</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-300 ">
          {industries.map((industry, index) => (
            <Link href={industry.href} key={index} className="group cursor-pointer">
              <div className="w-full h-72  overflow-hidden bg-industryGray">
                <div className="w-full h-72 group-hover:h-60 transform transition-all duration-150 group-hover:scale-110">
                  <Image
                    src={industry.imgSrc}
                    alt={industry.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between bg-industryGray pl-4 pb-4 h-52 group-hover:h-64 group-hover:-mt-12 transition-all duration-300">
                <h1 className="text-3xl font-bold py-4 group-hover:py-8 transition-all duration-300">
                  {industry.title}
                </h1>
                <div className="pb-4 group-hover:pb-8 transition-all duration-300">
                  <div className="flex pt-4 group pl-2 ">
                    View More
                    <GoArrowRight
                      width={10}
                      height={10}
                      className="text-customRed mr-5 text-3xl pb-1 ml-6 pl-2 group-hover:ml-8 transition-all duration-300"
                    />
                  </div>
                  <div className="border-t border-customBlue w-36" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
