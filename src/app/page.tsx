import React from "react";
import "@/components/HeroBanner"
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="bg-white flex min-h-screen flex-col items-center p-4">
      <HeroBanner />
      {/* Pushes footer to the bottom */}
      <div className="flex-1" />
      <footer>
        <p className="text-white">Put stuff here later.</p>
      </footer>
    </div>
  );
}
