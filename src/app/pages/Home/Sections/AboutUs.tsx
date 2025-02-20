export default function AboutUs() {
  return (
    <section className="py-20 bg-white text-gray-900 text-center w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1f3a5f] mb-6">
          About Us
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
          At the heart of our company lies a passion for efficiency and
          exceptional service. We believe that great logistics go beyond just
          moving goods—they build lasting relationships and trust between
          carriers and clients.
        </p>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
          With a team of dedicated professionals, we bring years of expertise to
          the industry, constantly innovating to meet the evolving needs of our
          partners. Our commitment to quality ensures that every shipment is
          handled with precision and care.
        </p>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          We take pride in offering tailored solutions that simplify complex
          logistics challenges. By staying ahead of industry trends and
          leveraging technology, we help businesses operate smoothly and
          efficiently in a fast-paced world.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 text-white bg-[#1f3a5f] rounded-lg text-lg font-semibold shadow-md hover:bg-[#172b47] transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
