"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ikonice iz lucide-react

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <nav className="flex justify-between items-center w-[90%] mx-auto">
        <div className="text-2xl font-bold font-poppins">ADAM</div>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex-row flex-col items-center md:flex gap-12 text-gray-700 font-poppins 
        ${isOpen ? "flex" : "hidden"} md:flex`}
        >
          {["Home", "Services", "Carriers", "About Us"].map((item) => (
            <li key={item} className="relative group">
              <a
                className="hover:text-gray-500 block py-2 md:py-1 transition-all"
                href="#"
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="border border-black text-black bg-transparent px-5 py-2 rounded-md hover:bg-black hover:text-white transition font-poppins">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
