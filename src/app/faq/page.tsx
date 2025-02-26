"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Adam Dispatch offer?",
    answer:
      "We provide professional dispatching services, connecting carriers with quality freight opportunities and ensuring seamless logistics management.",
  },
  {
    question: "How can I become a carrier partner?",
    answer:
      "You can join our network by contacting us at info@adamdispatch.com or calling +1 (555) 123-4567. We’ll guide you through the onboarding process.",
  },
  {
    question: "What are the working hours of Adam Dispatch?",
    answer:
      "Our dispatch team is available 24/7 to support your logistics needs and ensure smooth operations.",
  },
  {
    question: "How do I get paid as a carrier?",
    answer:
      "Payments are processed reliably and on time, according to our agreement with carriers. For payment-related inquiries, contact our finance team.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 shadow-md text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Find answers to the most common questions about Adam Dispatch
            services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 mb-4">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#1f3a5f] py-4 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <p className="text-gray-700 text-md leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faq;
