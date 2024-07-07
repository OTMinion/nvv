import Link from "next/link";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("footer");
  const p = useTranslations("nav");
  return (
    <footer className="bg-customBlue text-gray-300 pt-12">
      <div className="container lg:mx-28 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("1")}</h3>
            <p className="text-sm">{t("2")}</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("3")}</h3>
            <address className="text-sm ">
              <div>{t("4")}</div>
              <br />
              <div>{t("5")}</div>
              <br />
              <div>{t("6")}</div>
            </address>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-500 hover:underline">
                Facebook
              </Link>
              <Link href="#" className="text-blue-500 hover:underline">
                Youtube
              </Link>
              <Link href="#" className="text-blue-500 hover:underline">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-customRed flex flex-col-reverse lg:flex-row justify-between mt-12 px-4 lg:px-28 py-4">
        <div className=" lg:mt-0">
          <p>{t("7")}</p>
          <br />
          <p className="-mt-5">All Rights Reserved</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:flex-row gap-10 text-xl justify-center items-center ">
          <Link href="/" className="hover:text-customBlue transition duration-300">
            {p("home")}
          </Link>
          <Link href="/about" className="hover:text-customBlue transition duration-300">
            {p("about")}
          </Link>
          <Link href="/industries" className="hover:text-customBlue transition duration-300">
            {p("industries")}
          </Link>
          <Link href="/careers" className="hover:text-customBlue transition duration-300">
            {p("career")}
          </Link>
          <Link href="/projects" className="hover:text-customBlue transition duration-300">
            {p("news")}
          </Link>
          <Link href="/contact" className="hover:text-customBlue transition duration-300">
            {p("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
