"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
      className={`${
        pathname === href
          ? "text-neutral-900 font-extrabold"
          : "text-neutral-700"
      } ${
        pathname !== href ? "hover:text-neutral-900" : ""
      } transition text-2xl font-bold  relative
        text-neutral-700
        hover:text-neutral-900
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[0.2rem]
        after:w-0
        after:bg-black
        hover:after:w-full
        after:transition-all
        after:ease-in-out
        after:duration-300`}
      onClick={performClick}
    >
      {children}
    </Link>
  );
}
