export default function Testimonials() {
  return (
    /* eslint-disable react/no-unescaped-entities */
    <section className="relative w-full flex flex-col items-center py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-[#1f3a5f] text-center mb-12 tracking-wide">
        What Our Partners Are Saying
      </h2>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center space-y-6">
          <div className="relative">
            <p className="text-lg text-gray-700 italic text-center mb-6 leading-relaxed">
              "Working with this team has been an absolute pleasure. Their
              dedication to providing top-quality services has made our
              logistics operations smoother than ever."
            </p>
            <div className="absolute inset-0 flex justify-center items-center opacity-10">
              <div className="w-24 h-24 border-4 border-[#1f3a5f] rounded-full animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#1f3a5f] mb-2 tracking-wide">
            John Stevens
          </h3>
          <p className="text-gray-500 text-sm">Operations Manager</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center space-y-6">
          <div className="relative">
            <p className="text-lg text-gray-700 italic text-center mb-6 leading-relaxed">
              "The level of professionalism and efficiency that this company
              provides is unmatched. They truly understand the logistics
              industry and go above and beyond to meet our needs."
            </p>
            <div className="absolute inset-0 flex justify-center items-center opacity-10">
              <div className="w-24 h-24 border-4 border-[#1f3a5f] rounded-full animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#1f3a5f] mb-2 tracking-wide">
            Emily Parker
          </h3>
          <p className="text-gray-500 text-sm">Logistics Coordinator</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center space-y-6">
          <div className="relative">
            <p className="text-lg text-gray-700 italic text-center mb-6 leading-relaxed">
              " Their services have been a game-changer for us. Their team is
              always ready to step in and provide top-notch service, giving us
              the confidence to focus on growing our business without worrying
              about ELD issues."
            </p>
            <div className="absolute inset-0 flex justify-center items-center opacity-10">
              <div className="w-24 h-24 border-4 border-[#1f3a5f] rounded-full animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#1f3a5f] mb-2 tracking-wide">
            Michael Johnson
          </h3>
          <p className="text-gray-500 text-sm">Supply Chain Director</p>
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
    /* eslint-disable react/no-unescaped-entities */
  );
}
