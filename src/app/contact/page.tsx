import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";
import Link from "next/link";
import config from "@/app/utils/config";
import Head from "next/head";

export const metadata = {
  title: `Contact Us | ${config.companyName}`,
  description: `Get in touch with our ELD team for expert support and seamless compliance solutions. Available 24/7 to assist you!`,
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | {config.companyName}</title>
        <meta
          name="description"
          content="Get in touch with our ELD team for expert support and seamless compliance solutions. Available 24/7 to assist you!"
        />
        <meta
          name="keywords"
          content="ELD, trucking, contact, support, compliance"
        />
        <meta name="author" content={config.companyName} />
        <meta
          property="og:title"
          content={`Contact Us | ${config.companyName}`}
        />
        <meta
          property="og:description"
          content="Connect with our team for professional assistance with ELD compliance and trucking solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Connect with our ELD team for efficient solutions and professional
            support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center space-y-6 w-full md:w-[100%] border-t-2 border-[#1f3a5f]">
            <FaBuilding className="text-4xl text-[#1f3a5f] mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#1f3a5f] mb-4">
              Company Information
            </h3>
            {/*
            <p className="text-gray-700">
              <strong>PIB:</strong> {config.pib}
            </p>
            <p className="text-gray-700">
              <strong>Registration Number:</strong> {config.registrationNumber}
            </p>
            */}
            <p className="text-gray-700">Monday–Sunday: 24h</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center space-y-6 w-full md:w-[100%] border-t-2 border-[#1f3a5f]">
            <FaPhoneAlt className="text-4xl text-[#1f3a5f] mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#1f3a5f] mb-4">
              Call Us
            </h3>
            <a
              href={`tel:${config.phone}`}
              className="text-lg text-gray-700 font-bold hover:underline"
            >
              {config.phone}
            </a>

            <p className="text-gray-700 mt-2">Monday–Sunday: 24h</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center space-y-6 w-full md:w-[100%] border-t-2 border-[#1f3a5f]">
            <FaEnvelope className="text-4xl text-[#1f3a5f] mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#1f3a5f] mb-4">
              Email Us
            </h3>
            <a
              href={`mailto:${config.infoEmail}`}
              className="text-lg text-gray-700 font-bold hover:underline"
            >
              {config.infoEmail}
            </a>

            <p className="text-gray-700 mt-2">Monday–Sunday: 24h</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-gray-900 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h3 className="text-3xl font-bold text-[#1f3a5f] mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Find answers to the most common questions about {config.companyName}{" "}
            services. If you need further assistance, feel free to reach out to
            us.
          </p>
          <a
            href="/faq"
            className="bg-[#1f3a5f] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#163256] transition duration-300"
          >
            View FAQ
          </a>
        </div>
      </section>

      <section className="py-12 bg-white text-gray-900 text-center border-t border-gray-300 mt-10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h3 className="text-2xl font-bold text-[#1f3a5f] mb-4">
            Privacy Policy
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Your privacy is important to us. We are committed to protecting your
            personal information and ensuring transparency in how we collect,
            use, and safeguard your data.
          </p>

          <Link
            href="/privacypolicy"
            className="text-[#1f3a5f] font-semibold hover:underline"
          >
            Read Our Privacy Policy
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
