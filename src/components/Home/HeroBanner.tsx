"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedText from "../utilities/AnimatedText";
import { useState } from "react";
import { easeOut, motion } from "framer-motion"

export default function HeroBanner({ handleScrollToProjects }: { handleScrollToProjects?: () => void }) {
  const [nameFinishedAnimating, setNameFinishedAnimating] = useState(false);
  const [titleOneFinishedAnimating, setTitleOneFinishedAnimating] = useState(false);
  const [titleTwoFinishedAnimating, setTitleTwoFinishedAnimating] = useState(false);
  const [titleThreeFinishedAnimating, setTitleThreeFinishedAnimating] = useState(false);

  return (
    <section className="min-h-[100svh] w-full py-6 md:py-10 flex flex-col justify-center md:justify-between gap-6 md:gap-10 items-center text-center px-6 md:px-12 bg-gradient-to-b from-zinc-200 to-zinc-100 text-neutral-900 shadow-lg rounded-lg mt-15.5 mb-5 border-2">
      {/* Name and description */}
      <div>
        <h1 className="text-4xl md:text-7xl font-bold mb-4"><AnimatedText setFinishedAnimating={setNameFinishedAnimating} textSpeed={0.06}>Brett M. Hixon</AnimatedText></h1>
        <p className="text-lg md:text-3xl mb-8 max-w-6xl">
          <AnimatedText setFinishedAnimating={setTitleOneFinishedAnimating} textSpeed={0.01}>Senior Computer Science student at</AnimatedText>{" "}
          <a
            href="https://www.rose-hulman.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <AnimatedText setFinishedAnimating={setTitleTwoFinishedAnimating} previousDone={titleOneFinishedAnimating} textSpeed={0.01}>Rose-Hulman</AnimatedText>
          </a>{" "}
          <AnimatedText setFinishedAnimating={setTitleThreeFinishedAnimating} previousDone={titleTwoFinishedAnimating} textSpeed={0.01}>with specializations in AI and Cybersecurity, and Co-Founder & Lead AI Developer of Fafnir Aerospace</AnimatedText>
        </p>
      </div>
      {/* Profile picture */}
      <motion.div className="relative shrink-0 opacity-0 mb-8 rounded-full overflow-hidden w-full max-w-[9rem] md:max-w-[13rem] lg:max-w-[16rem] xl:max-w-[18rem] 2xl:max-w-[20rem] aspect-[1] mx-auto shadow-lg border-4 border-white" initial={{ scale: 0, opacity: 0 }} animate={{scale: nameFinishedAnimating ? 1 : 0, opacity: nameFinishedAnimating ? 1 : 0}} transition={{duration: 0.2, ease: easeOut}}>
        <Image
          src="/images/bust.png"
          alt="Brett M. Hixon"
          fill
          className="object-cover w-full h-full" 
          priority
        />
      </motion.div>

      {/* Mission */}
      <p className="text-lg md:text-2xl max-w-6xl mb-8">
        {" "}
        <AnimatedText textSpeed={0.005}>
          Driven by an innovative and proactive nature; eager to apply my rigorous
          academic and industrial understanding in full-stack and systems development
        </AnimatedText>
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center pb-20">
        {/* View projects */}
        <motion.div initial={{scaleY: 0}} animate={{scaleY: nameFinishedAnimating ? 1 : 0}} transition={{duration: 0.5, ease: "easeOut"}} style={{overflow: "hidden"}}>
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition cursor-pointer md:h-12 md:px-8 md:text-base lg:h-14 lg:px-10 lg:text-lg xl:h-16 xl:px-12 xl:text-xl"
            onClick={handleScrollToProjects}
          >
            View My Work
          </Button>
        </motion.div>
        {/* View Resume */}
        <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
        <motion.div initial={{scaleY: 0}} animate={{scaleY: nameFinishedAnimating ? 1 : 0}} transition={{duration: 0.5, ease: "easeOut"}} style={{overflow: "hidden"}}>
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition cursor-pointer md:h-12 md:px-8 md:text-base lg:h-14 lg:px-10 lg:text-lg xl:h-16 xl:px-12 xl:text-xl"
          >
            View Resume
          </Button>
        </motion.div>
        </a>
      </div>
    </section>
  );
}
