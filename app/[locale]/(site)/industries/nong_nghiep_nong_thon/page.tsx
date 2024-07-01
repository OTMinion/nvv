import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Công ty cổ phần xây dựng nông nghiệp và phát triển nông thôn Thái Nguyên, có địa chỉ tại tổ 15, phường
        Quang Trung, thành phố Thái Nguyên, tỉnh Thái Nguyên, Việt Nam. Mã số thuế 4600105971, lĩnh vực hoạt
        động chính là xây dựng cơ sở hạ tầng phát triển nông nghiệp, nông thôn, xây dựng các mô hình trang
        trại sạch, hạ tầng khu đô thị, nhà ở, thương mại và nhà ở cho thuê.
      </p>

      <Image src="/images/companies/18.jpg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/19.jpeg" alt="nam_viet" width={2000} height={2000} className="py-1" />
      <Image src="/images/companies/20.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/21.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/22.jpeg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
