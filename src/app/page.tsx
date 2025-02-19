"use client";

import Header from "./components/Header";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-50">
      <div className="relative z-20">
        <Header />
      </div>

      {/* Hero section */}
      <section className="relative w-full h-full flex items-center bg-gradient-to-br from-white via-gray-100 to-gray-200">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute top-16 right-12 w-[70%] h-[2px] bg-gray-400 opacity-50 transform rotate-45 md:block sm:hidden"></div>
          <div className="absolute bottom-16 right-16 w-[60%] h-[2px] bg-gray-400 opacity-50 transform rotate-135 md:block sm:hidden"></div>

          <div className="absolute top-24 right-24 w-64 h-16 bg-gray-300 opacity-60 rounded-lg shadow-md md:block sm:hidden"></div>
          <div className="absolute bottom-20 right-36 w-52 h-14 bg-gray-400 opacity-70 rounded-lg shadow-lg md:block sm:hidden"></div>

          <div className="absolute top-36 right-12 w-56 h-[2px] bg-gray-500 opacity-60 md:block sm:hidden"></div>
          <div className="absolute top-48 right-24 w-48 h-[2px] bg-gray-500 opacity-40 md:block sm:hidden"></div>
        </div>

        <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-6 text-gray-900">
            <h1 className="text-5xl font-bold font-poppins leading-tight text-gray-800 drop-shadow-lg">
              Reliable <span className="text-gray-600">Truck Dispatching</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-lg font-medium tracking-wide leading-relaxed drop-shadow-sm">
              We ensure efficient and secure transportation management across
              the USA. Our experienced team is here to keep your operations
              running smoothly.
              <span className="block text-gray-600 font-medium mt-2 border-t border-gray-400 pt-2 italic text-gray-500 drop-shadow-md">
                With us your truck is in safe hands.
              </span>
            </p>
            <button className="mt-6 border border-black text-white bg-black px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white transition-all font-poppins shadow-md">
              Get Started
            </button>
          </div>

          <div className="hidden md:flex justify-center items-center relative">
            <div className="absolute top-40 right-16 w-[55%] h-[2px] bg-gray-500 opacity-40 transform rotate-45"></div>
            <div className="absolute bottom-16 right-28 w-[50%] h-[2px] bg-gray-500 opacity-40 transform rotate-135"></div>

            <div className="absolute top-12 right-32 w-72 h-24 bg-gradient-to-r from-gray-300 to-gray-200 opacity-50 rounded-lg shadow-md"></div>
            <div className="absolute bottom-8 right-48 w-56 h-16 bg-gradient-to-tl from-gray-400 to-gray-300 opacity-60 rounded-lg shadow-lg"></div>

            <div className="absolute top-28 right-16 w-64 h-[2px] bg-gray-600 opacity-40"></div>
            <div className="absolute bottom-4 right-40 w-48 h-[2px] bg-gray-600 opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
