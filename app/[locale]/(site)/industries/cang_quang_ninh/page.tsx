import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Chi nhánh kho cảng Công ty cổ phần Nam Việt tại Quảng Ninh, có địa chỉ tại khu công nghiệp Cái Lân,
        phường Bãi Cháy, thành phố Hạ Long, tỉnh Quảng Ninh, Việt Nam. Mã số thuế 4600305924-002, lĩnh vực
        hoạt động chính là lĩnh vực kho bãi và dịch vụ lưu giữ hàng hóa, bốc xếp, Container, bảo hiểm hàng hóa
        quốc tế.
      </p>
      <Image src="/images/companies/29.jpg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/30.jpg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
