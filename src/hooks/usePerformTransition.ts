"use client";
import { useTransitionRouter } from "next-view-transitions";
import React, { useState, useEffect } from "react";
import useIsMobile from "./useIsMobile";

// CREDIT Codegrid at https://www.youtube.com/watch?v=hpt7SsZUCbs&t=136s
export default function usePerformTransition() {
  const router = useTransitionRouter();
  const isMobile = useIsMobile();

  return function performTransition(
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>,
    href: string
  ) {
    e.preventDefault();

    // Only run on client-side
    if (typeof document === "undefined") {
      router.push(href);
      return;
    }

    //Make sure this browser supports view transitions
    if (!(document as any).startViewTransition) {
      router.push(href);
      return;
    }

    router.push(href, {
      onTransitionReady() {
        // Only run animations on client-side
        if (typeof document === "undefined") return;

        const desktopEase = "cubic-bezier(0.25, 0.1, 0.25, 1)"; // Optimized for smoothness
        const mobileEase = "cubic-bezier(0.87, 0, 0.13, 1)";

        if (!isMobile) {
          document.documentElement.animate(
            [
              { opacity: 1, transform: "translateZ(0) scale(1)" },
              { opacity: 0, transform: "translateZ(0) scale(0.95)" },
            ],
            {
              duration: 600,
              easing: desktopEase,
              fill: "forwards",
              pseudoElement: "::view-transition-old(root)",
            }
          );

          document.documentElement.animate(
            [
              { opacity: 0, transform: "translateZ(0) scale(1.05)" },
              { opacity: 1, transform: "translateZ(0) scale(1)" },
            ],
            {
              duration: 600,
              easing: desktopEase,
              fill: "forwards",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        } else {
          document.documentElement.animate(
            [
              { opacity: 1, transform: "translateY(0)" },
              { opacity: 0.2, transform: "translateY(-35%)" },
            ],
            {
              duration: 1000,
              easing: mobileEase,
              fill: "forwards",
              pseudoElement: "::view-transition-old(root)",
            }
          );

          document.documentElement.animate(
            [
              { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
              { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
            ],
            {
              duration: 1000,
              easing: mobileEase,
              fill: "forwards",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        }
      },
    });
  };
}
