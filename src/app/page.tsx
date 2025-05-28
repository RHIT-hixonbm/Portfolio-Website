import React from "react";
import "@/components/HeroBanner"
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer"
import Filler from "@/components/dev/Filler";

export default function Home() {
  return (
    <div className="bg-white flex min-h-screen flex-col items-center px-4">
      <HeroBanner />
      {/* Filler content to enable scrolling */}
      <Filler />
      <Footer />
    </div>
  );
}
