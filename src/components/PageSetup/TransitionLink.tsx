"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";

// CREDIT Codegrid at https://www.youtube.com/watch?v=hpt7SsZUCbs&t=136s
export default function TransitionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useTransitionRouter();
  const performClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    //Make sure this browser supports view transitions
    if (!(document as any).startViewTransition) {
      router.push(href);
      return;
    }

    router.push(href, {
      onTransitionReady() {
        document.documentElement.animate(
          [
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(0.9)" },
          ],
          {
            duration: 300,
            easing: "ease-in",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
          }
        );

        document.documentElement.animate(
          [
            { opacity: 0, transform: "scale(1.1)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          {
            duration: 300,
            easing: "ease-out",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      },
    });
  };

  return (
    <Link
      href={href}
      className="text-neutral-700 hover:text-neutral-900 transition text-2xl font-bold"
      onClick={performClick}
    >
      {children}
    </Link>
  );
}
