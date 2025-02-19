"use client";

import Header from "./components/Header";
import Hero from "./pages/Home/Sections/Hero";
import WhyChooseUs from "./pages/Home/Sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-auto bg-gray-50">
      <Header />

      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">
        <WhyChooseUs />
      </div>
    </div>
  );
}
