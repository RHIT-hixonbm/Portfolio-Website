"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedText from "../utilities/AnimatedText";
import { useState } from "react";

export default function HeroBanner({ handleScrollToProjects }: { handleScrollToProjects?: () => void }) {
  const [nameFinishedAnimating, setNameFinishedAnimating] = useState(false);
  const [titleOneFinishedAnimating, setTitleOneFinishedAnimating] = useState(false);
  const [titleTwoFinishedAnimating, setTitleTwoFinishedAnimating] = useState(false);
  const [titleThreeFinishedAnimating, setTitleThreeFinishedAnimating] = useState(false);

  return (
    <section className="h-[50rem] w-full py-10 flex flex-col justify-between items-center text-center px-6 md:px-12 bg-gradient-to-b from-zinc-200 to-zinc-100 text-neutral-900 shadow-lg rounded-lg mt-15.5 mb-5 border-2">
      {/* Name and description */}
      <div>
        <h1 className="text-4xl md:text-7xl font-bold mb-4"><AnimatedText setFinishedAnimating={setNameFinishedAnimating} textSpeed={0.06}>Brett M. Hixon</AnimatedText></h1>
        <p className="text-lg md:text-3xl mb-8 max-w-6xl">
          <AnimatedText setFinishedAnimating={setTitleOneFinishedAnimating} textSpeed={0.01}>Junior Computer Science student at</AnimatedText>{" "}
          <a
            href="https://www.rose-hulman.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <AnimatedText setFinishedAnimating={setTitleTwoFinishedAnimating} previousDone={titleOneFinishedAnimating} textSpeed={0.01}>Rose-Hulman</AnimatedText>
          </a>{" "}
          <AnimatedText setFinishedAnimating={setTitleThreeFinishedAnimating} previousDone={titleTwoFinishedAnimating} textSpeed={0.01}>& Software Developer</AnimatedText>
        </p>
      </div>
      {/* Profile picture */}
      <div className="mb-8 rounded-full overflow-hidden w-50 h-50 mx-auto shadow-lg border-4 border-white">
        <Image
          src="/images/bust.png"
          alt="Brett M. Hixon"
          width={144}
          height={144}
          className="object-cover w-full h-full" 
          priority
        />
      </div>

      {/* Mission */}
      <p className="text-lg md:text-2xl max-w-6xl mb-8">
        {" "}
        <AnimatedText textSpeed={0.005}>
          Driven by an innovative and proactive nature; eager to apply my rigorous
          academic and industrial understanding in full-stack and systems development
        </AnimatedText>
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {/* View projects */}
        <Button
          size="lg"
          variant="outline"
          className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition cursor-pointer"
          onClick={handleScrollToProjects}
        >
          View My Work
        </Button>
        {/* View Resume */}
        <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition cursor-pointer"
          >
            View Resume
          </Button>
        </a>
      </div>
    </section>
  );
}
