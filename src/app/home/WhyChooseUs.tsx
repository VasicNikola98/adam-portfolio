import { Users, Headset, Truck } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1f3a5f] to-[#12263a] min-h-screen flex items-center overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute top-16 left-12 w-[40%] h-[2px] bg-white opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-16 left-16 w-[35%] h-[2px] bg-white opacity-30 transform rotate-135"></div>

        <div className="absolute top-28 left-24 w-80 h-[2px] bg-white opacity-40"></div>
        <div className="absolute bottom-24 left-36 w-64 h-[2px] bg-white opacity-30"></div>

        <div className="absolute top-36 right-20 w-72 h-[2px] bg-white opacity-30"></div>
        <div className="absolute bottom-12 right-32 w-56 h-[2px] bg-white opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-5xl font-bold text-white mb-8 tracking-wide">
          Why Choose Us?
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-14 leading-relaxed">
          We provide reliable, efficient, and secure truck dispatching services
          that ensure smooth operations for your business.
        </p>

        {/* Key Features / Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {[
            {
              icon: (
                <Users className="w-16 h-16 stroke-[#1f3a5f] stroke-[1.5]" />
              ),
              title: "Experienced Team",
              text: "Our team of logistics experts ensures that your trucks are in capable hands, optimizing routes and efficiency.",
            },
            {
              icon: (
                <Headset className="w-16 h-16 stroke-[#1f3a5f] stroke-[1.5]" />
              ),
              title: "24/7 Support",
              text: "We offer round-the-clock support to handle any issues and keep your business running smoothly at all times.",
            },
            {
              icon: (
                <Truck className="w-16 h-16 stroke-[#1f3a5f] stroke-[1.5]" />
              ),
              title: "Reliable Delivery",
              text: "We prioritize timely deliveries, ensuring your goods reach their destinations safely and on schedule.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl flex flex-col items-center text-center mx-auto pb-16 w-full sm:max-w-[340px] md:max-w-[400px] min-h-full"
            >
              <div className="bg-white p-6 rounded-full shadow-lg mb-8 border-2 border-[#1f3a5f] flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-14">
          <Link href="/services">
            <button className="px-12 py-6 border border-white text-white bg-[#1f3a5f] hover:bg-white hover:text-[#1f3a5f] transition-all rounded-xl shadow-lg text-xl font-bold">
              About Our Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
