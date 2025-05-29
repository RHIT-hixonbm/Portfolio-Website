"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="w-full py-10 flex flex-col justify-center items-center text-center px-6 md:px-12 bg-gradient-to-b from-zinc-200 to-zinc-100 text-neutral-900 shadow-lg rounded-lg mt-15.5 mb-5">
      {/* Name and description */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Brett M. Hixon</h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl">
        Junior Computer Science student at{" "}
        <a
          href="https://www.rose-hulman.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Rose-Hulman
        </a>{" "}
        & Software Developer
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

      {/* Mission */}
      <p className="text-lg md:text-xl max-w-3xl mb-8">
        {" "}
        Driven by an innovative and proactive nature; eager to apply my rigorous
        academic and industrial understanding in full-stack and systems development{" "}
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {/* View projects */}
        <Button
          size="lg"
          variant="outline"
          className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition cursor-pointer"
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View My Work
        </Button>
        {/* Download Resume */}
        <a href="/documents/resume.pdf" download>
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition cursor-pointer"
          >
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
}
