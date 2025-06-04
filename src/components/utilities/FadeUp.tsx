"use client";

import { motion } from "framer-motion";
import React from "react";

export default function FadeUp({ children }: { children: React.ReactNode }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-6"
    >
      {children}
    </motion.div>
  );
}
