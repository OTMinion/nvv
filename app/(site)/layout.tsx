import "../globals.css";

import Link from "next/link";
import Image from "next/image";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Menu from "@/components/menu/menu";
import Footer from "@/components/home/footer";

export const metadata = {
  title: "Nam Viet Jsc",
  description: "Nam Viet Jsc",
};

export const revalidate = true;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-5">
        <header className="text-customBlue">
          <div className="flex flex-col">
            <div className="border-t border-customBlue mb-4 w-[97%] mx-auto" />

            <div className="flex items-center justify-between px-5">
              <Link href="/">
                <Image src="/images/logo.png" alt="logo" width={150} height={150} />
              </Link>

              <div>
                <Menu />
              </div>

              <div>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Languages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Vietnamese</SelectItem>
                    <SelectItem value="dark">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border-t border-customBlue mt-4 w-[95%] mx-auto" />
          </div>
        </header>
        <main className="py-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
