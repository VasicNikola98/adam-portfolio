"use client";

import Header from "./components/Header";
import Hero from "./pages/Home/Sections/Hero";
import WhyChooseUs from "./pages/Home/Sections/WhyChooseUs";
import MissionVision from "./pages/Home/Sections/MissionVision";

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
      <div className="min-h-screen">
        <MissionVision />
      </div>
    </div>
  );
}
