import "../../globals.css";

import Link from "next/link";
import Image from "next/image";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import LanguageChanger from "@/components/LanguageChanger";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Menu from "@/components/menu/menu";
import Footer from "@/components/home/footer";
const locales = ["en", "vn"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Nam Viet Jsc",
  description: "Nam Viet Jsc",
};

export const revalidate = true;

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className="pt-2">
          <header className="text-customBlue">
            <div className="flex flex-col">
              <div className="border-t border-customBlue mb-4 w-[97%] mx-auto opacity-40" />

              <div className="flex items-center justify-between px-5">
                <Link href="/">
                  <Image src="/images/logo.png" alt="logo" width={150} height={150} />
                </Link>

                <div>
                  <Menu />
                </div>

                <div>
                  <LanguageChanger />
                </div>
              </div>

              <div className="border-t border-customBlue mt-4 w-[97%] mx-auto opacity-40" />
            </div>
          </header>
          <main className="pt-2">{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
