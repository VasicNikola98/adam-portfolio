import { Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#12263a] text-white py-16">
      <div className="w-[90%] mx-auto flex flex-col items-center md:flex-row md:justify-between gap-16 md:gap-0">
        {/* Company Info Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-4xl font-bold font-poppins text-[#1f3a5f]">
            ADAM
          </div>
          <p className="text-lg mt-4 max-w-md mx-auto md:mx-0 text-gray-300">
            We provide reliable and efficient truck dispatching services that
            streamline logistics and enhance operational efficiency.
          </p>
          <div className="mt-6 text-lg flex flex-col items-center md:items-start text-gray-300">
            <div className="flex items-center gap-2 mb-3">
              <Phone size={20} className="text-[#1f3a5f]" />{" "}
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-[#1f3a5f]" />{" "}
              <p>contact@adam.com</p>
            </div>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center text-lg text-gray-300">
          <ul className="flex flex-col md:flex-row gap-6">
            <li>
              <Link
                href="/"
                className="hover:text-[#1f3a5f] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#1f3a5f] transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/carriers"
                className="hover:text-[#1f3a5f] transition duration-300"
              >
                Carriers
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="hover:text-[#1f3a5f] transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#1f3a5f] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-12 flex justify-center gap-8">
        <Link href="https://www.linkedin.com" target="_blank">
          <Linkedin
            size={30}
            className="hover:text-[#1f3a5f] transition duration-300"
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Instagram
            size={30}
            className="hover:text-[#1f3a5f] transition duration-300"
          />
        </Link>
        <Link href="https://www.facebook.com" target="_blank">
          <Facebook
            size={30}
            className="hover:text-[#1f3a5f] transition duration-300"
          />
        </Link>
        <Link href="mailto:contact@adam.com">
          <Mail
            size={30}
            className="hover:text-[#1f3a5f] transition duration-300"
          />
        </Link>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} ADAM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
