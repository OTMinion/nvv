"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = useTranslations("footer");
  const p = useTranslations("nav");

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "#", color: "hover:text-[#1877F2]" },
    { name: "Youtube", icon: FaYoutube, href: "#", color: "hover:text-[#FF0000]" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#", color: "hover:text-[#0A66C2]" },
  ];

  const navLinks = [
    { name: p("home"), href: `/${locale}` },
    { name: p("about"), href: `/${locale}/about` },
    { name: p("industries"), href: `/${locale}/industries` },
    { name: p("news"), href: `/${locale}/projects` },
    { name: p("contact"), href: `/${locale}/contact` },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-customBlue text-gray-300 pt-12" role="contentinfo">
      <div className="container mx-auto max-w-7xl px-4 lg:px-28">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {/* Company Info */}
          <motion.div className="space-y-4" {...fadeInUp}>
            <h2 className="text-2xl font-bold text-white mb-6">{t("1")}</h2>
            <p className="text-base leading-relaxed opacity-90">{t("2")}</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" {...fadeInUp}>
            <h2 className="text-2xl font-bold text-white mb-6">{t("3")}</h2>
            <address className="text-base not-italic space-y-4">
              <p className="flex items-start">{t("4")}</p>
              <p className="flex items-start">{t("5")}</p>
              <p className="flex items-start">{t("6")}</p>
            </address>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-6" {...fadeInUp}>
            <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`text-2xl ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="bg-customRed mt-12 py-6 px-4 lg:px-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-sm opacity-90">{t("7")}</p>
            <p className="text-sm opacity-90 mt-2">All Rights Reserved</p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className="text-base hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
