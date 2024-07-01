import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <Image src="/images/companies/7.jpeg" alt="logo" width={400} height={400} />

      <p className="text-lg my-6">
        Công ty cổ phần đầu tư Veronesi group, có địa chỉ tại Tổ dân phố Hiệp Đồng, Phường Hồng Tiến, thành
        phố Phổ Yên, tỉnh Thái Nguyên, Việt Nam. Mã số thuế 4601572753 Lĩnh vực hoạt động chính là sản xuất và
        bán buôn thức ăn và nguyên liệu làm thức gia súc, gia cầm.
      </p>

      <Image src="/images/companies/8.jpg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/9.jpg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
