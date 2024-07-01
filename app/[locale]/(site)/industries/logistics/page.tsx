import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Công ty cổ phần thương mại LOGISTICS Nam Việt có địa chỉ tại Tổ 9, phường Hoàng Văn Thụ, Thành phố
        Thái Nguyên, Tỉnh Thái Nguyên, Việt Nam. Mã số thuế 4601599762 lĩnh vực hoạt động chính là tư vấn dịch
        vụ đầu tư FDI vào Việt Nam. Dịch vụ kho bãi, nhà xưởng cho các nhà đầu tư FDI và nhà đầu tư trong
        nước, dịch vụ vận chuyển hàng hóa quốc tế.
      </p>
      <Image src="/images/companies/10.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/11.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/13.jpeg" alt="nam_viet" width={2000} height={2000} className="pt-1" />
    </div>
  );
};

export default Page;
