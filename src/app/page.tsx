import React from "react";
import "@/components/HeroBanner"
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="bg-black flex min-h-screen flex-col items-center p-4">
      <HeroBanner />
      <footer>
        <p className="text-white">Put stuff here later.</p>
      </footer>
    </div>
  );
}
