import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Công ty cổ phần Pilmico group, có địa chỉ tại xóm Trung, xã Điềm Thụy, huyện Phú Bình, tỉnh Thái
        Nguyên, Việt Nam. Mã số thuế 4601209684 Lĩnh vực hoạt động chính là sản xuất và bán buôn thức ăn và
        nguyên liệu làm thức gia súc, gia cầm, dịch vụ kho bãi, logistics.
      </p>
      <Image src="/images/companies/4.jpg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/5.jpg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/6.jpg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
