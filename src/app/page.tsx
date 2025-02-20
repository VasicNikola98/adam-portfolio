"use client";

import Header from "./components/Header";
import Hero from "./pages/Home/Sections/Hero";
import WhyChooseUs from "./pages/Home/Sections/WhyChooseUs";
import AboutUs from "./pages/Home/Sections/AboutUs";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-auto">
      <Header />
      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">
        <WhyChooseUs />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}
