import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CiLocationOn } from "react-icons/ci";

const Career = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-customGray w-full h-[18rem] flex items-center justify-center"></div>

      <div className="w-[84%] absolute transform -translate-y-[55%]">
        <Image
          src="/images/founder.jpg"
          width={1920}
          height={1080}
          alt="Descriptive Alt Text"
          className="brightness-[0.95]"
        />
        <div className="absolute inset-0 flex justify-center w-[60%] pl-5 flex-col text-white">
          <p className="text-5xl">&quot;&quot;</p>
          <p className="text-white text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio ullam quod atque cum, ipsam
            delectus voluptate? Voluptates, quo eligendi cupiditate possimus, labore natus fuga impedit
            aperiam dicta, voluptatum veniam.
          </p>

          <p className=" text-xl pt-10">Ong Ha Van An</p>
          <p>Chu Tich Hoi Dong Quan Tri</p>
        </div>
      </div>

      <div className="flex flex-col bg-customBlue w-full h-[68rem] items-center justify-center px-28 pt-[23rem] text-white">
        <div className="flex ">
          <h1 className=" text-5xl w-full font-bold">Get started a career in Industrial company</h1>
          <div className="flex flex-col">
            <p className="text-lg">
              We are constantly developing our plants and looking for new experienced people to work in our
              factories. The list of current offers is available below.
            </p>
            <Button>View All</Button>
          </div>
        </div>

        {/* Job posts */}
        <div className="flex flex-row mt-20">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex flex-col space-y-10 border-white border-[0.5px] p-10">
              <div className="flex justify-between">
                <p className="bg-gray-500 px-4 py-2">Full Time</p>
                <div className="flex">
                  <CiLocationOn width={20} height={20} className="text-3xl mr-2" />
                  <p className=" text-xl">Thai Nguyen</p>
                </div>
              </div>

              <p className="font-bold text-3xl">NHÂN VIÊN KHO</p>

              <p>
                Experienced person or technology engineer welcome to our factory prevailing on the global
                market.
              </p>

              <Button>Apply</Button>
            </div>

            <div className="flex flex-col space-y-10 border-white border-[0.5px] p-10">
              <div className="flex justify-between">
                <p className="bg-gray-500 px-4 py-2">Full Time</p>
                <div className="flex">
                  <CiLocationOn width={20} height={20} className="text-3xl mr-2" />
                  <p className=" text-xl">Thai Nguyen</p>
                </div>
              </div>

              <p className="font-bold text-3xl">QUẢN LÝ NHÂN SỰ</p>

              <p>
                Experienced person or technology engineer welcome to our factory prevailing on the global
                market.
              </p>

              <Button>Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
