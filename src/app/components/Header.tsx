"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center w-[90%] mx-auto">
        <Link href="/">
          <div className="text-2xl font-bold font-poppins">
            <span className="text-[#1f3a5f]">ADAM</span>{" "}
          </div>
        </Link>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex md:flex-row flex-col items-center gap-12 text-gray-700 font-poppins shadow-md md:shadow-none 
          ${isOpen ? "flex" : "hidden"} md:flex`}
        >
          <ul className="md:flex md:flex-row flex flex-col items-center w-full md:w-auto gap-12">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Join Us", path: "/carriers" },
              { name: "About Us", path: "/aboutus" },
            ].map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className={`block py-2 md:py-1 transition-all ${
                    pathname === item.path
                      ? "text-gray-900 font-semibold border-b-2 border-gray-600"
                      : "hover:text-gray-500"
                  }`}
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="md:hidden w-full flex justify-center mb-4">
            <Link href="/contact">
              <button className="border border-[#1f3a5f] text-[#1f3a5f] bg-white px-5 py-2 rounded-md hover:bg-[#1f3a5f] hover:text-white transition font-poppins">
                Contact
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <button className="border border-[#1f3a5f] text-[#1f3a5f] bg-white px-5 py-2 rounded-md hover:bg-[#1f3a5f] hover:text-white transition font-poppins">
              Contact
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
