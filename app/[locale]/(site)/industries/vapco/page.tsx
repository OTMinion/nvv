import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Công ty TNHH sản xuất và thương mại Quốc tế Vapco, có địa chỉ tại Lô CN 9 Khu Công Nghiệp Điềm Thụy,
        Xã Điềm Thụy, Huyện Phú Bình, Tỉnh Thái Nguyên. Lĩnh vực hoạt động chính là giải pháp quản lý hàng
        hóa, kho bãi trong hệ thống đám mây và tư vấn dịch vụ cho các công ty FDI, nhà xưởng và dịch vụ.
      </p>
      <Image src="/images/companies/34.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/35.jpeg" alt="nam_viet" width={2000} height={2000} className="py-2" />
      <Image src="/images/companies/33.jpeg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
