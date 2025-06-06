"use client";

import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ContactPopover from "./ContactPopover/ContactPopover";
import TransitionLink from "./TransitionLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname])
  
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 mb-3 rounded-lg border-b border-neutral-200" style={{ zIndex: 11 }}>
      <div className="container mx-auto flex justify-start md:justify-center items-center py-4 px-6 md:px-12">
        {/* Logo or site name
        <Link href="/" className="text-2xl font-bold text-neutral-900">
          Brett M. Hixon
        </Link> */}

        {/* Navigation Links For Desktop*/}
        <div className="space-x-6 hidden md:flex gap-20">
          <TransitionLink href="/">Home</TransitionLink>
          <TransitionLink href="/about">About</TransitionLink>
          <TransitionLink href="/projects">Projects</TransitionLink>
          <TransitionLink href="/experience">Experience</TransitionLink>
          <ContactPopover />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-neutral-900" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-4">
              <SheetHeader>
                <SheetTitle className="text-4xl font-bold"><u>Menu</u></SheetTitle>
              </SheetHeader>
              <nav className="ml-4.5 mt-1.7 flex flex-col space-y-4">
                <TransitionLink href="/">Home</TransitionLink>
                <TransitionLink href="/about">About</TransitionLink>
                <TransitionLink href="/projects">Projects</TransitionLink>
                <TransitionLink href="/experience">Experience</TransitionLink>
                <div>
                  <ContactPopover /> {/* BONUS: This a mobile friendly hover card :) */}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
