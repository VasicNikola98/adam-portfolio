import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "@/app/utils/config";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Your privacy is important to us. This Privacy Policy outlines how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-left">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Last Updated: February 26, 2025
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {config.companyName}values your privacy. We provide on-demand
            services and real-time workforce tracking solutions through our
            mobile applications and website. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            By using our website or services, you consent to the collection and
            use of your information in accordance with this Privacy Policy. If
            you do not agree, please do not use our services.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We collect personal information to improve our services, provide
            customer support, and ensure compliance with regulations. We are
            committed to protecting your data and maintaining transparency in
            how we handle your information.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Your information will not be shared with third parties except as
            required by law or with your explicit consent. We implement security
            measures to safeguard your data.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
