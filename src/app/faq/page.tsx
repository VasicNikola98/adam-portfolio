import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "@/app/utils/config";
import Head from "next/head";
import FaqSection from "./faqSection";

export const metadata = {
  title: `FAQ | ${config.companyName}`,
  description: `Find answers to the most common questions about ${config.companyName} services. If you need further assistance, feel free to reach out to us.`,
};

const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQs | {config.companyName}</title>
        <meta
          name="description"
          content="Find answers to the most common questions about our ELD services, compliance support, and technical assistance."
        />
        <meta
          name="keywords"
          content="ELD, trucking, FAQs, compliance, support"
        />
        <meta name="author" content={config.companyName} />
        <meta property="og:title" content={`FAQs | ${config.companyName}`} />
        <meta
          property="og:description"
          content="Learn more about our ELD installation, technical support, and compliance assistance."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 shadow-md text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Find answers to the most common questions about {config.companyName}{" "}
            services. If you need further assistance, feel free to reach out to
            us.
          </p>
        </div>
      </section>

      <FaqSection></FaqSection>

      <Footer />
    </>
  );
};

export default Faq;
