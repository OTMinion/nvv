import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Picture */}
      <div className="relative">
        <Image
          src="/images/contact.jpg"
          alt="logo"
          width={2000}
          height={2000}
          className="object-cover h-96"
        />
        <div className="absolute ml-10 bottom-0 mb-20 flex flex-col text-white">
          <div className="flex text-lg">
            <Link href="/">Trang chủ</Link>
            <div className="mx-2 mb-4"> | </div>
            <p>Liên hệ</p>
          </div>

          <h1 className="text-6xl font-bold">Liên hệ</h1>
        </div>
      </div>

      {/* Contact form */}
      <div className="flex flex-col mt-16 mx-28">
        <h1 className="text-5xl font-bold">Kết nối với Nam Viet</h1>
        <p className="my-6 text-gray-500 w-[50%]">
          Gửi tin nhắn cho chúng tôi để được giải đáp mọi thắc mắc về sản phẩm và dịch vụ của Nam Viet
        </p>
      </div>
    </div>
  );
};

export default Contact;
