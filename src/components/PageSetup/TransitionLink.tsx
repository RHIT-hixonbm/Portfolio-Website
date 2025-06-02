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

    router.push(href, { onTransitionReady() {
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0)",
                },
                {
                    opacity: 0.2,
                    transform: "translateY(-35%)",
                }
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.15, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        )

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
                }
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.15, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        )
    }, })
}


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