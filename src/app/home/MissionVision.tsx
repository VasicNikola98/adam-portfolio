export default function MissionVision() {
  return (
    <section className="relative w-full flex flex-col items-center py-20 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
        <div className="absolute top-16 left-10 w-[50%] h-[2px] bg-[#1f3a5f] opacity-20 transform rotate-45 blur-sm"></div>
        <div className="absolute bottom-16 right-10 w-[40%] h-[2px] bg-[#1f3a5f] opacity-20 transform rotate-135 blur-sm"></div>
        <div className="absolute bottom-24 right-28 w-72 h-[2px] bg-[#1f3a5f] opacity-15"></div>
      </div>

      <div className="relative z-10 w-[90%] mx-auto flex flex-col items-center md:grid md:grid-cols-2 gap-16">
        <div className="text-left space-y-6 text-gray-900">
          <h2 className="text-4xl font-extrabold font-poppins leading-tight text-[#1f3a5f] drop-shadow-lg">
            Our <span className="text-gray-600">Mission</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium tracking-wide leading-relaxed drop-shadow-sm">
            Our mission is to provide top-tier truck dispatching services that
            maximize efficiency and ensure seamless logistics operations. We aim
            to set new industry standards by delivering consistent, reliable
            service that our clients can count on every time.
            <span className="block text-gray-600 font-medium mt-2 border-t border-gray-400 pt-2 italic text-gray-500 drop-shadow-md">
              Your success is our priority.
            </span>
          </p>
        </div>

        <div className="text-left space-y-6 text-gray-900">
          <h2 className="text-4xl font-extrabold font-poppins leading-tight text-[#1f3a5f] drop-shadow-lg">
            Our <span className="text-gray-600">Vision</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium tracking-wide leading-relaxed drop-shadow-sm">
            We envision a future where logistics is fully optimized through
            smart dispatching solutions, ensuring growth and sustainability for
            all stakeholders. Our vision extends beyond immediate success,
            aiming to shape a sustainable and technologically advanced logistics
            ecosystem for future generations.
            <span className="block text-gray-600 font-medium mt-2 border-t border-gray-400 pt-2 italic text-gray-500 drop-shadow-md">
              Driving the industry forward, one dispatch at a time.
            </span>
          </p>
        </div>
      </div>

      <div className="mt-12">
        <a href="/aboutus">
          <button className="px-12 py-6 border border-[#1f3a5f] text-[#1f3a5f] bg-white hover:bg-[#1f3a5f] hover:text-white transition-all rounded-xl shadow-lg text-xl font-bold">
            View More
          </button>
        </a>
      </div>
    </section>
  );
}
