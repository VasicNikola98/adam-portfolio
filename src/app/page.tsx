"use client";

import Header from "./components/Header";
import Hero from "./home/Hero";
import WhyChooseUs from "./home/WhyChooseUs";
import Testimonials from "./home/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-auto">
      <Header />
      <div className="h-screen">
        <Hero />
      </div>
      <div className="min-h-screen">
        <WhyChooseUs />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
