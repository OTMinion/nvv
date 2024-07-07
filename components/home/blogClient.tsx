"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function BlogClient() {
  const t = useTranslations("news");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  return (
    <div className="flex justify-between py-10">
      <h1 className="text-5xl font-bold">{t("1")}</h1>
      <Button>
        <Link href={`/${locale}/projects`}>{t("2")}</Link>
      </Button>
    </div>
  );
}
