"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTruck, FaHandshake, FaShippingFast } from "react-icons/fa";

const Carriers = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 shadow-md text-center relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
          <div className="absolute top-16 left-10 w-[50%] h-[2px] bg-[#1f3a5f] opacity-20 transform rotate-45 blur-sm"></div>
          <div className="absolute bottom-16 right-10 w-[40%] h-[2px] bg-[#1f3a5f] opacity-20 transform rotate-135 blur-sm"></div>
          <div className="absolute bottom-24 right-28 w-72 h-[2px] bg-[#1f3a5f] opacity-15"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Join our network of trusted carriers and gain access to consistent
            freight, reliable payments, and dedicated support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="space-y-12">
            <div className="p-8 bg-white border-2 border-gray-300 rounded-xl shadow-xl text-center">
              <FaTruck className="text-6xl text-[#1f3a5f] mx-auto mb-4" />
              <h3 className="text-3xl font-semibold text-[#1f3a5f] mb-4">
                Freight Opportunities
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide a steady stream of high-quality loads with
                competitive rates. Partner with us to keep your trucks moving
                and your business growing.
              </p>
              <button className="mt-6 px-6 py-3 bg-[#1f3a5f] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#3b5a85] transition duration-300">
                Join Our Network
              </button>
            </div>

            <div className="p-8 bg-[#1f3a5f] border-2 border-[#1f3a5f]-300 rounded-xl shadow-xl text-center">
              <FaHandshake className="text-6xl text-white mx-auto mb-4" />
              <h3 className="text-3xl font-semibold text-white mb-4">
                Reliable Partnerships
              </h3>
              <p className="text-lg text-white leading-relaxed">
                We build long-term relationships with our carriers, offering
                consistent loads, fair rates, and dependable communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h3 className="text-3xl font-extrabold text-[#1f3a5f] mb-6">
            Get Started Today
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sign up to become a carrier partner by contacting us at
            <span className="text-[#1f3a5f] font-semibold">
              {" "}
              carriers@dispatchservices.com
            </span>
            . We look forward to working with you!
          </p>
          <FaShippingFast className="text-5xl text-[#1f3a5f] mx-auto mb-4" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Carriers;
