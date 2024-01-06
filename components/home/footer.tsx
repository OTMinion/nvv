import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-gray-300 pt-12">
      <div className="container mx-28 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">TẬP ĐOÀN ĐẦU TƯ PHÁT TRIỂN NAM VIỆT</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
              cursus ante dapibus diam. Sed nisi.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Chi nhánh</h3>
            <address className="text-sm">
              Chi nhánh Quảng Ninh Khu công nghiệp Cái Lân, Bãi Cháy, Hạ Long, Quảng Ninh
              <br />
              Chi nhánh Hà Nội
              <br />
              Chi nhánh Phú Quốc
            </address>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                Youtube
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-customRed flex justify-between mt-12 px-28 py-4">
        <div>
          <p>© 2023 Tập đoàn đầu tư và phát triển Nam Việt</p>
          <br />
          <p className="-mt-5">All Rights Reserved</p>
        </div>

        <div className="flex gap-10 text-xl justify-center items-center">
          <Link href="/" className="hover:text-customBlue transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-customBlue transition duration-300">
            About
          </Link>
          <Link href="/industries" className="hover:text-customBlue transition duration-300">
            Industries
          </Link>
          <Link href="/careers" className="hover:text-customBlue transition duration-300">
            Careers
          </Link>
          <Link href="/projects" className="hover:text-customBlue transition duration-300">
            News
          </Link>
          <Link href="/contact" className="hover:text-customBlue transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
