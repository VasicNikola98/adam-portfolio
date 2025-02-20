"use client";

import Header from "./components/Header";
import Hero from "./pages/Home/Sections/Hero";
import WhyChooseUs from "./pages/Home/Sections/WhyChooseUs";
import MissionVision from "./pages/Home/Sections/MissionVision";
import Testimonials from "./pages/Home/Sections/Testimonials";
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
        <MissionVision />
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
