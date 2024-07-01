import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Công ty TNHH Feed Trading Việt Nam, có địa chỉ tại Biệt thự số 15 - BT1 Khu đô thị mới Cổ Nhuế - Xuân
        Đỉnh, Phường Cổ Nhuế 2, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam. Mã số thuế 0106173059, lĩnh hoạt
        hoạt động chính là nhập khẩu nguyên vật liệu và dịch vụ vận tải.
      </p>
      <Image src="/images/companies/31.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/32.jpeg" alt="nam_viet" width={2000} height={2000} className="pt-2" />
    </div>
  );
};

export default Page;
