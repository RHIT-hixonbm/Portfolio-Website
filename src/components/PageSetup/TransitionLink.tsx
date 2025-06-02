"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const update = () => {
        setIsMobile(window.innerWidth < 768);
      };

      update(); // run once on mount
      window.addEventListener("resize", update);

      return () => window.removeEventListener("resize", update);
    }
  }, []);

  const performClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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

        // Prepare for GPU acceleration
        document.documentElement.style.willChange = 'transform, opacity';

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

  return (
    <Link href={href} onClick={performClick}>
      <span
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
      >
        {children}
      </span>
    </Link>
  );
}
