"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = useTranslations("nav");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleIndustries = (e: any) => {
    e.stopPropagation(); // Prevent the sidebar from closing when toggling industries
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const industryLinks = [
    { key: "1", slug: "nam_viet" },
    { key: "2", slug: "pilmico" },
    { key: "3", slug: "veronesi" },
    { key: "4", slug: "logistics" },
    { key: "5", slug: "gas" },
    { key: "6", slug: "feed_trading" },
    { key: "7", slug: "nong_nghiep_nong_thon" },
    { key: "8", slug: "thuong_mai_du_lich" },
    { key: "9", slug: "cang_quang_ninh" },
    { key: "10", slug: "vapco" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-md text-customBlue mt-10"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 " onClick={closeSidebar}></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <nav className="py-8 px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-customBlue">Menu</h2>
          </div>
          <div className="space-y-4">
            <Link
              href="/"
              onClick={closeSidebar}
              className="block py-2 text-customBlue text-lg hover:text-opacity-70 transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/about`}
              onClick={closeSidebar}
              className="block py-2 text-customBlue text-lg hover:text-opacity-70 transition-colors"
            >
              {t("about")}
            </Link>
            <div>
              <button
                onClick={toggleIndustries}
                className="flex items-center justify-between w-full py-2 text-customBlue text-lg hover:text-opacity-70 transition-colors"
              >
                {t("industries")}
                <FaChevronDown
                  size={12}
                  className={`transform transition-transform duration-200 ${
                    isIndustriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                  isIndustriesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                {industryLinks.map((industry) => (
                  <Link
                    key={industry.key}
                    href={`/${locale}/industries/${industry.slug}`}
                    onClick={closeSidebar}
                    className="block py-1 text-customBlue text-base hover:text-opacity-70 transition-colors"
                  >
                    {t(industry.key)}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/projects`}
              onClick={closeSidebar}
              className="block py-2 text-customBlue text-lg hover:text-opacity-70 transition-colors"
            >
              {t("news")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              onClick={closeSidebar}
              className="block py-2 text-customBlue text-lg hover:text-opacity-70 transition-colors"
            >
              {t("contact")}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Dropdown;
