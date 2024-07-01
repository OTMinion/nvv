import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-20 justify-center items-center">
      <p className="text-lg my-6">
        Cửa hàng xăng dầu số 1 Công ty cổ phần Nam Việt, có địa chỉ tại tổ 1, phường Đồng Bẩm, thành phố Thái
        Nguyên, tỉnh Thái Nguyên, Việt Nam. Mã số thuế 4600305924-001 lĩnh vực hoạt động chính là bán lẻ xăng,
        dầu.
      </p>
      <Image src="/images/companies/14.jpg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/15.jpeg" alt="nam_viet" width={2000} height={2000} />
      <Image src="/images/companies/16.jpg" alt="nam_viet" width={2000} height={2000} />
    </div>
  );
};

export default Page;
