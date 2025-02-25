"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-50 text-gray-900 shadow-md text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-extrabold text-[#1f3a5f] mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            We are more than just a dispatching service—we are a team dedicated
            to optimizing your trucking operations. Our mission is to ensure
            seamless logistics and provide reliable solutions that keep your
            business moving forward.
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
              From day one, our mission has been to simplify trucking logistics
              and maximize efficiency. Our expert dispatchers work tirelessly to
              coordinate seamless routes, minimize delays, and support drivers
              for a stress-free journey.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a proactive approach, we tackle challenges before they arise,
              so you can focus on growing your business without worrying about
              logistics management.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/img1.jpg"
              alt="Truck on the road"
              className="rounded-xl shadow-xl max-w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-6 md:px-12 gap-10 md:gap-16">
          <div className="md:w-1/2 text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-[#1f3a5f] mb-4">
              Driving Innovation
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our passion for logistics goes beyond the present—we are focused
              on redefining the future of transportation. By embracing
              cutting-edge technology and industry insights, we pave the way for
              more efficient and intelligent dispatching solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through continuous innovation, we aim to build a network that
              enhances connectivity, reduces operational costs, and delivers
              exceptional service to both carriers and clients alike.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/img3.jpg"
              alt="Truck vision"
              className="rounded-xl shadow-xl max-w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
