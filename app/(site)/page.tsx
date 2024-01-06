import Image from "next/image";
import { Button } from "@/components/ui/button";
import About from "@/components/home/about";
import Industries from "@/components/home/industries";
import Partner from "@/components/home/partner";
import Blog from "@/components/home/blog";
import Career from "@/components/home/career";

export const revalidate = 0;

export default function Home() {
  return (
    <div>
      <div className="relative px-5">
        <Image
          src="/images/warehouse.jpg"
          alt="home"
          width={1920}
          height={40}
          className="brightness-75 h-[80vh] w-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl text-center shadow-lg w-full max-w-[90%] ">
          <span>Let&apos;s discover how our</span>
          <br />
          <span>services will help you</span>

          <br />

          <Button variant="outline">Who We Are</Button>
        </div>
      </div>

      <About />
      <Industries />
      <Partner />
      <Career />
      <Blog />
    </div>
  );
}
