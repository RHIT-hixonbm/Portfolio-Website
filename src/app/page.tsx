import React from "react";
import "@/components/HeroBanner"
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer"
import Filler from "@/components/dev/Filler";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/*Main content area*/}
      <div className="bg-neutral-50 flex min-h-screen flex-col items-center px-4">
        <HeroBanner />
        {/* Filler content to enable scrolling */}
        <Filler />
      </div>
      <Footer />
    </>
  );
}
