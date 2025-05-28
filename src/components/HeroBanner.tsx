"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="py-10 flex flex-col justify-center items-center text-center px-6 md:px-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

        {/* Name and description */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Brett M. Hixon
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Junior Computer Science student at Rose-Hulman & Software Developer
        </p>

        {/* Profile picture */}
        <div className="mb-8 rounded-full overflow-hidden w-36 h-36 mx-auto shadow-lg border-4 border-white">
            <Image
            src="/images/bust.png"
            alt="Brett M. Hixon"
            width={144}
            height={144}
            priority
            />
        </div>

        {/* View projects */}
        <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-700 transition"
            onClick={() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            View My Work
        </Button>
    </section>
  );
}