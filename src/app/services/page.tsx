"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaTruck,
  FaRoute,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    title: "Dedicated Dispatching",
    description:
      "Our dispatchers provide 24/7 support, real-time tracking, and route planning to ensure efficient deliveries.",
    icon: <FaTruck className="text-6xl text-[#1f3a5f] mx-auto mb-4" />,
  },
  {
    title: "Route Optimization",
    description:
      "We analyze traffic patterns and fuel efficiency to design the best possible routes, reducing costs and delays.",
    icon: <FaRoute className="text-6xl text-[#1f3a5f] mx-auto mb-4" />,
  },
  {
    title: "Load Negotiation",
    description:
      "We negotiate the best freight rates for our clients, ensuring profitable and secure load bookings.",
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
            We offer comprehensive dispatching services that help trucking
            businesses maximize efficiency and profitability.
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
            Whether you need reliable dispatching, optimized routes, or better
            load deals, our team is here to help. Contact us today!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-[#3b5a85]">
              <FaPhoneAlt className="text-2xl text-[#1f3a5f]" />
              <span className="text-lg text-gray-800">(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-[#3b5a85]">
              <FaEnvelope className="text-2xl text-[#1f3a5f]" />
              <span className="text-lg text-gray-800">
                info@dispatchservices.com
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
