import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import LanguageChanger from "@/components/LanguageChanger";
import Menu from "@/components/menu/menu";
import Footer from "@/components/home/footer";
import Dropdown from "@/components/menu/dropDown";
import { Metadata } from "next";

const locales = ["en", "vn"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://namviet.com.vn"),
  title: {
    default:
      "Nam Viet JSC - Nhà sản xuất thức ăn chăn nuôi hàng đầu Việt Nam | Leading Animal Feed Manufacturer in Vietnam",
    template: "%s | Nam Viet JSC",
  },
  description:
    "Nam Viet JSC chuyên sản xuất và cung cấp thức ăn chăn nuôi chất lượng cao cho gia súc, gia cầm. Premium animal feed manufacturing for livestock and poultry.",
  keywords: [
    "thức ăn chăn nuôi",
    "animal feed",
    "thức ăn gia súc",
    "livestock feed",
    "thức ăn gia cầm",
    "poultry feed",
    "nam viet jsc",
    "sản xuất thức ăn chăn nuôi",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    siteName: "Nam Viet JSC - Thức ăn chăn nuôi | Animal Feed",
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <NextIntlClientProvider messages={messages}>
        <body className="pt-2 overflow-x-hidden">
          <header className="text-customBlue" role="banner">
            <div className="flex flex-col">
              <div className="border-t border-customBlue mb-4 w-[97%] mx-auto opacity-40" />
              <div className="flex items-center justify-between px-5">
                <Link href="/" title="Trang chủ Nam Viet JSC | Nam Viet JSC Homepage">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Nam Viet JSC - Nhà sản xuất thức ăn chăn nuôi hàng đầu | Leading Animal Feed Manufacturer"
                    width={150}
                    height={150}
                    priority
                  />
                </Link>
                <nav role="navigation" aria-label="Main navigation">
                  <Menu />
                </nav>
                <div className="flex space-x-12 justify-end">
                  <LanguageChanger />
                  <Dropdown />
                </div>
              </div>
              <div className="border-t border-customBlue mt-4 w-[97%] mx-auto opacity-40" />
            </div>
          </header>
          <main role="main" className="pt-2">
            {children}
          </main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
