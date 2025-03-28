"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "@/app/utils/config";
import Head from "next/head";
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - {config.companyName}</title>
        <meta
          name="description"
          content={`Learn more about ${config.companyName}, a trusted provider of ELD solutions and fleet management support. Our expert team ensures compliance and smooth operations for trucking companies across the USA.`}
        />
        <meta
          name="keywords"
          content={`About ${config.companyName}, ELD solutions, fleet management, FMCSA compliance, trucking support, electronic logging devices`}
        />
        <meta
          property="og:title"
          content={`About Us - ${config.companyName}`}
        />
        <meta
          property="og:description"
          content="We specialize in ELD compliance and fleet management, helping trucking companies stay on track with regulations and seamless operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adameld.com/about" />
        <meta
          property="og:image"
          content="https://adameld.com/images/about-us.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: `${config.companyName}`,
              url: "https://adameld.com/about",
              description:
                "Adam ELD provides advanced ELD solutions and fleet management support for trucking companies.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: `${config.phone}`,
                contactType: "Customer Support",
              },
            }),
          }}
        />
      </Head>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            At {config.companyName}, we specialize in providing reliable and
            efficient support for Electronic Logging Devices (ELDs) and fleet
            management applications. Our mission is to help truck drivers and
            fleet operators stay compliant with FMCSA regulations while ensuring
            smooth and hassle-free operations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 mb-16 gap-10 md:gap-16">
          <div className="md:w-1/2 text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-[#1f3a5f] mb-4">
              Committed to Excellence
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              From day one, our mission has been to simplify ELD compliance and
              ensure seamless fleet operations. Our expert team works tirelessly
              to provide reliable support, troubleshoot issues, and help drivers
              stay compliant with FMCSA regulations for a hassle-free
              experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a proactive approach, we resolve technical challenges before
              they impact your operations, so you can focus on growing your
              business without worrying about ELD management.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full h-auto">
              <img
                src="/images/img1.jpg"
                alt="Truck driving on a highway, symbolizing fleet operations and ELD compliance"
                className="max-w-full h-auto object-cover rounded-2xl"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to left, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",
                  maskImage:
                    "linear-gradient(to left, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-6 md:px-12 gap-10 md:gap-16">
          <div className="md:w-1/2 text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-[#1f3a5f] mb-4">
              Driving Innovation
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our passion for compliance and technology goes beyond the
              present—we are dedicated to shaping the future of ELD solutions.
              By leveraging cutting-edge advancements and industry expertise, we
              create smarter, more efficient ways to manage electronic logging
              and fleet operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through continuous innovation, we strive to enhance connectivity,
              streamline compliance processes, and provide exceptional support,
              ensuring that drivers and fleet managers stay ahead in an
              ever-evolving industry.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full h-auto">
              <img
                src="/images/img3.jpg"
                alt="Close-up of truck with advanced technology for fleet management and ELD solutions"
                className="max-w-full h-auto object-cover rounded-2xl"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",
                  maskImage:
                    "linear-gradient(to right, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
