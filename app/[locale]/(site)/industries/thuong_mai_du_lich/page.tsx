import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Công ty cổ phần phát triển thương mại du lịch Nam Việt có địa chỉ tại tổ 11, phường Hoàng Văn Thụ,
        thành phố Thái Nguyên, tỉnh Thái Nguyên, Việt Nam. Mã số thuế 4601588418, lĩnh vực hoạt động chính là
        dịch vụ lưu trú ngắn ngày, ăn uống, tổ chức sự kiện, hội nghị, spa, chăm sóc sức khỏe…
      </p>
      <Image src="/images/companies/23.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/37.jpeg" alt="nam_viet" width={2000} height={2000} className="py-1" />
      <Image src="/images/companies/38.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/39.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/40.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/41.jpeg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
