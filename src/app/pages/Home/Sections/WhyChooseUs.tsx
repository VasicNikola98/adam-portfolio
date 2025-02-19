export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100 z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          We pride ourselves on delivering reliable, efficient, and secure truck
          dispatching services that ensure smooth operations for your business.
        </p>

        {/* Key Features / Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Experienced Team
            </h3>
            <p className="text-gray-700">
              Our team of experts is highly experienced in logistics and
              dispatching, ensuring your trucks are in capable hands.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-700">
              We offer round-the-clock support to address any concerns and keep
              your operations running smoothly at all times.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Reliable Delivery
            </h3>
            <p className="text-gray-700">
              We prioritize timely deliveries, ensuring your goods reach their
              destination safely and on time.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <button className="px-6 py-3 border border-black text-white bg-black hover:bg-gray-800 transition-all rounded-md shadow-md">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
