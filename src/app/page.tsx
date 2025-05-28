import React from "react";
import "@/components/HeroBanner"
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="bg-white flex min-h-screen flex-col items-center px-4">
      <HeroBanner />
      {/* Filler content to enable scrolling */}
      <main className="max-w-3xl mx-auto mt-10 space-y-8">
        {[...Array(20)].map((_, i) => (
          <p key={i} className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        ))}
      </main>
      {/* Pushes footer to the bottom */}
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
