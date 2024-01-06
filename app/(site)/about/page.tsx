import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* PIcture */}
      <div className="relative h-[30rem] overflow-hidden">
        <div className="absolute w-full h-full">
          <Image
            src="/images/group.jpg"
            alt="about"
            layout="fill"
            objectFit="cover"
            className="brightness-[.6]"
          />
        </div>

        <div className="absolute w-full h-full flex justify-end  pb-10 pl-10 flex-col">
          <div className="flex text-white text-xl">
            <Link href="/" className="hover:text-customRed cursor-pointer transition duration-300">
              Trang chu
            </Link>
            <div className="w-px bg-white mx-3" />
            <p>Gioi thieu Nam Viet</p>
          </div>
          <span className="text-white text-6xl font-bold pb-10 pt-5">Giới thiệu Nam Viet</span>
        </div>
      </div>

      {/* About */}

      {/* Development */}

      {/* Ceo */}

      {/* Management tree */}
      <div className="mx-4 lg:mx-20">
        <p className="text-4xl font-bold mb-5">Ban Lanh Dao</p>
        <div className="h-px bg-gray-300" />

        <div className="flex flex-col items-center my-5">
          <Image src="/images/team/5.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
          <p className="font-bold text-lg mt-2"> HÀ VĂN AN</p>
          <p>Chủ tịch HĐQT</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:mx-16">
          <div className="flex flex-col items-center">
            <Image src="/images/team/1.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
            <p className="font-bold text-lg mt-2">NGUYỄN THỊ NỤ</p>
            <p>Phó Tổng giám đốc</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/2.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
            <p className="font-bold text-lg mt-2"> HOÀNG THANH PHONG</p>
            <p>Kế toán trưởng</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/3.jpg" alt="team" width={1920} height={1080} className="h-72 w-56" />
            <p className="font-bold text-lg mt-2"> NGUYỄN ĐỨC HÙNG</p>
            <p className="text-center">GĐ CT TNHH Feed trading Việt Nam</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/4.jpg" alt="team" width={1920} height={1080} className="h-72 w-48" />
            <p className="font-bold text-lg mt-2"> NGUYỄN VĂN HÙNG</p>
            <p>Giám đốc kho cảng Cái Lân</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/6.jpg" alt="team" width={1920} height={1080} className="h-72 w-48" />
            <p className="font-bold text-lg mt-2">Lorem, ipsum dolor.</p>
            <p>Lorem ipsum dolor .</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 my-5 space-x-4">
          <div className="flex flex-col items-center">
            <Image src="/images/team/7.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
            <p className="font-bold text-lg mt-2"> NGUYỄN VĂN ĐÍCH</p>
            <p className="text-center">Giám đốc CTCP Pilmico Group</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/8.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
            <p className="font-bold text-lg mt-2"> HÀ VĂN HƯỞNG</p>
            <p className="text-center">Giám đốc CT TMDV&DL Nam Việt</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/9.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
            <p className="font-bold text-lg mt-2"> NGUYỄN MẠNH HÀ</p>
            <p className="text-center">Trợ Lý Tổng GĐ CTCP Nam Việt</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/10.jpg" alt="team" width={1920} height={1080} className="h-72 w-64" />
            <p className="font-bold text-lg mt-2"> LÊ VĂN MIÊN</p>
            <p className="text-center">GĐ CTCP XD&PTNT Thái Nguyên</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/11.jpg" alt="team" width={1920} height={1080} className="h-72 w-60" />
            <p className="font-bold text-lg mt-2"> PHẠM VĂN DŨNG</p>
            <p className="text-center">GĐ TNHH LD Nam Việt</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team/12.jpg" alt="team" width={1920} height={1080} className="h-72 w-44" />
            <p className="font-bold text-lg mt-2"> Ha Van An</p>
            <p className="text-center">Chu Tich HDQT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
