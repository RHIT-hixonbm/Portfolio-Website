import { motion } from "framer-motion";

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
  const letters = children.split("");
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

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate={previousDone ? "visible" : "hidden"}
      style={{ display: "inline-block", overflow: "hidden" }}
      onAnimationComplete={() => setFinishedAnimating(true)}
    >
      {letters.map((char: string, idx: number) => (
        <motion.span
          key={idx}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
