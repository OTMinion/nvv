import React from "react";
import { Button } from "../ui/button";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";
const Career = () => {
  const t = useTranslations("career");
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col bg-customBlue w-full  items-center justify-center px-3 lg:px-28 py-10 lg:py-20 text-white">
        <div className="flex flex-col lg:flex-row text-center gap-10">
          <h1 className="text-3xl lg:text-5xl w-full font-bold">{t("1")}</h1>
          <div className="flex flex-col">
            <p className="text-lg">{t("2")}</p>
            <Button>{t("3")}</Button>
          </div>
        </div>

        {/* Job posts */}
        <div className="flex flex-row mt-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
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
