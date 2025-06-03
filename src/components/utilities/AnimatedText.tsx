"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export default function AnimatedText({
  children,
  setFinishedAnimating = () => {},
  previousDone = true,
  textSpeed = 0.05,
}: {
  children: string;
  setFinishedAnimating?: React.Dispatch<React.SetStateAction<boolean>>;
  previousDone?: boolean;
  textSpeed?: number;
}) {
  const words = children.split(" ");
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: textSpeed,
      },
    },
  };
  const child = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Trigger the animation only once when in view and previous is done
  useEffect(() => {
    if (isInView && previousDone) {
      setShouldAnimate(true);
    }
  }, [isInView, previousDone]);

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      whileInView={shouldAnimate ? "visible" : "hidden"}
      viewport={{ once: true }}
      style={{ display: "inline-block", overflow: "hidden" }}
      onAnimationComplete={() => setFinishedAnimating(true)}
    >
      {/* Do it by word instead of letter because by letter causes words
      on the boundary to get separated, leading to harder reading */}
      {words.map((word: string, wordIdx: number) => (
        <React.Fragment key={wordIdx}>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {/* The actual child is the letter, animate each one */}
            {word.split("").map((char, charIdx) => (
              <motion.span
                key={`${wordIdx}-${charIdx}`}
                variants={child}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIdx < words.length - 1 && <span> </span>}
        </React.Fragment>
      ))}
    </motion.span>
  );
}
