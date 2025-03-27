"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTruck, FaHandshake, FaShippingFast } from "react-icons/fa";
import Link from "next/link";

const Carriers = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Join our network of trucking professionals and experience
            hassle-free ELD compliance with expert support, seamless
            integration, and 24/7 assistance. Partner with us to ensure reliable
            logging, regulatory compliance, and a stress-free driving
            experience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="space-y-12">
            <div className="p-8 bg-white border-2 border-gray-300 rounded-xl shadow-xl text-center">
              <FaTruck className="text-6xl text-[#1f3a5f] mx-auto mb-4" />
              <h3 className="text-3xl font-semibold text-[#1f3a5f] mb-4">
                Association Opportunities
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide reliable, industry-leading ELD solutions designed to
                keep your fleet compliant and operating smoothly. By partnering
                with us, you gain access to seamless ELD integration, real-time
                support, and expert guidance to navigate FMCSA regulations with
                ease. Our goal is to simplify compliance, minimize downtime, and
                enhance overall efficiency, allowing you to focus on growing
                your business without technical setbacks.
              </p>
              <Link href="/contact">
                <button className="mt-6 px-6 py-3 bg-[#1f3a5f] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#3b5a85] transition duration-300">
                  Join Our Network
                </button>
              </Link>
            </div>

            <div className="p-8 bg-[#1f3a5f] border-2 border-[#1f3a5f]-300 rounded-xl shadow-xl text-center">
              <FaHandshake className="text-6xl text-white mx-auto mb-4" />
              <h3 className="text-3xl font-semibold text-white mb-4">
                Reliable Partnerships
              </h3>
              <p className="text-lg text-white leading-relaxed">
                We build long-term relationships with drivers and fleet
                operators by providing dependable ELD solutions, seamless
                compliance support and technical assistance. Our commitment to
                reliability ensures that you stay compliant, connected, and
                focused on the road ahead without unnecessary disruptions.
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
            Sign up to become our partner by contacting us at
            <a
              href="mailto:info@adameld.com"
              className="text-[#1f3a5f] font-semibold"
            >
              {" "}
              info@adameld.com
            </a>
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
