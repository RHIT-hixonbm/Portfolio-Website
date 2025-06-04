"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import usePerformTransition from "@/hooks/usePerformTransition";

export default function TransitionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const performTransition = usePerformTransition();

  return (
    <Link href={href} onClick={(e) => performTransition(e, href)}>
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
