import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <Image src="/images/logo.png" alt="logo" width={400} height={400} />

      <p className="text-lg my-6">
        Công ty cổ phần Nam Việt, có địa chỉ tại Tổ dân phố 2A, phường Phố Cò, thành phố Sông Công, tỉnh Thái
        Nguyên, Việt Nam. Mã số thuế: 4600305924 Lĩnh vực hoạt động chính là sản xuất và bán buôn thức ăn và
        nguyên liệu làm thức gia súc, gia cầm
      </p>
      <Image src="/images/companies/1.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/2.jpg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/3.jpg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
