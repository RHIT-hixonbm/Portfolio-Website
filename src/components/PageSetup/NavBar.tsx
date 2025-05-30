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
import ContactPopover from "./ContactPopover";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 mb-3 rounded-lg border-b border-neutral-200">
      <div className="container mx-auto flex justify-start md:justify-center items-center py-4 px-6 md:px-12">
        {/* Logo or site name
        <Link href="/" className="text-2xl font-bold text-neutral-900">
          Brett M. Hixon
        </Link> */}

        {/* Navigation Links For Desktop*/}
        <div className="space-x-6 hidden md:flex gap-20">
          <Link
            href="/"
            className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold"
          >
            Projects
          </Link>
          <ContactPopover />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-neutral-900" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-4">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-bold text-neutral-700 hover:text-neutral-900"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-bold text-neutral-700 hover:text-neutral-900"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-lg font-bold text-neutral-700 hover:text-neutral-900"
                >
                  Projects
                </Link>
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
