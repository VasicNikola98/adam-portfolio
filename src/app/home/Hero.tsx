import Link from "next/link";
import Head from "next/head";
import config from "@/app/utils/config";

export default function Hero() {
  return (
    <>
      <Head>
        <title>Reliable ELD Solutions - {config.companyName}</title>
        <meta
          name="description"
          content="We ensure seamless and compliant fleet operations across the USA with our dependable ELD solutions. Our experienced team provides 24/7 support, technical assistance, and compliance guidance to keep your business running smoothly and stress-free."
        />
        <meta
          name="keywords"
          content="ELD solutions, fleet management, logistics, compliance, ELD support, fleet operations"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: `${config.companyName}`,
              url: "https://adameld.com",
              sameAs: ["https://www.facebook.com/adameld"],
            }),
          }}
        />
        <meta
          property="og:title"
          content={`Reliable ELD Solutions - ${config.companyName}`}
        />
        <meta
          property="og:description"
          content="We ensure seamless and compliant fleet operations across the USA with our dependable ELD solutions."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://adameld.com" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="relative w-full h-full flex items-center bg-white">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute top-16 right-12 w-[70%] h-[2px] bg-[#1f3a5f] opacity-50 transform rotate-45 md:block sm:hidden"></div>
          <div className="absolute bottom-16 right-16 w-[60%] h-[2px] bg-[#1f3a5f] opacity-50 transform rotate-135 md:block sm:hidden"></div>

          <div className="absolute top-24 right-24 w-64 h-16 bg-[#1f3a5f] opacity-60 rounded-lg shadow-md md:block sm:hidden"></div>
          <div className="absolute bottom-20 right-36 w-52 h-14 bg-[#1f3a5f] opacity-70 rounded-lg shadow-lg md:block sm:hidden"></div>

          <div className="absolute top-36 right-12 w-56 h-[2px] bg-[#1f3a5f] opacity-60 md:block sm:hidden"></div>
          <div className="absolute top-48 right-24 w-48 h-[2px] bg-[#1f3a5f] opacity-40 md:block sm:hidden"></div>
        </div>

        <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-6 text-gray-900">
            <h1 className="text-5xl font-bold font-poppins leading-tight text-[#1f3a5f] drop-shadow-lg">
              Reliable <span className="text-gray-600">ELD Solutions</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-lg font-medium tracking-wide leading-relaxed drop-shadow-sm">
              We ensure seamless and compliant fleet operations across the USA
              with our dependable ELD solutions. Our experienced team provides
              24/7 support, technical assistance, and compliance guidance to
              keep your business running smoothly and stress-free.
              <span className="block text-gray-600 font-medium mt-2 border-t border-gray-400 pt-2 italic text-gray-500 drop-shadow-md">
                Because every moment counts.
              </span>
            </p>

            <Link href="/contact">
              <button className="mt-6 border border-[#1f3a5f] text-white bg-[#1f3a5f] px-6 py-3 rounded-md hover:bg-white hover:text-[#1f3a5f] hover:border-[#1f3a5f] transition-all font-poppins shadow-md">
                Get Started
              </button>
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center relative">
            <div className="absolute top-40 right-16 w-[55%] h-[2px] bg-[#1f3a5f] opacity-40 transform rotate-45"></div>
            <div className="absolute bottom-16 right-28 w-[50%] h-[2px] bg-[#1f3a5f] opacity-40 transform rotate-135"></div>

            <div className="absolute top-12 right-32 w-72 h-24 bg-gradient-to-r from-[#1f3a5f] to-gray-200 opacity-50 rounded-lg shadow-md"></div>
            <div className="absolute bottom-8 right-48 w-56 h-16 bg-gradient-to-tl from-[#1f3a5f] to-gray-300 opacity-60 rounded-lg shadow-lg"></div>

            <div className="absolute top-28 right-16 w-64 h-[2px] bg-[#1f3a5f] opacity-40"></div>
            <div className="absolute bottom-4 right-40 w-48 h-[2px] bg-[#1f3a5f] opacity-30"></div>
          </div>
        </div>
      </section>
    </>
  );
}
