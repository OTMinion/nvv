import Image from "next/image";
import { Button } from "@/components/ui/button";
import About from "@/components/home/about";
import Industries from "@/components/home/industries";
import Partner from "@/components/home/partner";
import Blog from "@/components/home/blog";
import Career from "@/components/home/career";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "CTCP Nam Viet - Nhà sản xuất thức ăn chăn nuôi chất lượng cao | Premium Animal Feed Manufacturing",
  description:
    "CTCP Nam Viet - 20 năm kinh nghiệm sản xuất thức ăn chăn nuôi chất lượng cao cho gia súc, gia cầm. 20 years of experience in premium animal feed manufacturing.",
};

export const revalidate = 60;

interface Props {
  params: {
    locale: string;
  };
}

export default function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("hero");

  return (
    <div>
      <section className="hero relative px-5">
        <Image
          src="/images/warehouse.jpg"
          alt="Nhà máy sản xuất thức ăn chăn nuôi Nam Viet | Nam Viet Animal Feed Manufacturing Plant"
          width={1920}
          height={40}
          className="brightness-75 h-[80vh] w-full object-cover"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-7xl text-center shadow-lg w-full max-w-[90%] ">
          <h1>
            <span>{t("9")}</span>
            <br />
            <span>{t("10")}</span>
          </h1>
          <Link href={`/${locale}/about`}>
            <Button variant="outline" aria-label="Tìm hiểu thêm về Nam Viet JSC">
              {t("11")}
            </Button>
          </Link>
        </div>
      </section>

      <About />
      <Industries />
      <Partner />
      <Career />
      <Blog />
    </div>
  );
}
