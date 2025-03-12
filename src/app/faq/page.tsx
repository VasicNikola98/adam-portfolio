"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: " Do you provide ELD device installation and setup assistance?",
    answer:
      "Yes, we help drivers and companies properly install and configure their ELDs to ensure compliance with FMCSA regulations.",
  },
  {
    question: "Do you offer 24/7 technical support?",
    answer:
      "Yes, our team is available around the clock to resolve issues related to connectivity, data synchronization, or software glitches.",
  },
  {
    question: "Do you provide training for drivers and dispatchers?",
    answer:
      "Yes, we offer comprehensive training to ensure users can efficiently operate the device and application.",
  },
  {
    question: "Can you assist with FMCSA compliance and inspections?",
    answer:
      "Yes, we help maintain accurate records and prepare for inspections to avoid fines and violations.",
  },
  {
    question: "How do you manage data and reporting?",
    answer:
      "We provide easy access to driving logs, mileage reports, and work hours, simplifying administration and performance analysis.",
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
            Find answers to the most common questions about Adam ELD services.
            If you need further assistance, feel free to reach out to us.
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
