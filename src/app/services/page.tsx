"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "@/app/utils/config";

import {
  FaTruck,
  FaRoute,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    title: "Dedication",
    description: `At ${config.companyName}, we are committed to providing top-quality ELD solutions that keep your business running smoothly and in full compliance with industry regulations. Our team works tirelessly to ensure drivers and fleet operators receive reliable support, quick issue resolution, and seamless integration. Your success on the road is our top priority.`,
    icon: <FaTruck className="text-6xl text-[#1f3a5f] mx-auto mb-4" />,
  },
  {
    title: "Optimization",
    description:
      "We help trucking businesses optimize their operations with efficient and user-friendly ELD solutions. Our advanced technology ensures accurate tracking, effortless log management, and real-time insights that improve productivity and reduce downtime. With our expertise, you can streamline compliance and maximize efficiency.",
    icon: <FaRoute className="text-6xl text-[#1f3a5f] mx-auto mb-4" />,
  },
  {
    title: "Negotiation",
    description:
      "We understand the challenges of the trucking industry, which is why we work to provide cost-effective and reliable ELD solutions tailored to your needs. Our team ensures you get the best service, value, and support, helping you stay compliant without unnecessary expenses or complications.",
    icon: <FaHandshake className="text-6xl text-[#1f3a5f] mx-auto mb-4" />,
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 shadow-md text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            At {config.companyName}, we provide reliable and stress-free ELD
            solutions tailored to meet the needs of trucking businesses.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 bg-white border-2 border-[#3b5a85] rounded-xl shadow-xl text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${index === 1 ? "md:scale-110 md:p-10 md:shadow-3xl" : ""}`}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-[#1f3a5f] mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h3 className="text-3xl font-extrabold text-[#1f3a5f] mb-6">
            Get in Touch
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our team is here to help. Contact us today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-[#3b5a85]">
              <FaPhoneAlt className="text-2xl text-[#1f3a5f]" />
              <a href={`tel:${config.phone}`} className="text-lg text-gray-800">
                {config.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-[#3b5a85]">
              <FaEnvelope className="text-2xl text-[#1f3a5f]" />
              <a
                href={`mailto:${config.infoEmail}`}
                className="text-lg text-gray-800"
              >
                {config.infoEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
