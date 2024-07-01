"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

export default function LanguageChanger() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    startTransition(() => {
      setSelectedLocale(newLocale);
      // Remove the current locale from the pathname and replace with the new one
      const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
      router.replace(newPathname);
    });
  };

  return (
    <select onChange={handleChange} value={selectedLocale} disabled={isPending}>
      <option value="en">English</option>
      <option value="vn">Tiếng Việt</option>
    </select>
  );
}
